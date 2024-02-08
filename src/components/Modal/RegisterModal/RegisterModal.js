import React, { useState } from 'react'
import { Modal } from 'antd';
import "./register.css"


export default function RegisterModal({regModalOpen,setRegModalOpen,setOtpModalOpen}) {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      };
    
      const validatePhone = (value) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(value);
      };
    
      const handleFullNameChange = (e) => {
        setFullName(e.target.value);
        if (!e.target.value.trim()) {
          setFullNameError('Full Name is required');
        } else {
          setFullNameError('');
        }
      };
    
      const handleEmailChange = (e) => {
        const value = e.target.value.trim();
        setEmail(value);
        if (!value) {
            setEmailError('Email is required');
        } else if (!validateEmail(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.trim();
        setPhone(value);
        if (!value) {
            setPhoneError('Phone number is required');
        } else if (!validatePhone(value)) {
            setPhoneError('Please enter a valid phone number');
        } else {
            setPhoneError('');
        }
    };
    
      const handleSubmit = () => {
        if (!fullName.trim() || !email.trim() || !phone.trim()) {
            alert('Please fill in all fields');
        } else {
            console.log("submitted");
            setRegModalOpen(false);
            setFullName('')
            setEmail('')
            setPhone('')
            setTimeout(() => {
                setOtpModalOpen(true);
            },1500)
            
        }
      };
  return (
    <>
     <Modal
        className='register_modal'
        centered
        open={regModalOpen}
      >
        <div className='registration_Wrap'>
            <h1>Registration</h1>
            <input
        type='text'
        placeholder='Full Name'
        value={fullName}
        onChange={handleFullNameChange}
      />
      {fullNameError && <div style={{ color: 'red' }}>{fullNameError}</div>}
      <input
        type='email'
        placeholder='Email ID'
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      <input
        type='number'
        placeholder='Mobile Number'
        value={phone}
        onChange={handlePhoneChange}
      />
      {phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
      
        </div>

        <div className='terms'>
        <input type='checkbox'/>
            <span>I read and accept to the Privacy Policy &
            Terms and Conditions</span>    
        </div>

        <div className='register_btn'>
            <button onClick={handleSubmit}>Receive OTP</button>
        </div>

       
      </Modal> 
    </>
  )
}
