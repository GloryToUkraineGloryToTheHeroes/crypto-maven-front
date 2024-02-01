import React from 'react'
import './DeletePage.css';
import Logo from '../../images/logo.png'

function DeletePage() {

    return (
        <div className="Delete-main">
            <div className="Delete-main-div">
                <div className='App-main-logo-div'>
                    <img className='App-main-logo' src={Logo} alt='logo' />
                    <p className='App-main-logo-text'>CryptoMaven</p>
                </div>

                <div className='App-main-text'>Here are instructions on how to delete your account: </div>
                <p className="Delete-main-p Delete-main-p-first">1. Please initiate the login process by entering your credentials into the application.</p>
                <p className="Delete-main-p">2. Proceed to the settings menu, which can be accessed by selecting</p>
                <p className="Delete-main-p">3. Opt for the "Delete my account" function.</p>
                <p className="Delete-main-p">4. Confirm your decision by selecting "Yes" when the confirmation dialog appears.</p>
                <p className="Delete-main-p Delete-main-p-last">5. Should it be necessary as a security protocol, re-enter your login details.</p>


                <div className='App-main-text'>The user account, along with its associated login credentials, email, password, and subscription data, will be permanently deleted.</div>
            </div>
        </div>
    )
}

export default DeletePage;