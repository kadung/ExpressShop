import React from 'react';

const sidebar = (props) => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="/admin/dashboard">
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/orders">
                            Orders
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/categories">
                            Categories
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/products">
                            Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/users">
                            Users
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default sidebar;