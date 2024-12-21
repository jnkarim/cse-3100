import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center bg-light">
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Cat Heaven
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav>
  <ul className="nav">
    <li className="nav-item">
      <Link className="nav-link" to="/available-cats">
        Available Cats
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact-us">
        Contact Us
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about-us">
        About Us
      </Link>
    </li>
  </ul>
</nav>

      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;