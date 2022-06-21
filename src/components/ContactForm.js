import React, {useState, useEffect} from 'react';
import "../components-styles/ContactForm.css";


const ContactForm = () => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values,setValues] = useState(initialFieldValues)

    return (
        <form autoComplete='off'>
            <div className='form-group input-group mainArea'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <input className='form-control' type = 'name' placeholder='Full Name' name = 'fullName' value = {values.fullName} />
            </div>
            <div className='form-row'>
                <div className='form-group input-group mainArea col-md-6'>
                    <div className='input-group-prepend'>
                        <div className='input-group-text'>
                            <i className='fas fa-mobile-alt'></i>
                        </div>
                    </div>
                    <input className='form-control' type = 'tel' placeholder='Mobile Number' name = 'mobile' value = {values.mobile} />
                </div>
                <div className='form-group input-group mainArea col-md-6'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-envelope'></i>
                    </div>
                </div>
                <input className='form-control' type = 'email' placeholder='E-mail' name = 'email' value = {values.email} />
            </div>                               
            </div>

        </form>
    );
}
 
export default ContactForm;