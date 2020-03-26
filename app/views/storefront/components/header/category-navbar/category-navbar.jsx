import React from 'react';

const NavBar = (props) => {
    const categories = props.categories;
    const listItems = categories.map((item) =>
        <li class="nav-item" key={item.name.toString()}>
            <a class="nav-link" href={"/category/" + item.name}>{item.name}</a>
        </li>
    );
    return (
        <>
            <ul class="nav justify-content-center bg-light">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                {listItems}
            </ul>
        </>
    );
}

export default NavBar;