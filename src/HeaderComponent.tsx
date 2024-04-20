import React from "react";

const HeaderComponent = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/"
             className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span className="fs-4">REASON</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">REASON</a></li>
            <li className="nav-item"><a href="#" className="nav-link">NOTICE</a></li>
            <li className="nav-item"><a href="#" className="nav-link">ROOMS</a></li>
            <li className="nav-item"><a href="#" className="nav-link">BOOKING</a></li>
            <li className="nav-item"><a href="#" className="nav-link">CHECK BOOKING</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Q&A</a></li>
          </ul>
        </header>
      </div>
    </>
  )
}

export default HeaderComponent;