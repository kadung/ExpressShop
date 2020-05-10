import React from 'react';
import LogoNavbar from './logo-navbar/logo-navbar';
import CatNavBar from './category-navbar/category-navbar';

const Header = (props) => {
    return (
        <div id='header'>
            <LogoNavbar cartNum={props.cartNum} isLogin={props.isLogin} />
            <CatNavBar categories={props.categories} />
        </div>
    );
}

export default Header;