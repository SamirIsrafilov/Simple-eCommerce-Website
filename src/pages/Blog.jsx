import React, { useState } from 'react'
import BlogCard from '../components/BlogCard';
import blog from '../data/blogdata';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  const [allposts, setAllPosts] = useState('d-flex');
  const [design, setDesign] = useState('d-none');
  const [inspiration, setInspiration] = useState('d-none');
  const [education, setEducation] = useState('d-none');
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
      <section className='container blog border-bottom border-dark border-1' data-aos="fade-right">
        <span className='text-info fw-bold'>Let's get learning</span>
        <h1 className='my-4'>Our Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <div className='d-flex mt-4' id='blogs_btn'>
          <button className='btn btn-dark rounded-0 border-0 me-2'
            style={{ backgroundColor: color, color: textColor }}
            onClick={() => {
              setAllPosts('d-flex');
              setDesign('d-none');
              setInspiration('d-none');
              setEducation('d-none');
              setColor('black');
              setTextColor("white");
              setColor1('#e0edf4');
              setTextColor1("black");
              setColor2('#e0edf4');
              setTextColor2("black");
              setColor3('#e0edf4');
              setTextColor3("black");
            }}>All Posts</button>
          <button className='btn btn-dark rounded-0 border-0 mx-2'
            style={{ backgroundColor: color1, color: textColor1 }}
            onClick={() => {
              setAllPosts('d-none');
              setDesign('d-flex');
              setInspiration('d-none');
              setEducation('d-none');
              setColor('#e0edf4');
              setTextColor("black");
              setColor1('black');
              setTextColor1("white");
              setColor2('#e0edf4');
              setTextColor2("black");
              setColor3('#e0edf4');
              setTextColor3("black");
            }}>Design</button>
          <button className='btn btn-dark rounded-0 border-0 mx-2'
            style={{ backgroundColor: color2, color: textColor2 }}
            onClick={() => {
              setAllPosts('d-none');
              setDesign('d-none');
              setInspiration('d-flex');
              setEducation('d-none');
              setColor('#e0edf4');
              setTextColor("black");
              setColor1('#e0edf4');
              setTextColor1("black");
              setColor2('black');
              setTextColor2("white");
              setColor3('#e0edf4');
              setTextColor3("black");
            }}>Inspiration</button>
          <button className='btn btn-dark rounded-0 border-0 mx-2'
            style={{ backgroundColor: color3, color: textColor3 }}
            onClick={() => {
              setAllPosts('d-none');
              setDesign('d-none');
              setInspiration('d-none');
              setEducation('d-flex');
              setColor('#e0edf4');
              setTextColor("black");
              setColor1('#e0edf4');
              setTextColor1("black");
              setColor2('#e0edf4');
              setTextColor2("black");
              setColor3('black');
              setTextColor3("white");
            }}>Education</button>
        </div>
      </section>

      <section className='blog_products' data-aos="fade-up">
        <div className='container'>
          <div className='row  mt-5'>
            <div className={allposts} id="allposts">
              <div className='blog py-3' style={{ width: "100%" }}>
                <span className='text-info fw-bold'>Tonight, we read!</span>
                <h1 className='my-4'>View All Posts</h1>
                <p>Learn from us! Cause you know, why not?</p>
              </div>
              {
                blog[4].map((fd,index) => {
                  return <BlogCard img={fd.img} type={fd.type} read={fd.read} desc={fd.desc} key={index} />
                })
              }
            </div>
            <div className={design} id="design">
              <div className='blog py-3' style={{ width: "100%" }}>
                <span className='text-info fw-bold'>Tonight, we read!</span>
                <h1 className='my-4'>View Design Posts</h1>
                <p>Learn from us! Cause you know, why not?</p>
              </div>
              {
                blog[1].map((fd,index) => {
                  return <BlogCard img={fd.img} type={fd.type} read={fd.read} desc={fd.desc} key={index} />
                })
              }
            </div>

            <div className={inspiration} id="inspiration">
              <div className='blog py-3' style={{ width: "100%" }}>
                <span className='text-info fw-bold'>Tonight, we read!</span>
                <h1 className='my-4'>View Inspirational Posts</h1>
                <p>Learn from us! Cause you know, why not?</p>
              </div>
              {
                blog[2].map((fd,index) => {
                  return <BlogCard img={fd.img} type={fd.type} read={fd.read} desc={fd.desc} key={index} />
                })
              }
            </div>
            <div className={education} id="education">
              <div className='blog py-3' style={{ width: "100%" }}>
                <span className='text-info fw-bold'>Tonight, we read!</span>
                <h1 className='my-4'>View Educational Posts</h1>
                <p>Learn from us! Cause you know, why not?</p>
              </div>
              {
                blog[3].map((fd,index) => {
                  return <BlogCard img={fd.img} type={fd.type} read={fd.read} desc={fd.desc} key={index} />
                })
              }
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog