import React , {useState} from 'react';
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
                <div className="input-group">
                    <span style={{ marginRight: '10px' }}>First Name</span>
                    <InputText style={{ marginRight: '10px' }}/>
                    <Button label="Submit" />
                </div>
                <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <span style={{ marginRight: '10px' }}>Last Name</span>
                    <InputText style={{ marginRight: '10px' }} />
                    <Button label="Change Name" />
                </div>
                <div className="input-group" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <span style={{ marginRight: '10px' }}>Email</span>
                    <InputText style={{ marginRight: '10px' }} />
                    <Button label="Change Email" />
                </div>
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
            <div className='card-body'>
                <div className="input-group">
                    <span>Existing Password</span>
                    <InputText />
                </div>
                <h2></h2>
                <div className="input-group">
                    <span>New Password</span>
                    <InputText />
                </div>
                <p>Password must be at least 6 characters and contain a mixture of letters, numbers, and punctuation.</p>
                <div className="input-group">
                    <span>Confirm New Password</span>
                    <InputText />
                </div>
                <Button label="Change Password" />
            </div>
        </div>
    </div>
</div>

       </>
    );
};
export default EmptyPage;
