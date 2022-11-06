import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className=" mt-5" id='footer_all'>
      <footer className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-2 mb-5 mb-md-3">
            <NavLink exact to="/">
              <img src={Logo} alt="Logo" style={{ width: "58px" }} />
            </NavLink>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className='mb-3'>Shopping</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">All Products</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Lights</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Chairs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Tables</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-3">
            <h5 className='mb-3'>Blog</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">All Posts</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Education</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Design</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Inspiration</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">How To</a></li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-4 mb-3">
            <form>
              <h5 className='mb-3'>Subscribe</h5>
              <p>Join our newsletter to stay up to date on new features and releases.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2 mt-4">
                <input id="newsletter1" type="text" className="form-control px-3 py-2 border-0 rounded-0" placeholder="Enter your email" />
                <button className="btn border-0 btn-dark rounded-0 px-3 py-2" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-3 mt-4 border-top border-dark border-1" id='footer_sub'>
          <ul className='d-flex flex-column flex-md-row align-items-center  list-unstyled'>
            <li className='mx-2'><a className='text-decoration-none text-dark footer_legal_link' href="#">Privacy Policy</a></li>
            <li className='mx-2'><a href="#" className='text-decoration-none text-dark footer_legal_link'>Terms of Service</a></li>
            <li className='mx-2'><a href="#" className='text-decoration-none text-dark footer_legal_link'>Style Guide</a></li>
            <li className='mx-2'><a href="#" className='text-decoration-none text-dark footer_legal_link'>Licensing</a></li>
            <li className='mx-2'><a href="#" className='text-decoration-none text-dark footer_legal_link'>Change Log</a></li>
            <p className='mx-2 text-center mb-0 footer_legal_link'><span className='fw-bold'>2022 Company,</span> Inc. All Rights Reserved.</p>

           
          </ul>
          <ul className="list-unstyled d-flex justify-content-center">
              <li className="ms-3"><a className="link-dark fs-5" href="#"><FaFacebookF /></a></li>
              <li className="ms-3"><a className="link-dark fs-5" href="#"><FaLinkedinIn /></a></li>
              <li className="ms-3"><a className="link-dark fs-5" href="#"><FaInstagram /></a></li>
              <li className="ms-3"><a className="link-dark fs-5" href="#"><FaTwitter /></a></li>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer