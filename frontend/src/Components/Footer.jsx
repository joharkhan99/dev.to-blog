function Footer() {
  return (
    <footer style={{ backgroundColor: "#eaebed" }} className="py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>
              A constructive and inclusive social network for software
              developers. With you every step of your journey.
            </p>
            <ul className="d-inline-block">
              <li className="d-inline-block mx-3">
                <a href="as" className="text-decoration-none">
                  Home
                </a>
              </li>
              <li className="d-inline-block mx-3">
                <a href="as" className="text-decoration-none">
                  Terms of use
                </a>
              </li>
              <li className="d-inline-block mx-3">
                <a href="as" className="text-decoration-none">
                  Software comparisons
                </a>
              </li>
              <li className="d-inline-block mx-3">
                <a href="as" className="text-decoration-none">
                  Code of Conduct
                </a>
              </li>
              <li className="d-inline-block mx-3">
                <a href="as" className="text-decoration-none">
                  Listings
                </a>
              </li>
              <li className="d-inline-block mx-3">
                <a href="as" className="text-decoration-none">
                  Forem Shop
                </a>
              </li>
            </ul>
            <p>
              We believe in integrity and security of users data.
              <br />
              DEV Community 👩‍💻👨‍💻 © 2016 - 2023.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
