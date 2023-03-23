import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
    return (
        <div className="my-order">
        <div className="my-order-container">
            <h1 className="title">My order</h1>

            <div className="my-order-content">
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>6 articles</span>
                    </p>
                </div>
                <p>$560.00</p>
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/14994927/pexels-photo-14994927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="producto" />
                </figure>
                <p>Horchata</p>
                <p>$5,00</p>
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/12100691/pexels-photo-12100691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="producto" />
                </figure>
                <p>cafe helado</p>
                <p>$5,00</p>
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/7619504/pexels-photo-7619504.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="producto" />
                </figure>
                <p>Te varios sabores</p>
                <p>$5,00</p>
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/14804813/pexels-photo-14804813.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="producto" />
                </figure>
                <p>Ice-cream</p>
                <p>$5,00</p>
            </div>
        </div>
    </div>
    );
}

export default OrderItem;