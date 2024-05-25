import React from 'react'
import {Link} from "react-router-dom"
import Background from '../Background/Background'
const Navabar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg  border-bottom" style={{background:"#FFB74D"}}>
    {/* <Background color="#FFB74D" ></Background> */}
    <div className="container-fluid">
      <Link className="navbar-brand fs-3 fw-bold font-monospace" to="#">Bharat Intern</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item fs-5">
            <Link className="nav-link active" to="/show">Show Blog</Link>
          </li>
          <li className="nav-item fs-5">
            <Link className="nav-link active" to="/add">Add Blog</Link>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navabar