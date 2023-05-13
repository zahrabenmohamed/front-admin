import { useState } from "react";
import Head from "next/head";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const SettingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveChanges = () => {
    // handle save changes here
  };

  return (
    <>
      <Head>
        <title>Account Setting</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">Account Setting</h1>
        <Card title="Update Your profile Data" className="mt-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="firstname">First Name</label>
              <InputText
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname">Last Name</label>
              <InputText
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phonenumber">Phone Number</label>
              <InputText
                id="phonenumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <InputText
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="p-col">
              <Button
                label="Save Changes"
                className="mt-4"
                onClick={handleSaveChanges}
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SettingPage;
