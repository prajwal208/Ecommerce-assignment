import React from 'react'
import "./style.css"
import edit from "../../images/edit.png"
import user from "../../images/user.png"

export default function Navbar() {
    return (
        <>
            <div className='nav_wrap'>
                <nav>
                    <div className='user_section'>
                        <div className='user_icon'>
                            <img src={user} alt='user' />
                        </div>
                        <div className='user_info'>
                            <div>
                                <li>LEVI ACKERMAN</li>
                                <li>9999999999</li>
                                <li>ackerman@gmail.com</li>
                            </div>

                            <div className='user_edit'>
                                <img src={edit} alt='user' />
                            </div>
                        </div>
                    </div>

                    <div className='nav_bar_list'>
                        <ul>
                            <li>SHIPPING ADDRESS</li>
                            <li>CLAIM YOUR CERTIFICATE</li>
                            <li>TERMS & CONDITIONS</li>
                            <li>PRIVACY POLICY</li>
                            <li>CONTACT US</li>
                            <li>FAQ’S</li>
                        </ul>
                    </div>

                    <div className='logout_btn'>
                        <button>Logout</button>
                    </div>
                </nav>
            </div>
        </>
    )
}
