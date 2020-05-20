import React from 'react';
import LogoNavbar from './logo-navbar/logo-navbar';
import CatNavBar from './category-navbar/category-navbar';

const Header = (props) => {
    let catNavBar;
    if (props.categories) {
        catNavBar = (<CatNavBar categories={props.categories} />);
    }
    return (
        <div id='header'>
            <LogoNavbar cartNum={props.cartNum} isLogin={props.isLogin} />
            {catNavBar}
        </div>
    );
}

export default Header;