import React from 'react'
import logo from '../assets/web-img/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    
    <nav className="navbar bg navbar-expand-lg">
  <div className="container p-0">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Brand Logo" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-lg-0">
        <li className="nav-item home">
          <Link className="nav-link text-white active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Page
          </Link>
          <ul className="dropdown-menu bg-dark aa">
            <li>
              <Link className="dropdown-item aa" to="/">
               <a href="">-Home</a> 
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about">
                <a href="http://localhost:5173/about">-About</a>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/gallery">
                <a href="http://localhost:5173/gallery">-Gallery</a>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/blogs">
                <a href="http://localhost:5173/blogs">-Blog</a>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/contact">
                <a href="http://localhost:5173/contact">-Contact</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gallery">
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">
            Blogs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="search-icon fs-4" style={{cursor:'pointer'}}>
        <i className="fa-solid fa-magnifying-glass text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
      </div>
    </div>
  </div>


</nav>

      {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog center">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body email">
          <input type="email" placeholder='Enter the email' />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-dark search-btn">
            <a href="http://localhost:5173/">Search</a>
          </button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
