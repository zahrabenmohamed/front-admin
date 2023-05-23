import React , {useState} from 'react';
import Link from 'next/link';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';




const EmptyPage = () => {

    return (
       <>
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className='card-header'>
                        <h5>User</h5>
                    </div>
                    <hr className='card-separator' />
                    <div className='card-body'>
                        <span>First Name </span>
                    <InputText  />
                    <Button label="Submit" />
                    <span>Last Name</span>
                    <InputText  />
                    <Button label="Change Name" />
                    <span>Email</span>
                    <InputText  />
                    <Button label="Change Email" />                    
                    </div>
                </div>
            </div>
        </div>

        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className='card-header'>
                        <h5>Password</h5>
                    </div>
                    <hr className='card-separator' />
                    <div className='card-body'>
                        <span>Existing Password</span>
                    <InputText  />
                    <span>New Password</span>
                    <InputText  />
                    <p>Password must be at least 6 characters and contain a mixture of letters, numbers and punctuation.</p>
                    <span>Confirm New Password</span>
                    <InputText  />
                    <Button label="Change Password" />                      
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};
export default EmptyPage;
