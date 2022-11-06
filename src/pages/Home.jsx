import React from 'react';
import { NavLink } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import ProductsCart from '../components/ProductsCart';
import blog from '../data/blogdata';
import products from '../data/productsdata';
import Banner from '../img/banner_img.jpeg';
import Image from '../img/feature_img.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    AOS.init();
    return (
        <div>
            <section className='container d-flex flex-column justify-content-center align-items-center mt-5 pt-5 hero' >
                <h1 className='fw-bold text-center' data-aos="fade-up">The Furniture Place</h1>
                <p className="py-3" data-aos="fade-up">Note: This template can be used for any e-commerce store.
                    The main color, and the<br /> font can easily be changed depending on the branding for your new website!</p>
                <div className='d-flex hero_btn' data-aos="fade-up">
                    <NavLink to="/shop" className='btn me-3' id='shop_btn'>Shop</NavLink>
                    <button className='btn' id='buy_btn'>Buy Template</button>
                </div>
                <a href='#' className='container mt-5'>
                    <img src={Banner} alt="Banner" className='container' id="banner_img" />
                </a>

            </section>

            <section className='container products mt-5 pt-5' >
                <div className='my-5 products_info' >
                    <span className='text-info fw-semibold'>Trending</span>
                    <h1 className='fw-bold my-3'>The best of the best</h1>
                    <p>The coolest, hottest furniture pieces.</p>
                </div>
                <div className='container'>
                    <div className='row d-felx align-items-center justify-content-center justify-content-sm-between cards'  data-aos="fade-up">
                        {
                            products[0].map((fd,index) => {
                                return <ProductsCart price={fd.price} img={fd.img} title={fd.title} key={index} products={fd} />
                            })
                        }
                    </div>
                </div>
            </section>



            <section className='p-3' data-aos="zoom-in-up" >
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





            <section className='feature_component'>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center"  id='feature_text'>
                            <div>
                                <h1>Why choose us?</h1>
                                <p className='my-4 pe-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse varius enim in eros elementum tristique. Duis cursus,
                                    mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                                    diam libero vitae erat.</p>
                                <p><i className="fa-solid fa-lightbulb me-2"></i> Picture perfect designs ready for your new home.</p>
                                <p><i className="fa-solid fa-chair me-2"></i> Amazing quality and detail</p>
                                <p><i className="fa-solid fa-couch me-2"></i> All materials are ethnically sourced</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6" id='feature_img'>
                            <img className='container' src={Image} alt="" />
                        </div>
                    </div>
                </div>
            </section>




            <section className='container products mt-5 pt-5'>
                <div className='my-5 d-flex flex-column flex-md-row justify-content-between products_info' >
                    <div>
                        <h1 className='fw-bold my-3'>Lights</h1>
                        <p>Brighten up your day with one of our lights :)</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-dark rounded-0 py-2 px-4'>View all</button>
                    </div>
                </div>
                <div className='container'>
                    <div className='row d-felx align-items-center justify-content-center justify-content-sm-between cards' data-aos="fade-up">
                        {
                            products[1].map((fd,index) => {
                                return <ProductsCart price={fd.price} img={fd.img} title={fd.title} key={index} products={fd} />
                            })
                        }
                    </div>
                </div>
            </section>



            <section className='container products mt-5 '>
                <div className='my-5 d-flex flex-column flex-md-row justify-content-between products_info' >
                    <div>
                        <h1 className='fw-bold my-3'>Chairs</h1>
                        <p>Need a chair? Look no further!</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-dark rounded-0 py-2 px-4'>View all</button>
                    </div>
                </div>
                <div className='container'>
                    <div className='row d-felx align-items-center justify-content-center justify-content-sm-between cards' data-aos="fade-up">
                        {
                            products[2].map((fd,index) => {
                                return <ProductsCart price={fd.price} img={fd.img} title={fd.title} key={index} products={fd} />
                            })
                        }
                    </div>
                </div>
            </section>




            <section className='container mt-5 home_blog '>
                <div className='blog_text'>
                    <span>Blog</span>
                    <h1>Consider reading</h1>
                    <p>Learn from us! Cause you know, why not?</p>

                </div>
                <div className='container mt-5'>
                    <div className='row d-flex justify-content-between' id='blogs' data-aos="fade-up">
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

export default Home;