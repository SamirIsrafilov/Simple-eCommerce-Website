import React from 'react';
import { useCart } from 'react-use-cart';
import alertify from 'alertifyjs';

const ProductsCart = ({ title, price, img, products }) => {
    const { addItem } = useCart();
    return (
        <a className="card col-12 col-sm-6 col-md-3 p-0 text-decoration-none text-dark rounded-0 border-0 mb-4" id='products_card' style={{ width: "296px" }}>
            <div id='card_img'>
                <img src={img} className="card-img-top rounded-0" alt="Products Img" style={{ height: "355px" }} />
            </div>
            <div className="card-body ps-0">
                <p className="card-text">$ {price} USD</p>
                <h5 className="card-title fw-semibold">{title}</h5>
            </div>
            <div className='d-flex justify-content-center '>
                <button onClick={() => (addItem(products), alertify.success(title + ` Added To Cart`))} className='btn btn-outline-dark rounded-0 fw-semibold' style={{ width: "100%" }}>Add To Card</button>
            </div>

        </a>
    )
}

export default ProductsCart