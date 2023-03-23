import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
    return (
        <div clasName="desktop-menu">
        <ul>
            <li>
                <a href="/" clasName="title">My order</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
            <li>
                <a href="/">Sign out</a>
            </li>
        </ul>
    </div>
    );
}

export default Menu;