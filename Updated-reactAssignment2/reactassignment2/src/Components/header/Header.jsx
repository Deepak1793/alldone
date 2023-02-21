import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Header.css';

export default function Header() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user_info'))
    console.log(user)

    function logout() {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_info');
        // localStorage.clear()
        navigate("/register")
    }


    return (
        <div  className='container'>
            <nav id='dip' className="navbar navbar-expand-md navbar-dark  fixed-top" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <a data-testid="brandname" className="navbar-brand" href="/">NEWS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/">Home</Link>
                            </li>


                            {
                                localStorage.getItem('user_info') ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/read">Read Now</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/login"> Login</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link fw-bold" to="/register">Register</Link>
                                        </li>

                                    </>
                            }


                        </ul>
                        {localStorage.getItem('user_info') ?
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user && user.email}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/" onClick={logout}>Logout</a></li>
                                </ul>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
