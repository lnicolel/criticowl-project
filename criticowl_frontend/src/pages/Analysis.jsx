import React from "react";
import Button from "../components/Button/Button";
import axios from 'axios';

const formatResult = (result) => {
  if (typeof result === 'string') {
    return result;
  }

  if (Array.isArray(result)) {
    return (
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid black', padding: '4px' }}>Word</th>
            <th style={{ borderBottom: '2px solid black', padding: '4px' }}>Type</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '4px' }}>&quot;{item[0]}&quot;</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>&quot;{item[1]}&quot;</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (typeof result === 'object') {
    return JSON.stringify(result, null, 2);
  }

  return result;
};

function Analysis() {
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const analyzeText = async (type) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/analyze/', {
        text: value,
        analysis_type: type
      }, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error analyzing text:', error);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-4xl bg-cblue text-white font-bold p-2.5 text-center">
        Analysis
      </h1>
      <div className="border-5 border-cblue bg-white min-h-[400px] p-4">
        <textarea
          value={value}
          onChange={onChange}
          className="w-full h-full p-4 border-2"
          placeholder="Enter your text..."
        />
      </div>
      <div className="mt-10 w-full justify-center gap-6 flex">
        <Button className="!p-2 text-base" onClick={() => analyzeText('pos')}>Part-of-Speech analysis</Button>
        <Button className="!p-2 text-base" onClick={() => analyzeText('ner')}>NER analysis</Button>
        <Button className="!p-2 text-base" onClick={() => analyzeText('sentiment')}>Sentiment analysis</Button>
      </div>
      {result && (
        <div className="mt-4 p-4 border-2">
          <h2 className="text-2xl font-bold">Analysis Result</h2>
          <div>{formatResult(result)}</div>
        </div>
      )}
    </div>
  );
}

export default Analysis;
