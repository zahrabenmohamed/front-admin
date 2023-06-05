import React, { useEffect, useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';


export default function TemplatePage() {
  const [template, setTemplate] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const [generatedDocument, setGeneratedDocument] = useState(null);
  const [templateCode, setTemplateCode] = useState('');
  const toast = useRef(null);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/${templateCode}`);
        setTemplate(response.data);
      } catch (error) {
        console.error('Error fetching template:', error);
      }
    };

    fetchTemplate();
  }, [templateCode]);

  const handleInputChange = (paramName, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [paramName]: value,
    }));
  };

  const generateTemplate = async () => {
    try {
      const requestBody = {
        template: templateCode,
        flux: [
          {
            name: 'customer',
            value: JSON.stringify({ name: inputValues['client_fname'], branch: inputValues['agency'] }),
          },
          {
            name: 'transactions',
            value: JSON.stringify({
              month: inputValues['openingDate'],
              data: [
                { id: 11, label: 'trns1', amount: 0 },
                { id: 2, label: 'trns2', amount: 23 },
                { id: 3, label: 'trns3', amount: 123 },
                { id: 4, label: 'trns4', amount: 789 },
              ],
            }),
          },
        ],
      };
      const response = await axios.post('http://localhost:8082/generate-template', requestBody, {
        responseType: 'arraybuffer',
      });

      setGeneratedDocument(response.data);

      // Display success toast
      toast.current.show({
        severity: 'success',
        summary: 'Document Generated',
        detail: 'The document has been generated successfully!',
      });
    } catch (error) {
      console.error('Error generating template:', error);
    }
  };

  const downloadDocument = () => {
    const blob = new Blob([generatedDocument], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'generated-document.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Template Details</h1>
      <div>
        <InputText
          placeholder="Enter template code"
          value={templateCode}
          onChange={(e) => setTemplateCode(e.target.value)}
        />
      </div>
      {template ? (
        <div>
          <p>Path: {template.path}</p>
          <h2>Template Parameters:</h2>
          <ul>
            {template.templateParam.map((param) => (
              <li key={param.id}>
                <p>{param.name}</p>
                <InputText
                  placeholder={`Enter ${param.name}`}
                  value={inputValues[param.name] || ''}
                  onChange={(e) => handleInputChange(param.name, e.target.value)}
                />
                <br />
              </li>
            ))}
          </ul>
          <div>
            <Button label="Generate" onClick={generateTemplate} disabled={!templateCode} />
            {generatedDocument && (
              <Button label="Download" onClick={downloadDocument} />
            )}
          </div>
        </div>
      ) : (
            <ProgressSpinner style={{width: '50px', height: '50px'}} />
        
      )}
      <Toast ref={toast} position="bottom-right" />
    </div>
  );
}
