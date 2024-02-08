import React, { useState } from 'react'
import { Modal } from 'antd';
import "./otpmodal.css"

export default function OtpModal({otpModalOpen,setOtpModalOpen}) {
  

  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState("");

  const submitotp = () => {
    if (!otpValue.trim()) {
      setError("Please enter OTP");
    } else {
      setOtpModalOpen(false);
    }
  };

  const handleOtpChange = (e) => {
    setOtpValue(e.target.value);
    setError(""); 
  };

  return (
    <>
      <Modal
        className='otp_modal'
        centered
        open={otpModalOpen}
      >
        <div className='otp_Wrap'>
          <h1>Verification</h1>
          
          <input type='number' placeholder='Enter OTP' onChange={handleOtpChange} />
          {error && <p className="error-message">{error}</p>}
          <p>You haven’t received OTP yet? Resend it.</p>

          <div className='register_btn'>
            <button onClick={submitotp}>Enter OTP</button>
          </div>
        </div>
      </Modal>
    </>
  )
}
