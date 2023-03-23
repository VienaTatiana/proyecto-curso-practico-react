import React from 'react';
import '../styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
    return (
        <aside className="container-main">
        <div className="my-shopping-cart-container">
            <div className="title-shopping-cart">
                <img src="./icons/flechita.svg" alt="arrow" />
                <p className="title">My order</p>
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/14994927/pexels-photo-14994927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="producto" />
                </figure>
                <p>Horchata</p>
                <p>$5,00</p>
                <img src="./icons/icon_close.png" alt="close" />
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/12100691/pexels-photo-12100691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="producto" />
                </figure>
                <p>cafe helado</p>
                <p>$5,00</p>
                <img src="./icons/icon_close.png" alt="close" />
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/7619504/pexels-photo-7619504.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="producto" />
                </figure>
                <p>Te varios sabores</p>
                <p>$5,00</p>
                <img src="./icons/icon_close.png" alt="close" />
            </div>

            <div className="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/14804813/pexels-photo-14804813.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="producto" />
                </figure>
                <p>Ice-cream</p>
                <p>$5,00</p>
                <img src="./icons/icon_close.png" alt="close" />
            </div>

            <div className="my-total-content">
                    <p>Total</p>
                    <p>$560.00</p>
            </div>

            <button className="primary-button checkout-button">Checkout </button>
        </div> 
    </aside>
    );
}

export default ShoppingCartItem;