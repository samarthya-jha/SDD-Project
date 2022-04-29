import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <h4>A unique-minded group with full of enthusiasm and thinking to change the world to a better one.</h4>
          </div>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Github</Link>
            <Link to='/'>Linkedin</Link>
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Developers</h2>
            <Link to='/'>Gargi Lohia</Link>
            <Link to='/'>Harshit</Link>
            <Link to='/'>Samarthya Jha</Link>
          </div>
            <div className='footer-link-items'>
            <h2>Mail</h2>
            <h4><a href="mailto:samarthya.jha2019@vitstudent.ac.in">Click here to mail us.</a></h4>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo' style={{textDecoration:'none'}}>
             <b style={{fontSize:"30px"}}>SimpliTendr</b>
            </Link>
          </div>
          <small className='website-rights'>SimpliTendr © 2022</small>
          <div className='social-icons'>
            <ul> 
              <li>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-github"></span>
                </a> 
              </li>
              <li>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="fab fa-linkedin"></span>
                </a> 
              </li>
             
            </ul>  
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
