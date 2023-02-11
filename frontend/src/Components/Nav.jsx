import React from "react";

const Nav = () => {
  return (
    <div className="container-fluid border-bottom bg-white">
      <nav class="navbar">
        <div class="container p-0">
          <div className="d-flex justify-content-start align-items-center">
            <a class="navbar-brand" href="a">
              <img
                src={require("../assets/logo.png")}
                alt="Bootstrap"
                height="40"
              />
            </a>
            <form role="search">
              <div class="input-group border border-secondary rounded p-0 m-0">
                <input
                  type="text"
                  class="form-control border-white shadow-none"
                  placeholder="Search..."
                  aria-label="Search..."
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-primary border-white text-dark rounded"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="d-flex justify-content-end align-items-center gap-2">
            <button type="button" class="btn btn-outline-primary fw-bold">
              Create Post
            </button>
            <a
              href="as"
              className="btn btn-outline-primary border-white position-relative"
            >
              <i class="fa-regular fa-bell text-dark fs-4"></i>
              <span
                class="badge text-white bg-danger position-absolute top-0 start-50 px-1"
                style={{
                  paddingTop: "2px",
                  paddingBottom: "2px",
                }}
              >
                9
              </span>
            </a>
            <div class="dropdown">
              <button
                class="border-0 bg-transparent p-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: "35px", height: "35px" }}
              >
                <img
                  src={require("../assets/user.jpeg")}
                  className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                  alt=""
                />
              </button>
              <ul class="dropdown-menu dropdown-menu-end my-1">
                <li>
                  <a class="dropdown-item" href="as">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="as">
                    Action
                  </a>
                </li>
              </ul>
            </div>

            {/* <a
              href="as"
              className="btn btn-outline-primary border-white text-dark"
            >
              Login
            </a>
            <button type="button" class="btn btn-outline-primary fw-bold">
              Create account
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
