import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
    return (
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //         <Link className="navbar-brand" to="/">Navbar</Link>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>

    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav mr-auto">
    //                 <li className="nav-item active">
    //                     <Link className="nav-link" to="/">Home </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/">About</Link>
    //                 </li>
    //                 {/* <li className="nav-item dropdown">
    //                     <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                         Dropdown
    //                     </Link>
    //                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                         <Link className="dropdown-item" to="/">Action</Link>
    //                         <Link className="dropdown-item" to="/">Another action</Link>
    //                         <div className="dropdown-divider"></div>
    //                         <Link className="dropdown-item" to="/">Something else here</Link>
    //                     </div>
    //                 </li> */}
    //                 {/* <li className="nav-item">
    //                     <Link className="nav-link disabled" to="/">Disabled</Link>
    //                 </li> */}
    //             </ul>
    //             {/* <form className="form-inline my-2 my-lg-0">
    //   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    //   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    // </form> */}
    //             <form className="d-flex">
    //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //                 <button className="bt btn-outline-success" type="submit">Search</button>
    //             </form>
    //         </div>
    //     </nav>

<nav className="navbar navbar-expand-lg navbar-light bg-light mx-3">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    <form className="d-flex mx-3">
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>



    )
}

export default Navbar