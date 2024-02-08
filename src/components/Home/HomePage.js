import React, { useEffect, useState } from 'react'
import "./style.css"
import { Carousel } from 'antd';
import navbar from "../../images/Icon.png"
import banner from "../../images/artboard.png"
import slider from "../../images/Slider.png"
import Earphones from "../../images/Earphones.png"
import Navbar from '../Navbar/Navbar'
import RegisterModal from '../Modal/RegisterModal/RegisterModal';
import OtpModal from '../Modal/OtpModal/OtpModal';



export default function HomePage({globalFunctionApiHandler}) {



  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [regModalOpen,setRegModalOpen] = useState(false);
  const [otpModalOpen,setOtpModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await globalFunctionApiHandler(
          "https://restcountries.com/v3.1/all"
        );
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const showRegisterModal = () => {
    setRegModalOpen(true)
  }

  return (
    <div>
      <div className='main_container_wrap'>
        <div className='main_content_wrap'>
            <div className='header_sec' onClick={toggleNavbar}>
              <img src={navbar} alt='navbar' />
            </div>
            {isNavbarOpen && <Navbar />}

            <Carousel autoplay
            dots={true}
            infinite={true}>
            <div className='banner_wrap'>
              <img src={banner} alt='banner'/>
            </div>

            <div className='banner_wrap'>
              <img src={banner} alt='banner'/>
            </div>
            </Carousel>

            <h2>Shop to save ₹20 coin! </h2>

            <div className='product_list'>
              <div className='product_box'>
                <div className='left_sec'>
                <img src={Earphones} alt='Earphones' />
                </div>
                <div className='right_sec'>
                    <h4>Earphones</h4>
                    <li className='price'>₹20</li>
                    <li><s>₹25000</s></li>
                    <li>Offers starts in <span>15:00:00</span></li>
                    <button onClick={showRegisterModal}>Buy now</button>
                </div>
              </div>

              <div className='product_box'>
                <div className='left_sec'>
                <img src={Earphones} alt='Earphones' />
                </div>
                <div className='right_sec'>
                    <h4>Earphones</h4>
                    <li className='price'>₹20</li>
                    <li><s>₹25000</s></li>
                    <li>Offers starts in <span>15:00:00</span></li>
                    <button onClick={showRegisterModal}>Buy now</button>
                </div>
              </div>

              <div className='product_box'>
                <div className='left_sec'>
                <img src={Earphones} alt='Earphones' />
                </div>
                <div className='right_sec'>
                    <h4>Earphones</h4>
                    <li className='price'>₹20</li>
                    <li><s>₹25000</s></li>
                    <li>Offers starts in <span>15:00:00</span></li>
                    <button onClick={showRegisterModal}>Buy now</button>
                </div>
              </div>
            </div>

            <RegisterModal regModalOpen={regModalOpen} setRegModalOpen={setRegModalOpen} setOtpModalOpen={setOtpModalOpen}/>
            <OtpModal otpModalOpen={otpModalOpen} setOtpModalOpen={setOtpModalOpen}/>
        </div>
      </div>
    </div>
  )
}
