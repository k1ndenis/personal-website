import React from "react";

const NavBar = (props) => {
  const {} = props

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./index.html"><img src="./src/pictures/avatar.jpg" alt="Logo" width="60" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link active" href="./index.html">Главная<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./projects.html">Проекты</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contacts.html">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
