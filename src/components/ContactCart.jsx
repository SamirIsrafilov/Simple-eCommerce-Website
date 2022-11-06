import React from 'react';


const ContactCart = ({icon,title,desc,link}) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 card border-0 rounded-0 contact_card" >
    <div className="card-body">
    <i className={icon}></i>
      <h5 className="card-title my-3">{title}</h5>
      <p className="card-text">{desc}</p>
      <a href="#" className="card-link text-dark">{link}</a>
    </div>
  </div>
  )
}

export default ContactCart;