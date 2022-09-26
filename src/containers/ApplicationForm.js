import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './ApplicationForm.css';
import { useNavigate } from 'react-router-dom';


function ApplicationForm({ setAlert }) {

    const navigate=useNavigate();

  const [formData, setFormData] = useState({
    email: '', pasport_number: '', first_name: '', last_name: '', aditional_info: ''
  });

  const { email, pasport_number, first_name, last_name, aditional_info } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();

      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      };

      axios.post(`${process.env.REACT_APP_API_URL}/api/application-form/`, { email, pasport_number, first_name, last_name, aditional_info }, config)
      .then(_res => {
            navigate('/'); //added to navigate
            setAlert('Application Submitted Successfully', 'success');
      })
      .catch(_err => {
          setAlert('Error with Sending Application', 'error');
      })
  };

  return (
            <div className='applicationForm'>
            <Helmet>
                <title>Prosperity - Visa Application Form</title>
                <meta
                    name='description'
                    content='Filling Application Form '
                />
            </Helmet>
            <form className='applicationForm' onSubmit={e => onSubmit(e)}>

            <label className='applicationForm__form__label' htmlFor='email'>Email *</label>
                <input 
                    className='applicationForm__form__input' 
                    name='email' 
                    type='email' 
                    placeholder='example@gmail.com' 
                    onChange={e => onChange(e)} 
                    value={email} 
                    required 
                />
                <label className='applicationForm__form__label' htmlFor='email'>Passport Number *</label>
                <input 
                    className='applicationForm__form__input' 
                    name='pasport_number' 
                    type='text' 
                    placeholder='example@gmail.com' 
                    onChange={e => onChange(e)} 
                    value={pasport_number} 
                    required 
                />
                <label className='applicationForm__form__label appForm__subject' htmlFor='subject'>First Name *</label>
                <input 
                    className='applicationForm__form__input' 
                    name='first_name' 
                    type='text' 
                    placeholder='Looking for specific school' 
                    onChange={e => onChange(e)} 
                    value={first_name} 
                    required 
                />
                <label className='applicationForm__form__label' htmlFor='subject'>Last Name *</label>
                <input 
                    className='applicationForm__form__input' 
                    name='last_name' 
                    type='text' 
                    placeholder='Looking for specific school' 
                    onChange={e => onChange(e)} 
                    value={last_name} 
                    required 
                />
                <label className='applicationForm__form__label' htmlFor='message'>Message ;</label>
                <textarea 
                    className='applicationForm__form__textarea'
                    name='aditional_info'
                    cols='30'
                    rows='10'
                    placeholder='Message'
                    onChange={e => onChange(e)} 
                    value={aditional_info} 
                />
                    <button className='contact__form__button' htmltype='submit'>Send</button>
            </form>
        </div>
  )
}

export default connect(null, { setAlert })(ApplicationForm);