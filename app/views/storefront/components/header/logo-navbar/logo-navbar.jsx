import React from 'react';

const LogoNavbar = (props) => {
    return (
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
            <a href="/" className="navbar-brand d-flex w-50 mr-auto">
                <img src="/images/kad.jpeg" width="140" height="57" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse w-100" id="collapsingNavbar">
                <form className="form-inline justify-content-center" action="/search" method="get">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="submit">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                
                <ul className="nav navbar-nav ml-1 w-50 justify-content-end align-items-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="/cart" class="btn btn-primary btn-sm active" role="button" aria-pressed="true">
                            Cart <span class="badge badge-light" id="cartBadge">{props.cartNum}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default LogoNavbar;