import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'
const Footer = () => {
    const year= new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-box">
                <div className="logo">
                    <div className="logo_img">
                         <img src={logo} alt="" /> </div>
                    <h2>FitBody </h2>
                </div>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat amet laboriosam laborum odit rem est? </p>
                </div>
                <div className="footer-box">
                    <h4 className="footer-title">Company</h4>
                    <ul className="footer-links">
                        <li><a href="#">Our program </a></li>
                        <li><a href="#">Our plan</a></li>
                        <li><a href="#">Become a member</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h4 className="footer-title">Quik Links</h4>
                    <ul className="footer-links">
                        <li><a href="#">About us </a></li>
                        <li><a href="#">Contact us </a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h4 className="footer-title">Quik Links</h4>
                    <ul className="footer-links">
                        <li><a href="">About us </a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
            </div>
            <p className="copyright">
                Copyright - {year} developed by Chaymaa. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer