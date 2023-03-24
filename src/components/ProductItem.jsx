import React from 'react';
import '@styles/ProductItem.scss';

import addCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
    return (
            <div className="product-card">
                <img src="https://images.pexels.com/photos/14994927/pexels-photo-14994927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="producto" />
                <div className="product-info">
                    <div>
                        <p>$5,00</p>
                        <p>Horchata</p>
                    </div>
                    <figure>
                        <img src={addCart } alt="logo-add-product" />
                    </figure> 
                </div>   
            </div>
    );
}

export default ProductItem;