import React, { useState } from 'react';
import products from '../data/productsdata';
import ProductsCart from '../components/ProductsCart';
import BlogCard from '../components/BlogCard';
import blog from '../data/blogdata';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ShopAll = () => {
  const [allproducts, setAllProducts] = useState('d-flex');
  const [lights, setLights] = useState('d-none');
  const [chairs, setChairs] = useState('d-none');
  const [tables, setTables] = useState('d-none');
  const [color, setColor] = useState('black');
  const [textColor, setTextColor] = useState('white');
  const [color1, setColor1] = useState('#e0edf4');
  const [textColor1, setTextColor1] = useState('black');
  const [color2, setColor2] = useState('#e0edf4');
  const [textColor2, setTextColor2] = useState('black');
  const [color3, setColor3] = useState('#e0edf4');
  const [textColor3, setTextColor3] = useState('black');
  AOS.init();
  return (
    <div>
      <section className='container shopping border-bottom border-dark border-1' data-aos="fade-right">
        <span className='text-info fw-bold'>Shop till you drop</span>
        <h1 className='my-4'>Let's Get Shopping</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <div className='d-flex mt-4' id='products_btn'>
          <button className='btn btn-dark rounded-0 border-0 me-2'
            style={{ backgroundColor: color, color: textColor }}
            onClick={() => {
              setAllProducts('d-flex');
              setLights('d-none');
              setChairs('d-none');
              setTables('d-none');
              setColor('black');
              setTextColor("white");
              setColor1('#e0edf4');
              setTextColor1("black");
              setColor2('#e0edf4');
              setTextColor2("black");
              setColor3('#e0edf4');
              setTextColor3("black");
            }}>All Products</button>
          <button className='btn btn-dark rounded-0 border-0 mx-2'
            style={{ backgroundColor: color1, color: textColor1 }}
            onClick={() => {
              setAllProducts('d-none');
              setLights('d-flex');
              setChairs('d-none');
              setTables('d-none');
              setColor('#e0edf4');
              setTextColor("black");
              setColor1('black');
              setTextColor1("white");
              setColor2('#e0edf4');
              setTextColor2("black");
              setColor3('#e0edf4');
              setTextColor3("black");
            }}>Lights</button>
          <button className='btn btn-dark rounded-0 border-0 mx-2'
            style={{ backgroundColor: color2, color: textColor2 }}
            onClick={() => {
              setAllProducts('d-none');
              setLights('d-none');
              setChairs('d-flex');
              setTables('d-none');
              setColor('#e0edf4');
              setTextColor("black");
              setColor1('#e0edf4');
              setTextColor1("black");
              setColor2('black');
              setTextColor2("white");
              setColor3('#e0edf4');
              setTextColor3("black");
            }}>Chairs</button>
          <button className='btn btn-dark rounded-0 border-0 mx-2'
            style={{ backgroundColor: color3, color: textColor3 }}
            onClick={() => {
              setAllProducts('d-none');
              setLights('d-none');
              setChairs('d-none');
              setTables('d-flex');
              setColor('#e0edf4');
              setTextColor("black");
              setColor1('#e0edf4');
              setTextColor1("black");
              setColor2('#e0edf4');
              setTextColor2("black");
              setColor3('black');
              setTextColor3("white");
            }}>Tables</button>
        </div>
      </section>


      <section className='shopping_products' data-aos="fade-up">
        <div className='container'>
          <div className='row mt-5'>
            <div className={allproducts} id="allproducts">
              <div className='shopping py-3' style={{ width: "100%" }}>
                <span className='text-info fw-bold'>A little bit of everything</span>
                <h1 className='my-4'>All of our products</h1>
                <p>Everything you need in one place</p>
              </div>
              {
                products[4].map((fd,index) => {
                  return <ProductsCart price={fd.price} img={fd.img} title={fd.title} key={index} products={fd} />
                })
              }
            </div>
            <div className={lights} id="lights">
              <div className='shopping py-3' style={{ width: "100%" }}>
                <span className='text-info fw-bold'>Our lights</span>
                <h1 className='my-4'>Shop Lights</h1>
                <p>Brighten up your day</p>
              </div>
              {
                products[1].map((fd,index) => {
                  return <ProductsCart price={fd.price} img={fd.img} title={fd.title} key={index} products={fd} />
                })
              }
            </div>

            <div className={chairs} id="chairs">
              <div className='shopping py-3' style={{ width: "100%" }}>
                <span className='text-info fw-bold'>Our chairs</span>
                <h1 className='my-4'>Shop Chairs</h1>
                <p>Take a seat</p>
              </div>
              {
                products[2].map((fd,index) => {
                  return <ProductsCart price={fd.price} img={fd.img} title={fd.title} key={index} products={fd} />
                })
              }
            </div>
            <div className={tables} id="tables">
              <div className='shopping py-3' style={{ width: "100%" }}>
                <span className='text-info fw-bold'>Our Tables</span>
                <h1 className='my-4'>Shop Tables</h1>
                <p>A perfect table for everyone</p>
              </div>
              {
                products[3].map((fd,index) => {
                  return <ProductsCart price={fd.price} img={fd.img} title={fd.title} key={index} products={fd}/>
                })
              }
            </div>
          </div>
        </div>
      </section>

      <section className='p-3' data-aos="zoom-in-up">
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

export default ShopAll