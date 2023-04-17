import { useState ,React} from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { FileUpload } from 'primereact/fileupload';
import { Toolbar } from 'primereact/toolbar';

const initialParameters = []; // initial empty data for the DataTable

const AddParameters = () => {
  const [parameters, setParameters] = useState(initialParameters); // state for DataTable data
  const [dialogVisible, setDialogVisible] = useState(false); // state for showing/hiding the dialog
  const [formData, setFormData] = useState({}); // state for storing form data in the dialog

  const header = (

    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
      <h5 className="m-0">Add Parameters</h5>
      <Button
        label="New"
        type="button"
        icon="pi pi-plus"
        severity="success"
        className="mr-2"
        onClick={() => {
          setFormData({}); // clear the form data
          setDialogVisible(true); // show the dialog
        }}
        
      />
    </div>
  );

  const leftToolbarTemplate = () => {
    const templateTypes = [
        { label: 'Yarg', value: 'yarg' },
        { label: 'Jasper', value: 'jasper' },
        { label: 'Freemarker', value: 'freemarker' }
    ];

    return (
            <div className="my-2">
                <InputText id="code" className="mr-2" placeholder="Template Name"/>
                <Dropdown  options={templateTypes} placeholder="Select template type" className="mr-2" />
            </div>
        
    );
};

const rightToolbarTemplate = () => {
    return (
        <>
            <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import Template" className="mr-2 inline-block" />
            <Button label="Save" severity="help" />
        </>
    );
};

  // function to handle adding a new parameter to the DataTable
  const handleAddParameter = () => {
    setParameters([...parameters, formData]); // add the form data to the DataTable
    setFormData({}); // clear the form data
    setDialogVisible(false); // hide the dialog
  };

  return (
    <div className="grid crud-demo">
        <div className="col-12">
        <div className="card">

        <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
        <DataTable
        value={parameters}
        className="datatable-responsive"
        emptyMessage="No parameters added"
        header={header}
        responsiveLayout="scroll"

        >
        <Column field="name" header="Name" />
        <Column field="description" header="Description" />
        <Column field="selector" header="Selector" />
        <Column field="selectorType" header="Selector Type" />
        <Column field="source" header="Source" />
        <Column field="type" header="Type" />
        </DataTable>

        </div>

   
    <Dialog
      visible={dialogVisible}
      onHide={() => setDialogVisible(false)}
      header="Add Parameter"
      >
    <div className="p-grid p-fluid">
        <div className="p-col-4">
        <label htmlFor="name">Name</label>
        </div>
      <div className="p-col-8">
      <InputText
        id="name"
        value={formData.name || ""}
        onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
        }
      />
    </div>
    </div>
    <div className="p-grid p-fluid">
    <div className="p-col-4">
      <label htmlFor="selector">Selector</label>
    </div>
    <div className="p-col-8">
      <InputText
        id="selector"
        value={formData.selector || ""}
        onChange={(e) =>
          setFormData({ ...formData, selector: e.target.value })
        }
      />
    </div>
  </div>
  <div className="p-grid p-fluid">
    <div className="p-col-4">
      <label htmlFor="selectorType">Selector Type</label>
    </div>
    <div className="p-col-8">
      <Dropdown
        id="selectorType"
        options={[
          { label: "JSON", value: "json" },
          { label: "XML", value: "xml" },
        ]}
        value={formData.selectorType || null}
        onChange={(e) =>
          setFormData({ ...formData, selectorType: e.value })
        }
        placeholder="Select"
      />
    </div>
  </div>
  <div className="p-grid p-fluid">
    <div className="p-col-4">
      <label htmlFor="description">Description</label>
    </div>
    <div className="p-col-8">
      <InputText
        id="description"
        value={formData.description || ""}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
    </div>
  </div>
  <div className="p-grid p-fluid">
    <div className="p-col-4">
      <label htmlFor="type">Type</label>
    </div>
    <div className="p-col-8">
      <Dropdown
        id="type"
        options={[
          { label: "Text", value: "text" },
          { label: "Number", value: "number" },
          { label: "Boolean", value: "boolean" },
        ]}
        value={formData.type || null}
        onChange={(e) => setFormData({ ...formData, type: e.value })}
        placeholder="Select"
      />
    </div>
  </div>
  <div className="p-grid p-fluid">
    <div className="p-col-4">
      <label htmlFor="source">Source</label>
    </div>
    <div className="p-col-8">
      <InputText
        id="source"
        value={formData.source || ""}
        onChange={(e) =>
          setFormData({ ...formData, source: e.target.value })
        }
      />
    </div>
  </div>
  <div className="p-dialog-footer">
    <Button
      label="Cancel"
      onClick={() => setDialogVisible(false)}
      className="p-button-text"
    />
    <Button
      label="Add"
      onClick={handleAddParameter}
      className="p-button-success"
    />
  </div>
    </Dialog>
    </div>

    </div>
  );
};
export default AddParameters;
