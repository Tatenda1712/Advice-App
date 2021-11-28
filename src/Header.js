import React from 'react';

function HeadSection() {
    return (
      <div className="Container">
	<header id="header">
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"><span class="text-danger">T</span>atenda <span class="text-primary">M</span>usodza</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav m-auto mb-2 mb-md-0">
        <li className="nav-item active ">
          <a className="nav-link text-white" aria-current="page" href="#home-page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-me">Who is <span class="text-danger">T</span>atenda <span class="text-primary">M</span>usodza ? </a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#projects">Projects </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#languages">Areas of Expertise</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testimonials">Testimonials </a>
		</li>
		<li className="nav-item">
			<a className="nav-link" href="#workexperience">Work Experience </a>
		  </li>
      </ul>
       <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="*Email Address" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Subscribe</button>
      </form>
    </div>
  </div>
</nav>

	</header>

       
      </div>
    );
  }
  export default HeadSection;