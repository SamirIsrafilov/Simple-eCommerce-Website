import React from 'react';
import Logo from '../img/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';



const Nav = () => {
    const {
        totalItems,
        emptyCart,
        cartTotal,
        updateItemQuantity,
        removeItem,
        items
    } = useCart();

    return (
        <div className='d-flex' id='navbar' >
            <nav className="navbar navbar-expand-lg " style={{ width: "100%" }}>
                <div className="container">
                    <NavLink className="navbar-brand" exact to="/">
                        <img src={Logo} alt="Logo" style={{ width: "58px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown mx-2 submenu" >
                                <NavLink id="sub_title" className="nav-link text-dark" to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Products <i className="fa-solid fa-chevron-down"></i>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item sub_page_title fw-semibold" to="#">Tables
                                        <p className='fw-normal'>Lorem, ipsum dolor sit amet<br /> consectetur adipisicing.</p>
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item sub_page_title fw-semibold" to="#">Chairs
                                        <p className='fw-normal'>Lorem, ipsum dolor sit amet<br /> consectetur adipisicing.</p>
                                    </NavLink></li>
                                    <li><NavLink className="dropdown-item sub_page_title fw-semibold" to="#">Lights
                                        <p className='fw-normal'>Lorem, ipsum dolor sit amet<br /> consectetur adipisicing.</p>
                                    </NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link text-dark" to="/shop">Shop All</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link text-dark" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link text-dark" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='ms-auto d-flex justify-content-center align-items-center' >
                <button className="btn border-0 fs-4  position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" id='addcart'><FaShoppingCart />
                    <span className=" translate-middle badge rounded-pill text-dark">{totalItems}</span>
                </button>
                <NavLink className="nav-link text-dark mx-3 d-flex align-items-center" to="#"><i className="fa-solid fa-user rounded-pill d-flex align-items-center justify-content-center bg-light" style={{ width: "40px", height: "40px" }}></i></NavLink>
                <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bold fs-3" id="offcanvasRightLabel">Your Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body" >

                        {
                            items.map((fditem, i) => {
                                return (
                                    <div className="card mb-3 border-0 rounded-0" style={{ height: "100px" }} key={i} >
                                        <div className="row g-0">
                                            <div className="col-4 col-md-4">
                                                <img src={fditem.img} className="img-fluid rounded-0" style={{ height: "100px", width: "100px" }} alt="..." />
                                            </div>
                                            <div className="col-8 col-md-8 ">
                                                <div className="card-body p-0 ps-2 d-flex justify-content-between">
                                                    <div>
                                                        <h6 className="card-title fw-bold">{fditem.title}</h6>
                                                        <p className="card-text m-0">${fditem.price}USD</p>
                                                        <button onClick={() => removeItem(fditem.id)} className='btn ps-0 '>Remove</button>
                                                    </div>
                                                    <div className='border border-dark border-1 d-flex justify-content-center align-items-center flex-column'>
                                                        <button className='btn border-0' onClick={() => updateItemQuantity(fditem.id, fditem.quantity + 1)}><i className="fa-solid fa-sort-up"></i></button>
                                                        <span>{fditem.quantity}</span>
                                                        <button className='btn border-0' onClick={() => updateItemQuantity(fditem.id, fditem.quantity - 1)}><i className="fa-solid fa-caret-down"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=' px-3  bg-light py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='fs-5 m-0'>Total price:</p>
                            <p className='fs-5 m-0'>{cartTotal}$</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mt-3'>
                            <button className='btn btn-outline-dark rounded-0 py-2 fw-bold' onClick={() => { emptyCart() }} style={{ width: "100%" }}>Cart Clear</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Nav;