import { Container } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <Container className="d-flex">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        /* {style="background-color: #221f1f"} */
      >
        <a className="navbar-brand" href={props.href}>
          <img src="../../assets/logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href={props.href}>
                Home <span className="sr-only">{/* (current) */}</span>
              </a>
            </li>
            <li className="nav-item active">
              <a href={props.href}>TV Shows</a>
            </li>
            <li className="nav-item">
              <a href={props.href}>Movies</a>
            </li>
            <li className="nav-item">
              <a href={props.href}>Recently Added</a>
            </li>
            <li className="nav-item">
              <a href={props.href}>My List</a>
            </li>
          </ul>
          <i className="fa fa-search icons"></i>
          <div id="kids">
            KIDS
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
