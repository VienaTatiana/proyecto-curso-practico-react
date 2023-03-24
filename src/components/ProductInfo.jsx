import React from 'react';
import '@styles/ProductInfo.scss';

import closeItem from '@icons/icon_close.png';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <aside className="ProductInfo">
        <div className="image-container">
            <div className="product-detail-close">
                <img src={closeItem} alt="close" />
            </div>
            <img src="https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=400" alt="product" />
            <div className="three-point">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>    
        <div className="product-info">
            <p>$5,00</p>
            <p>Coffee</p>
            <p>Cafe de exquisito sabor cultivado con los mayores estandares de calidad, respetando el medio ambiente.</p>
            <button className="primary-button add-to-cart-button">
                <img src={addCart} alt="add to cart" />
                Add to card
            </button>
        </div>
        </aside>
    );
}

export default ProductInfo;