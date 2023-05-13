import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useState } from 'react';
import Head from "next/head";


const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      permission: 'Admin'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      permission: 'User'
    }
  ]);

  const deleteHandler = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const editHandler = (id) => {
    // handle edit user action here
  };

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div className="p-d-flex p-jc-center">
        <Card title="Users">
          <DataTable value={users}>
            <Column field="id" header="#" />
            <Column field="firstName" header="First Name" />
            <Column field="lastName" header="Last Name" />
            <Column field="email" header="Email" />
            <Column field="permission" header="Permission" />
            <Column
              body={(rowData) => (
                <>
                  <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-info p-mr-2"
                    onClick={() => editHandler(rowData.id)}
                  />
                  <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger"
                    onClick={() => deleteHandler(rowData.id)}
                  />
                </>
              )}
            />
          </DataTable>
        </Card>
      </div>
    </>
  );
};

export default UsersPage;
