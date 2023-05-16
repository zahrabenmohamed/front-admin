import { Accordion, AccordionTab } from 'primereact/accordion';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';


const questionsAndAnswers = [
  {
    question: 'What is DocGen ?',
    answer:
      'Document Generation is the process of creating dynamic documents based on predefined templates. It allows you to automate the generation of documents such as contracts, reports, invoices, and more by merging data with the template structure.'
  },
  {
    question: 'What are the benefits of using document generation?',
    answer:
      'Document generation offers several benefits, including increased efficiency, accuracy, and consistency in creating documents. It saves time by automating the process, reduces errors, and allows for customization based on specific data or variables'
  },
  {
    question: 'What types of documents can be generated using document generation?',
    answer:
      'Document generation can be used to create various types of documents, such as contracts, reports, invoices, letters, certificates, and more. The flexibility of document generation allows for the creation of virtually any document that requires merging structured data with a predefined template.'
  },
  {
    question: ' Is it possible to integrate document generation with other systems or applications?',
    answer:
      'Yes, document generation systems often provide APIs or integrations that allow seamless integration with other systems or applications. This enables the automated generation of documents using data from existing databases, CRMs, or other software solutions.'
  }
];
const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  

  return (

   <>
   <Card>
   <h2>FAQ</h2>
   <h4>Have Questions we are here to help</h4>
   <span className="p-input-icon-left mb-4">
      <i className="pi pi-search" />
      <InputText   placeholder="Search..." />
   </span>
   <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
  {questionsAndAnswers.map((qa, index) => (
    <AccordionTab key={index} header={<div>{qa.question} </div>}>
      {qa.answer}
    </AccordionTab>
  ))}
    </Accordion>
    </Card>
   
   </>
  )};

  export default Help;