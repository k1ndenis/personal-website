import React from "react";
import './styles.css'

const Myself = (props) => {
  const { avatar } = props

  return (
    <div className="container text-center my-3">
      <h1 className="my-3 fw-light">Денис Кин</h1>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <img className="rounded-img" src={avatar} alt="Денис Кин" width="400" height="400" />
          <h1 className="my-2 fw-light">Фронтенд-разработчик</h1>
          <p className="lead text-muted">HTML, CSS, JavaScript, React, Git</p>
        </div>
      </div>
    </div>
  )
}

export default Myself;
