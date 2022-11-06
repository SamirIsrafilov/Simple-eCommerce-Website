import React from 'react'
import {NavLink } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ContactCart from '../components/ContactCart'
import blog from '../data/blogdata'
import contact from '../data/contactdata';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  AOS.init();
  return (
    <div>
       <section className='container border-bottom border-dark border-1 contact'  data-aos="fade-right">
        <span className='text-info fw-bold'>Let's talk</span>
        <h1 className='my-5'>Contact</h1>
        <p>Scroll to continue</p>
        <div className='d-flex mt-4' id='contact_btn_group'>
          <NavLink to="/" className='btn btn-dark rounded-0 border-0 me-2 contact_btn'>Back Home</NavLink>
          <NavLink to="/shop" className='btn btn-dark rounded-0 border-0 mx-2 contact_btn'>Shopping</NavLink>
          <NavLink to="/blog" className='btn btn-dark rounded-0 border-0 mx-2 contact_btn'>Blog</NavLink> 
        </div>
      </section>


      <section className='contact_cards'  data-aos="fade-up">
        <div className='container'>
          <div className='row' >
            {
              contact.map((fd,index)=>{
                return <ContactCart icon={fd.icon} title={fd.title} desc={fd.desc} link={fd.link} key={index} />
              })
            }

          </div>
        </div>
      </section>




      <section className='p-3'  data-aos="zoom-in-up" >
                <div className='container d-flex justify-content-between' id='sign'>
                    <div className=" d-flex justify-content-center align-items-center" id='sign_left'>
                        <p className='m-0'>Sign Up To Our NewsLetter.<br />
                            Receive Exclusive Offers.</p>
                    </div>
                    <div className="d-flex flex-column" id='sign_right'>
                        <div id='input_group'>
                            <input className='py-2 px-3 me-3' type="email" placeholder='Enter your email' required />
                            <button className='btn'>Sign Up</button>
                        </div>
                        <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
                    </div>
                </div>
            </section>





            <section className='container mt-5 home_blog '>
                <div className='blog_text'>
                    <span>Blog</span>
                    <h1 className='my-3'>Consider reading</h1>
                    <p>Learn from us! Cause you know, why not?</p>

                </div>
                <div className='container mt-5'  data-aos="fade-up">
                    <div className='row d-flex justify-content-between' id='blogs'>
                        {
                            blog[0].map((fd,index) => {
                                return <BlogCard img={fd.img} type={fd.type} read={fd.read} desc={fd.desc} key={index} />
                            })
                        }

                        <div className='d-flex justify-content-end mt-3'><NavLink to="/blog" className='btn btn-dark rounded-0 border-0 py-2 px-4'>View all</NavLink></div>

                    </div>
                </div>
            </section>
    </div>
  )
}

export default Contact