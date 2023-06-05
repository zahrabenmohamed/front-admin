import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Router from "next/router";
import { ConfirmDialog } from "primereact/confirmdialog";

const Templates = () => {
  const [templates, setTemplates] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/templates");
        console.log(response.data);
        setTemplates(response.data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };
    fetchData();
  }, []);

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const leftToolbarTemplate = () => {
    return <React.Fragment></React.Fragment>;
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button label='Export' icon='pi pi-upload' onClick={exportCSV} />
      </React.Fragment>
    );
  };
  const deleteTemplate = async (id) => {
    try {
      toast.current.show({
        severity: "warn",
        detail: "The template is being deleted deleted",
        life: 1000,
      });
      await axios.delete(`http://localhost:8082/deletetemplate/${id}`);
      setTimeout(() => Router.reload(window.location.pathname), 1500);
    } catch (error) {}
  };

  const reject = () => {
    toast.current.show({
      severity: "info",
      detail: "The template isn't deleted",
      life: 1000,
    });
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <>
        <span className='p-column-title'>Name</span>
        {rowData.code}
      </>
    );
  };

  const typeBodyTemplate = (rowData) => {
    return (
      <>
        <span className='p-column-title'>Description</span>
        {rowData.description}
      </>
    );
  };

  const pathBodyTemplate = (rowData) => {
    return (
      <>
        <span className='p-column-title'>Path</span>
        {rowData.path}
      </>
    );
  };

  const pathDelete = (rowData) => {
    return (
      <>
        <ConfirmDialog
          visible={visible}
          onHide={() => setVisible(false)}
          message='Are you sure you want to delete the template?'
          header='Confirmation'
          acceptClassName='p-button-danger'
          icon='pi pi-exclamation-triangle'
          accept={() => deleteTemplate(rowData.id)}
          reject={reject}
        />
        <Button
          onClick={() => setVisible(true)}
          severity='danger'
          icon='pi pi-trash'
        />
      </>
    );
  };

  const header = (
    <div className='flex flex-column md:flex-row md:justify-content-between md:align-items-center'>
      <h5 className='m-0'>Manage Templates</h5>
      <span className='block mt-2 md:mt-0 p-input-icon-left'>
        <i className='pi pi-search' />
        <InputText
          type='search'
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder='Search...'
        />
      </span>
    </div>
  );

  return (
    <div className='grid crud-demo'>
      <div className='col-12'>
        <div className='card'>
          <Toast ref={toast} />
          <Toolbar
            className='mb-4'
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={templates}
            dataKey='id'
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            className='datatable-responsive'
            paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
            currentPageReportTemplate='Showing {first} to {last} of {totalRecords} templates'
            globalFilter={globalFilter}
            emptyMessage='No Templates found.'
            header={header}
            responsiveLayout='scroll'
          >
            <Column
              field='name'
              header='Name'
              body={nameBodyTemplate}
              headerStyle={{ minWidth: "5rem" }}
            ></Column>
            <Column field='description' header='Description' body={typeBodyTemplate}></Column>
            <Column
              field='path'
              header='Path'
              body={pathBodyTemplate}
              headerStyle={{ minWidth: "5rem" }}
            ></Column>
            <Column
              field='delete'
              header='Delete'
              body={pathDelete}
              headerStyle={{ minWidth: "5rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Templates;
