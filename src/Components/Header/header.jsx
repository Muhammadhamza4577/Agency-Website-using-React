import React from "react";
import "./header.css";
import './dropdownservice'
import logo from '../../assests/logo-1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';



const header = () => {
    const handleMouseOver = () => {
        const targetDiv = document.getElementById('myservices');
        if (targetDiv) {
          targetDiv.style.display = 'block';
        }
      };
    
      const handleMouseOut = () => {
        const targetDiv = document.getElementById('myservices');
        if (targetDiv) {
          targetDiv.style.display = 'none';
        }
      };
    return (
        <div className="Navbar">
            <div className="logo">
                <a href="#">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
            </div>
            <div className="Nav-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#" 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    >Services +</a></li>
                    <li><a href="#">Our Portfolio</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="inner-service" id="myservices">
                <ul>
                    <li><a href="#">UI / UX Design</a></li>
                    <li><a href="#">Website Development</a></li>
                    <li><a href="#">Mobile App Development</a></li>
                    <li><a href="#">Seo Optimization</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                </ul>
            </div>
            <div className="icons">
                <div className="search">
                    <a href="#">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </a>
                </div>
                <div className="atc">
                    <a href="#">
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </a>
                </div>
            </div>
            <div className="get-btn">
                <a href="#">
                    Let’s Talk
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </a>
            </div>
        </div>
        
      );
    }

export default header;