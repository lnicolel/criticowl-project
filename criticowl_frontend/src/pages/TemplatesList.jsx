import Button from "../components/Button/Button";
import { useTemplatesStore } from "../store/templates.mjs";

function TemplatesList() {
  const { templates, removeTemplate } = useTemplatesStore();

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-4xl bg-cblue text-white font-bold p-2.5 text-center">
        All templates
      </h1>
      <table className="table-fixed bg-white">
        <thead color="">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {templates?.map((item, index) => (
            <tr key={item.id}>
              <td className="border px-4 py-2 w-[200px]">
                {index + 1}. {item.name}
              </td>
              <td className="border px-4 py-2 w-[600px]">{item.title}</td>
              <td className="border px-4 py-2 w-ful">
                <Button className="!p-2 text-lg" onClick={removeTemplate}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TemplatesList;
