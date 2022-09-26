import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './Contact.css';
import { useNavigate } from 'react-router-dom';


const Contact = ({ setAlert }) => {

    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { name, email, subject, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`, { name, email, subject, message }, config)
        .then(res => {
            navigate('/'); //added to navigate
            setAlert('Message Sent Successfuly', 'success');
        })
        .catch(err => {
            setAlert('Error with Sending Message', 'error');
        })
    };

    return (
        <div className='contact'>
            <Helmet>
                <title>Prosperity - Contact</title>
                <meta
                    name='description'
                    content='Contact us'
                />
            </Helmet>
            <form className='contact__form' onSubmit={e => onSubmit(e)}>
                <label className='contact__form__label' htmlFor='name'>Name</label>
                <input 
                    className='contact__form__input' 
                    name='name' 
                    type='text' 
                    placeholder='Full Name *' 
                    onChange={e => onChange(e)} 
                    value={name} 
                    required 
                />
                <label className='contact__form__label' htmlFor='email'>Email</label>
                <input 
                    className='contact__form__input' 
                    name='email' 
                    type='email' 
                    placeholder='example@gmail.com *' 
                    onChange={e => onChange(e)} 
                    value={email} 
                    required 
                />
                <label className='contact__form__label' htmlFor='subject'>Subject</label>
                <input 
                    className='contact__form__input' 
                    name='subject' 
                    type='text' 
                    placeholder='Looking for specific school *' 
                    onChange={e => onChange(e)} 
                    value={subject} 
                    required 
                />
                <label className='contact__form__label' htmlFor='message'>Message ;</label>
                <textarea 
                    className='contact__form__textarea'
                    name='message'
                    cols='30'
                    rows='10'
                    placeholder='Message'
                    onChange={e => onChange(e)} 
                    value={message} 
                />
                    <button className='contact__form__button' htmltype='submit'>Send</button>
            </form>
        </div>
    );
};


export default connect(null, { setAlert })(Contact);