import logoMMC from "../assets/mmc.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top" data-bs-theme="dark">
      <div className="container-fluid px-4 py-1">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="offcanvasDarkNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img src={logoMMC} width={60} />
        </a>
        <div
          className="offcanvas offcanvas-start w-100 bg-black bg-opacity-75"
          id="navbarNav"
        >
          <div className="offcanvas-header justify-content-between">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Mighty Minds
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Toggle"
            ></button>
          </div>
          <ul className="navbar-nav justify-content-center text-center">
            <li className="nav-item">
              <a className="nav-link fw-bold" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="/workshops">
                Talleres
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
