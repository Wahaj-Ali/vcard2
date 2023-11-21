import React from 'react';
import logo from '../../assets/logo.png';
import image from '../../assets/image.png';
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import './Vcard.css';

const Vcard = () => {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="card">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="cardContent">
                    <h1>Zaheer Khanzada</h1>

                    <h2>MBA,CTP,CEM,CET</h2>

                    <h3>Home inspector and general contractor</h3>

                    <h4>HOME IMPROVEMENT LICENSE#HI-65762</h4>
                </div>
            </div>

            <div className="about">
                <h2>About</h2>
                <p>Having lived on Long Island for over 20 years, I have come to cherish the wonderful quality of life that the Gold Coast has to offer. Being a long-term resident of Long Island has given me great knowledge of the communities I serve. My positive attitude, hard work ethic and professionalism has resulted in numerous successful transactions. More importantly my experiences have instilled in me patience and great negotiation skills which benefit both my sellers and buyers. I am committed to providing my clients with the utmost attention and care. My knowledge of the markets and commitment to my client’s real estate needs consistently deliver successful and positive results.</p>
            </div>

            <div className="contact">
                <h2>Contact Info.</h2>
                <ul>
                    <li><h3>< IoIosPhonePortrait/>Call Mobile</h3><a>(516) 587 0000</a></li>
                    <li id='email'><h3><IoMdMail />Email</h3><a href="">fullyinspected@gmail.com</a></li>
                    <li><h3><CgWebsite />Website</h3><a href="">www.fullyinspected.com</a></li>
                </ul>
            </div>

        </>
    )
}

export default Vcard