import React, { useEffect, useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from "../components/Button/Button";
import InputDashboard from "../components/Input/InputDashboard";
import { useTemplatesStore } from "../store/templates.mjs";
import FiveModal from "../components/Modals/FiveModal";
import WheelModal from "../components/Modals/WheelModal";
import PestleModal from "../components/Modals/PestleModal";

function Dashboard() {
  const { templates } = useTemplatesStore();
  const [selectedTemplate, setSelectedTemplate] = React.useState(templates[0].name);
  const [values, setValues] = React.useState({});
  const [openFiveModal, setOpenFiveModal] = React.useState({
    five_w: false,
    wheel_of_reasoning: false,
    pestle: false,
  });
  const template = templates.find((t) => t.name === selectedTemplate);

  const onSelect = (e) => {
    setSelectedTemplate(e.target.value);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const initial = templates[0]?.list.reduce((acc, item) => {
      acc[item.id] = item.answer;
      return acc;
    }, {});
    setValues(initial);
  }, [templates]);

  const toggleModal = () => {
    setOpenFiveModal((prev) => ({
      ...prev,
      [template.name]: !openFiveModal[template.name],
    }));
  };

  const formRef = useRef();

  const saveAsPNG = () => {
    const input = formRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'download.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const saveAsPDF = () => {
    const input = formRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('download.pdf');
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <div ref={formRef}>
        <h1 className="text-4xl bg-cblue text-white font-bold p-5 text-center" style={{ textAlign: 'center', marginBottom: '20px' }}>
          {template?.title || "Select a template"}
        </h1>
        <table className="table-fixed bg-white w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 w-1/5">Key factors</th>
              <th className="px-4 py-2 w-2/5">Questions</th>
              <th className="px-4 py-2 w-3/5">Your thoughts</th>
            </tr>
          </thead>
          <tbody>
            {template?.list.map((item, index) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{index + 1}. {item.method}</td>
                <td className="border px-4 py-2">{item.question}</td>
                <td className="border px-4 py-2">
                  <InputDashboard
                    onChange={onChange}
                    name={item.id}
                    value={values[item.id]}
                    className="w-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="text-4xl bg-cblue text-white font-bold p-5 text-center" style={{ marginTop: '20px' }}></h1>
      </div>
      <div className="flex w-full justify-between gap-6 mt-10">
        <Button onClick={toggleModal}>INFO</Button>
        <div className="flex justify-end gap-6 ">
          <select
            className="px-2 text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            onChange={onSelect}
          >
            {templates.map((item) => (
              <option key={item.name} value={item.name}>
                {item.title}
              </option>
            ))}
          </select>
          <Button onClick={saveAsPDF}>Save as PDF</Button>
          <Button onClick={saveAsPNG}>Save as PNG</Button>
        </div>
      </div>
      <FiveModal open={openFiveModal.five_w} onClose={toggleModal} />
      <WheelModal open={openFiveModal.wheel_of_reasoning} onClose={toggleModal} />
      <PestleModal open={openFiveModal.pestle} onClose={toggleModal} />
    </div>
  );
}

export default Dashboard;
