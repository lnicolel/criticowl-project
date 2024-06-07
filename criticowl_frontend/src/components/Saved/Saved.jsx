import { useEffect, useState, useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from "../Button/Button";

const Saved = () => {
  const [savedFiles, setSavedFiles] = useState([]);
  const templateRef = useRef();
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchSavedFiles();
  }, []);

  const fetchSavedFiles = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/saved-files/", {
        method: "GET",
        headers: {
          "Authorization": `Token ${token}`
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch saved files");
      }

      const data = await response.json();
      setSavedFiles(data);
    } catch (error) {
      console.error("Error fetching saved files:", error);
    }
  };

  const saveAsPDF = () => {
    const input = templateRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf");
      });
  };

  const saveAsPNG = () => {
    const input = templateRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'download.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <div className="flex flex-1 flex-col" ref={templateRef}>
      <h1 className="text-4xl bg-cblue text-white font-bold p-2.5 text-center">
        Saved Files
      </h1>
      <div className="flex w-full justify-between gap-6 mt-10">
        <Button onClick={saveAsPDF}>Save as PDF</Button>
        <Button onClick={saveAsPNG}>Save as PNG</Button>
      </div>
      <table className="table-fixed bg-white mt-10">
        <thead>
          <tr>
            <th className="px-4 py-2">File Name</th>
            <th className="px-4 py-2">Download</th>
          </tr>
        </thead>
        <tbody>
          {savedFiles.map((file) => (
            <tr key={file.id}>
              <td className="border px-4 py-2">{file.name}</td>
              <td className="border px-4 py-2">
                <a href={file.url} download={file.name} className="text-blue-500 hover:underline">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Saved;
