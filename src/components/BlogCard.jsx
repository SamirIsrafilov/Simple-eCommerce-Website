import React from 'react';

const BlogCard = ({ img, type, read, desc }) => {
  return (
    <a href='#' className="card col-12 col-sm-12 col-md-4 text-decoration-none text-dark p-0 border-0 rounded-0 mx-3 blog_card" style={{ width: '25rem' }}>
      <div id='blog_img'>
        <img src={img} className="card-img-top rounded-0" alt="..." />
      </div>
      <div className="card-body ps-0">
        <ul className='list-unstyled d-flex'>
          <li className='me-3'>{type}</li>
          <li>{read}</li>
        </ul>
        <p  className="card-text ">{desc}</p>
      </div>
    </a>
  )
}

export default BlogCard;