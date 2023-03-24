import React from 'react';
import '@styles/Order.scss';

import flecha from '@icons/flechita.svg';


const Order = () => {
    return (
        <div className="mis-ordenes">
        <div className="mis-ordenes-container">
            <h1 className="title">My orders</h1>
            <div className="my-orders-content">
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                </div>
                <p>$560.00</p>
                <img src={flecha} alt="arrow" />
            </div>
        </div>
    </div>
    );
}

export default Order;