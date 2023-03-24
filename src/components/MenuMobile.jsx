import React from 'react';
import '@styles/MenuMobile.scss';

const MenuMobile = () => {
    return (
        <div className ="mobile-menu">
        <div className ="container-menu">
            <ul>
                <li>
                    <a href="/">CATEGORIES</a>
                </li>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
            </ul>
        </div>
        <div className ="small-container">
            <ul>
                <li>
                    <a href="/" className ="email">user@example.com</a>
                </li>
                <li>
                <a href="/" className ="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    </div>  
    );
}

export default MenuMobile;