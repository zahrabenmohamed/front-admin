import { useState, useRef, React } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Toolbar } from "primereact/toolbar";
import { Toast } from "primereact/toast";
import axios from "axios";

const AddParameters = () => {
  const [parameters, setParameters] = useState(""); // state for DataTable data
  const [dialogVisible, setDialogVisible] = useState(false);
  const [editDialogVisible, setEditDialogVisible] = useState(false); // state for showing/hiding the dialog
  const [formData, setFormData] = useState({}); // state for storing form data in the dialog
  const [template, setTemplate] = useState({
    code: ""
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const fileUploadRef = useRef(null);
  const toast = useRef(null);

  const header = (
    <div className='flex flex-column md:flex-row md:justify-content-between md:align-items-center'>
      <h5 className='m-0'>Add Parameters</h5>
      <Button
        label='New'
        type='button'
        icon='pi pi-plus'
        className='mr-2'
        onClick={() => {
          setFormData({}); // clear the form data
          setDialogVisible(true); // show the dialog
        }}
      />
    </div>
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTemplate((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const leftToolbarTemplate = () => {
    return (
      <div className='my-2'>
        <InputText
          value={template.code}
          id='code'
          className='mr-2'
          placeholder='Template Name'
          name='code'
          onChange={handleChange}
        />
       
      </div>
    );
  };

  const handleSave = async () => {
    fileUploadRef.current.upload();
  };

  const uploadFile = (file) => {
    const Params = { templateParam: parameters };
    const template1 = {
      ...template,
      description: "zahra test",


    };
    console.log(template1);
    console.log("------------------------")
    const data = Object.assign({}, template1, Params);
    console.log("this is my data ", data);

    const payload = new FormData();
    payload.append("data", JSON.stringify(data));
    payload.append("file", file);
    console.log("#################");
    console.log(payload);

    // Send the POST request using Axios
    
    axios.post("http://localhost:8082/addtemplate", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data);
        // Handle the success response
        setFormData({}); // Reset the form data
        setTemplate({ code: "" }); // Clear the inputs
        setParameters([]);
        clearFile();
        toast.current.show({
          severity: "success",
          detail: "Template saved successfully",
          life: 3000, // Display the toast for 3 seconds
        });
      })
      .catch((error) => {
        console.error(error);
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Failed to save the template",
          life: 3000, // Display the toast for 3 seconds
        });
        // Handle the error
      });
  };

  const handleFileUpload = (event) => {
    const file = event.files[0];
    uploadFile(file);
  };
  const clearFile = () => {
    setSelectedFile(null);
    fileUploadRef.current.clear(); // Clear the file input
  };

  const rightToolbarTemplate = () => {
    return (
      <>
        <FileUpload
          ref={fileUploadRef}
          mode='basic'
          label='Import'
          chooseLabel='Import Template'
          className='mr-2 inline-block'
          customUpload
          uploadHandler={handleFileUpload}
          onSelect={(e) => setSelectedFile(e.files[0])}
        />
        <Button
          style={{ marginRight: "8px" }}
          label='Clear File'
          severity='danger'
          onClick={clearFile}
        />
        <Button label='Save' onClick={handleSave} severity='success' />
      </>
    );
  };

  const handleDelete = (rowData) => {
    const updatedParameters = parameters.filter((param) => param !== rowData);
    setParameters(updatedParameters);
  };

  const handleEdit = (rowData) => {
    setFormData({ ...rowData });
    setEditDialogVisible(true);
  };
  const handleEditParameter = (event) => {
    console.log(event);
    const updatedParameters = [...parameters]; // Create a copy of the parameters array
    const index = updatedParameters.findIndex(
      (param) => param.name === event.rowData.name
    );

    if (index !== -1) {
      updatedParameters[index] = { ...rowData }; // Update the parameter at the found index with the edited row data
      setParameters(updatedParameters); // Update the parameters state with the updated array
      setEditDialogVisible(false); // Hide the edit dialog
    }
  };

  // function to handle adding a new parameter to the DataTable
  const handleAddParameter = () => {
    if (Object.keys(formData).length === 0) {
      setDialogVisible(false);
      toast.current.show({
        severity: "info",
        detail: "Empty Parameter",
        life: 1000,
      });
    } else {
      setParameters([...parameters, formData]); // add the form data to the DataTable
      setFormData({}); // clear the form data
      setDialogVisible(false); // hide the dialog
    }
  };

  const parameterDialogFooter = (
    <>
      <Button
        label='Cancel'
        icon='pi pi-times'
        text
        onClick={() => setDialogVisible(false)}
      />
      <Button
        label='Add'
        icon='pi pi-check'
        text
        onClick={handleAddParameter}
      />
    </>
  );
  const parameterEditDialogFooter = (rowData) => {
    console.log(rowData);

    return (
      <>
        <Button
          label='Cancel'
          icon='pi pi-times'
          text
          onClick={() => setEditDialogVisible(false)}
        />
        <Button
          label='Edit'
          icon='pi pi-check'
          text
          onClick={handleEditParameter}
        />
      </>
    );
  };
  const actionTemplate = (rowData) => {
    return (
      <div>
        <Dialog
          visible={editDialogVisible}
          style={{ width: "450px" }}
          onHide={() => setEditDialogVisible(false)}
          header='Edit Parameter'
          footer={parameterEditDialogFooter}
        >
          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='name'>Name</label>
            </div>
            <div className='p-col-8'>
              <InputText
                id='name'
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='selector'>Selector</label>
            </div>
            <div className='p-col-8'>
              <InputText
                id='selector'
                value={formData.selector || ""}
                onChange={(e) =>
                  setFormData({ ...formData, selector: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='selectorType'>Selector Type</label>
            </div>
            <div className='p-col-8'>
              <Dropdown
                id='description'
                options={[
                  { label: "JSON", value: "JSON" },
                  { label: "XML", value: "XML" },
                ]}
                value={formData.selectorType || null}
                onChange={(e) =>
                  setFormData({ ...formData, selectorType: e.value })
                }
                placeholder='Select'
              />
            </div>
          </div>
          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='type'>Type</label>
            </div>
            <div className='p-col-8'>
              <Dropdown
                id='type'
                options={[
                  { label: "Text", value: "text" },
                  { label: "Number", value: "number" },
                  { label: "Boolean", value: "boolean" },
                ]}
                value={formData.type || null}
                onChange={(e) => setFormData({ ...formData, type: e.value })}
                placeholder='Select'
              />
            </div>
          </div>
          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='source'>Source</label>
            </div>
            <div className='p-col-8'>
              <InputText
                id='source'
                value={formData.source || ""}
                onChange={(e) =>
                  setFormData({ ...formData, source: e.target.value })
                }
              />
            </div>
          </div>
        </Dialog>
        <Button
          icon='pi pi-pencil'
          className='p-button-rounded p-button-warning'
          style={{ marginRight: "3px" }}
          onClick={() => {
            handleEdit(rowData);
          }}
        />
        <Button
          icon='pi pi-trash'
          className='p-button-rounded p-button-danger p-mr-2'
          onClick={() => handleDelete(rowData)}
        />
      </div>
    );
  };

  return (
    <div className='grid crud-demo'>
      <Toast ref={toast} />
      <div className='col-12'>
        <div className='card'>
          <Toolbar
            className='mb-4'
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>
          <DataTable
            value={parameters}
            className='datatable-responsive'
            emptyMessage='No parameters added'
            header={header}
            responsiveLayout='scroll'
          >
            <Column field='name' header='Name' />
            <Column field='selector' header='Selector' />
            <Column field='selectorType' header='Selector Type' />
            <Column field='source' header='Source' />
            <Column field='type' header='Type' />
            <Column field='edit' header='Edit/Delete' body={actionTemplate} />
          </DataTable>
        </div>

        <Dialog
          visible={dialogVisible}
          style={{ width: "450px" }}
          onHide={() => setDialogVisible(false)}
          header='Add Parameter'
          footer={parameterDialogFooter}
        >
          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='name'>Name</label>
            </div>
            <div className='p-col-8'>
              <InputText
                id='name'
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='selector'>Selector</label>
            </div>
            <div className='p-col-8'>
              <InputText
                id='selector'
                value={formData.selector || ""}
                onChange={(e) =>
                  setFormData({ ...formData, selector: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='selectorType'>Selector Type</label>
            </div>
            <div className='p-col-8'>
              <Dropdown
                id='description'
                options={[
                  { label: "JSON", value: "JSON" },
                  { label: "XML", value: "XML" },
                ]}
                value={formData.selectorType || null}
                onChange={(e) =>
                  setFormData({ ...formData, selectorType: e.value })
                }
                placeholder='Select'
              />
            </div>
          </div>
          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='type'>Type</label>
            </div>
            <div className='p-col-8'>
              <Dropdown
                id='type'
                options={[
                  { label: "Text", value: "text" },
                  { label: "Number", value: "number" },
                  { label: "Boolean", value: "boolean" },
                ]}
                value={formData.type || null}
                onChange={(e) => setFormData({ ...formData, type: e.value })}
                placeholder='Select'
              />
            </div>
          </div>
          <div className='p-grid p-fluid'>
            <div className='p-col-4'>
              <label htmlFor='source'>Source</label>
            </div>
            <div className='p-col-8'>
              <InputText
                id='source'
                value={formData.source || ""}
                onChange={(e) =>
                  setFormData({ ...formData, source: e.target.value })
                }
              />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
export default AddParameters;
