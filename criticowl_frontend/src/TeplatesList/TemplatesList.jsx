import React from "react";

function TemplatesList({ templates }) {
  return (
    <table>
      <tbody>
        {templates.map(template => (
          <tr key={template.id}>
            <td>{template.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TemplatesList;
