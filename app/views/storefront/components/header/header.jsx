import React from 'react'

const Header = () => {
    const search = (a) => {
        console.log(a);
    }

    return (
        <div id='h'>
            <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                <a href="/" className="navbar-brand d-flex w-50 mr-auto">
                    <img src="/images/kad.jpeg" width="140" height="57" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse w-100" id="collapsingNavbar">
                    <form className="form-inline justify-content-center" action="/search" method="get">
                        <div className="input-group">
                            <input type="text" name="searchText" class="form-control" placeholder="Search" />
                            <div class="input-group-append">
                                <button class="btn btn-secondary" type="submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                    
                    
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;