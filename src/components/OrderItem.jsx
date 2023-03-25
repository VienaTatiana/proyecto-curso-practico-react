import React, {useContext} from 'react';
import AppContext from '@context/AppContext';

import '@styles/OrderItem.scss';

import closeItem from '@icons/icon_close.png';

const OrderItem = ({product}) => {
    const {removerFromCart} = useContext (AppContext);

    const handleRemove = product => {
        removerFromCart(product);
    }

    return (
        <div className="OrderItem">
        <figure>
            <img src={product.images[0]} alt={product.title} />
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img src={closeItem} alt="close" onClick = {() => handleRemove(product)}/>
    </div>
    );
}

export default OrderItem;