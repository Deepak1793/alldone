import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header({ history }) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("jwt_token") ? true : false
    );
    return (
        <div data-testid='container'>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Fourth navbar example">
                <div className="container-fluid ">
                    <a data-testid="brandname" className="navbar-brand" href="/">NewsToday</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/read">Read Now</Link>
                            </li>
                            <li className="nav-item">
                                {!isLoggedIn && (<Link className="nav-link" onClick={() => { history.push("/login"); }}> Login</Link>)}
                                {/* <Link className="nav-link" to="/login" >Login</Link> */}
                            </li>
                            <li className="nav-item">
                                {isLoggedIn && (
                                    <Link className="nav-link" onClick={() => { setIsLoggedIn(false); localStorage.removeItem("username"); localStorage.removeItem("jwt_token"); history.push("/login"); }}>Logout</Link>)}
                                {/* <Link className="nav-link" to="/logout">Logout</Link> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                        <form role="search">
                            {/* <input className="form-control" type="search" placeholder="Search" aria-label="Search" /> */}
                                    <a className='btn btn-outline-success btn-sm' href="https://newsapi.org/s/us-news-api" target="_blank"> About us</a>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">NatWest</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/read">Read Now</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}
