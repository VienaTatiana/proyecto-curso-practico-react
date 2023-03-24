import React from 'react';
import '@styles/OrderItem.scss';

const OrderItem = () => {
    return (
        <div className="OrderItem">
        <figure>
            <img src="https://images.pexels.com/photos/14994927/pexels-photo-14994927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="producto" />
        </figure>
        <p>Horchata</p>
        <p>$5,00</p>
        <img src="./icons/icon_close.png" alt="close" />
    </div>
    );
}

export default OrderItem;