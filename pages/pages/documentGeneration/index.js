import React,{ useState } from 'react';

export default function GenerateTemplate() {
  const [template, setTemplate] = useState('');
  const [flux, setFlux] = useState([]);

  const handleAddFlux = () => {
    setFlux([...flux, { name: '', value: '' }]);
  };

  const handleFluxChange = (index, field, value) => {
    const updatedFlux = [...flux];
    updatedFlux[index][field] = value;
    setFlux(updatedFlux);
  };

  const handleGenerateTemplate = async () => {
    const requestBody = {
      template: template,
      flux: flux,
    };

    try {
      // Send the API request to generate the template
      const response = await fetch('http://localhost:8082/generate-template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Handle the response (e.g., download the generated template)
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'generated_template.pdf';
        link.click();
        URL.revokeObjectURL(url);
      } else {
        // Handle error response
        console.error('Failed to generate template');
      }
    } catch (error) {
      // Handle any network or other errors
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h1>Generate Document</h1>
      <label htmlFor="template">Template:</label>
      <input
        type="text"
        id="template"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
      />
      <br />
      <h2>Flux:</h2>
      {flux.map((item, index) => (
        <div key={index}>
          <label htmlFor={`fluxName-${index}`}>Name:</label>
          <input
            type="text"
            id={`fluxName-${index}`}
            value={item.name}
            onChange={(e) => handleFluxChange(index, 'name', e.target.value)}
          />
          <br />
          <label htmlFor={`fluxValue-${index}`}>Value:</label>
          <input
            type="text"
            id={`fluxValue-${index}`}
            value={item.value}
            onChange={(e) => handleFluxChange(index, 'value', e.target.value)}
          />
          <br />
        </div>
      ))}
      <button onClick={handleAddFlux}>Add Flux</button>
      <br />
      <br />
      <button onClick={handleGenerateTemplate}>Generate Template</button>
    </div>
  );
}
