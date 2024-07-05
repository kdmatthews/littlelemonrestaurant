
function Nav() {
    return (
      <nav className="nav-container">
        <ul>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </ul>
        <ul>
        <img src="littlelemonlogo.jpg" alt="Little Lemon Logo with lemon image" className="logo"/>
        </ul>
       <ul className="navlinks">
            <a href="/">Home</a>
            <a href="/booking">Reserve Dining</a>
            <a href="/confirmed">Submit Dining Reservation</a>
       </ul>
       <button></button>
      </nav>
    );
  }
  export default Nav;