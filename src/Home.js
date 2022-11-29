import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (  
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/home">Live Scores</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Series</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Videos</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/Casual">Casual</Link></li>
                  <li><Link to="/Fancy">Fancy</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Stats</Link>
              </li>
              <Link to={"Admin"}>
              <li className="nav-item">
                 <a class="nav-link" href="#">Admin</a>
              </li></Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;