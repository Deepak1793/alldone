import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "./header.css";


export default function Header() {
    const history = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    function logout() {
        localStorage.clear();
        history('/')
        toast.warning("User LoggedOut Successfully !!")

    }
    return (


        <nav className="navbar navbar-expand-lg navbar-dark fixed-top mycontainer">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand" ><img class="w-50 p-1 myimg"
                    src="Images/Images/natwest-logo (1).png" alt="logo" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                       
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link  text-light" >Home </Link>
                                </li>



                                <li className="nav-item active">
                                    <Link to="/about" className="nav-link text-light">About Us</Link>
                                </li>




                                <li className="nav-item active">
                                    <Link to="/contact" className="nav-link text-light">Contact Us</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link to="/payment" className="nav-link text-light">Payments</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link to="/homeloan" className="nav-link text-light">Home Loans</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link to="/dashboard" className="nav-link text-light">Dashboard</Link>
                                </li>


                            </ul>

                        
                        
                     
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <Link to="/login" className="nav-link text-light">Login</Link>
                                </li>




                                <li className="nav-item active">
                                    <Link className="nav-link text-light" to="/register">Sign Up</Link>
                                </li>


                            </ul>
                        
                    <div className='d-flex'>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {localStorage.getItem("user") ?

                                <div class="nav-item dropdown">
                                    <button className='btn btn-light' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Welcome: {user}

                                    </button>

                                    <Link className="btn btn-danger mx-2" to="/" onClick={logout}>Logout</Link>

                                </div>
                                : null
                            }
                        </ul>
                    </div>

                </div>




            </div>
        </nav>




    )
}
