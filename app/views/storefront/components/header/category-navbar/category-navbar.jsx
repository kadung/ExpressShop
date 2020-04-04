import React from 'react';

const NavBar = (props) => {
    const categories = props.categories;
    const listItems = categories.map((item) =>
        <li className="nav-item" key={item.name.toString()}>
            <a className="nav-link" href={"/category/" + item.name}>{item.name}</a>
        </li>
    );
    return (
        <>
            <ul className="nav justify-content-center bg-light">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                {listItems}
            </ul>
        </>
    );
}

export default NavBar;