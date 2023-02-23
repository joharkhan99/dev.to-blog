import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Nav = () => {
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/api/auth/logout`, "_self");
  };
  const user = useContext(UserContext);
  return (
    <div className="container-fluid border-bottom bg-white fixed-top">
      <nav className="navbar">
        <div className="container p-0">
          <div className="d-flex justify-content-start align-items-center">
            <Link className="navbar-brand" to="/">
              <img
                src={require("../assets/logo.png")}
                alt="Bootstrap"
                height="40"
              />
            </Link>
            {/* <form role="search" className="d-none d-sm-block">
              <div className="input-group border border-secondary rounded p-0 m-0">
                <input
                  type="text"
                  className="form-control border-white shadow-none"
                  placeholder="Search..."
                  aria-label="Search..."
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-primary border-white text-dark rounded"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form> */}
          </div>

          <div className="d-flex justify-content-end align-items-center gap-2">
            {user === null || user === undefined ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-primary border-white text-dark"
                >
                  Login
                </Link>

                <Link to="/signup" className="btn btn-outline-primary fw-bold">
                  Create account
                </Link>
              </>
            ) : (
              <>
                <Link to="/new" className="btn btn-outline-primary fw-bold">
                  Ask a Question
                </Link>
                <a
                  href="as"
                  className="btn btn-outline-primary border-white position-relative"
                >
                  <i className="fa-regular fa-bell text-dark fs-4"></i>
                  <span
                    className="badge text-white bg-danger position-absolute top-0 start-50 px-1"
                    style={{
                      paddingTop: "2px",
                      paddingBottom: "2px",
                    }}
                  >
                    9
                  </span>
                </a>
                <div className="dropdown">
                  <button
                    className="border-0 bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <img
                      src={user.avatar}
                      style={{ objectFit: "cover" }}
                      className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                      alt=""
                    />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end my-1 pb-3 px-2 shadow-sm"
                    style={{ width: "250px" }}
                  >
                    <li className="border-bottom my-2 pb-2">
                      <Link
                        className="dropdown-item rounded text-dark"
                        to={"/" + user.username}
                      >
                        <b className="d-block">{user.name}</b>
                        <span style={{ fontSize: "13px" }}>
                          @{user.username}
                        </span>
                      </Link>
                    </li>

                    {user.role === "admin" ? (
                      <li>
                        <Link
                          className="dropdown-item rounded text-dark py-2"
                          to="/admin"
                        >
                          <span>Admin</span>
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}

                    <li>
                      <Link
                        className="dropdown-item rounded text-dark py-2"
                        to="/dashboard"
                      >
                        <span>Dashboard</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item rounded text-dark py-2"
                        to="/new"
                      >
                        <span>Create Post</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded text-dark py-2"
                        to="/userinfo"
                      >
                        <span>Profile Settings</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item rounded text-dark py-2"
                        onClick={logout}
                      >
                        <span>Sign Out</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
