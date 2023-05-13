import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Card } from 'primereact/card';


const HelpPage = () => {
  return (
    <>
      <Head>
        <title>Help and Support</title>
      </Head>
      <Card>
        <h1>Help and Support</h1>
        <p>Here are some frequently asked questions:</p>
        <ul>
          <li>How do I create a new template?</li>
          <li>How do I generate a document?</li>
          <li>What file types can I export my document in?</li>
        </ul>
        <p>If you need further assistance, please contact us at support@yourapp.com</p>
        <Link href="/">Back to home</Link>
      </Card>
    </>
  );
};

export default HelpPage;