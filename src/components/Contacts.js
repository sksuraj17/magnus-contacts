import React from 'react';
import ContactForm from './ContactForm';
import "../components-styles/Contacts.css";

const Contacts = () => {
    return ( 
        <>
        <div class="jumbotron jumbotron-fluid bg-light mainHead">
            <div class="container ">
                <h1 class="display-4 text-center mainHeading">MAGNUS CONTACTS</h1>
                <p class="lead text-center mainDes">Communication is the real work of leadership.</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-5'>
                <ContactForm />
            </div>
            <div className='col-md-7'>
                <div>List of Contacts</div>
            </div>
        </div>  
        </>      
     );
}
 
export default Contacts;