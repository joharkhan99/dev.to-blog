import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Relevant from "./Relevant";

const Profile = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mt-5 pt-5 p-0 bg-primary">
        <div className="bg-primary p-5"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto px-0 px-md-2">
            <div
              className="card bg-white text-md-center mb-4"
              style={{ marginTop: "-40px" }}
            >
              <div className="card-header bg-white mx-md-auto border-0">
                <div
                  className="user-profile-img"
                  style={{
                    width: "110px",
                    height: "110px",
                    marginTop: "-50px",
                  }}
                >
                  <img
                    src={require("../assets/user.jpeg")}
                    className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                    alt=""
                    style={{ border: "6px solid #0d6efd" }}
                  />
                </div>
              </div>
              <div className="card-body pb-4">
                <h1 class="fw-bolder fs-2 text-dark">Johar Khan</h1>
                <p className="bio mb-4">
                  Full Stack Developer with 3+ years of hands-on experience
                  designing, developing, and implementing applications and
                  solutions using various technologies and programming
                  languages.
                </p>
                <div className="user-details text-secondary">
                  <span className="me-4 d-inline-block">
                    <i class="fa-solid fa-location-dot pe-2 fs-5"></i>
                    <span style={{ fontSize: "14px" }}>
                      Islamabad, Pakistan
                    </span>
                  </span>
                  <span className="me-4 d-inline-block">
                    <i class="fa-solid fa-cake-candles pe-2 fs-5"></i>
                    <span style={{ fontSize: "14px" }}>
                      Joined on 10 Feb 2023
                    </span>
                  </span>
                </div>
              </div>
              <div className="card-footer bg-white pt-4">
                <div className="row">
                  <div className="col-md-6">
                    <b className="text-secondary" style={{ fontSize: "14px" }}>
                      Education
                    </b>
                    <p>Comsats University Islamabad, Pakistan</p>
                  </div>
                  <div className="col-md-6">
                    <b className="text-secondary" style={{ fontSize: "14px" }}>
                      Work
                    </b>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-4">
                <div className="card overflow-hidden">
                  <div className="card-body bg-light pb-0">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <i class="fa-solid fa-table-list text-secondary fs-5"></i>
                      <span>1 post published</span>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <i class="fa-regular fa-comment text-secondary fs-5"></i>
                      <span>0 comments written</span>
                    </div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <i class="fa-regular fa-heart text-secondary fs-5"></i>
                      <span>25 reactions</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div class="card w-100 overflow-hidden mb-2">
                  <div class="card-body bg-white">
                    <div className="d-flex gap-2 align-items-center">
                      <a
                        className="post-img text-decoration-none"
                        href="as"
                        style={{ width: "2rem", height: "2rem" }}
                      >
                        <img
                          src={require("../assets/user.jpeg")}
                          className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                          alt=""
                        />
                      </a>
                      <div className="post-metadata">
                        <div>
                          <a
                            href="as"
                            className="text-decoration-none m-0 p-0 text-dark fw-bold"
                            style={{ fontSize: "14px" }}
                          >
                            Ivan SImaoa
                          </a>
                        </div>
                        <a
                          href="as"
                          className="text-decoration-none m-0 p-0 text-dark d-block"
                          style={{ fontSize: "12px" }}
                        >
                          1 Aug, 2023
                        </a>
                      </div>
                    </div>
                    <div
                      className="post-details my-3"
                      style={{ paddingLeft: "42px" }}
                    >
                      <h3 className="fw-bolder">
                        <a href="as" className="text-decoration-none text-dark">
                          VS Code Setup for Frontend Devs
                        </a>
                      </h3>

                      <div
                        className="post-tags d-flex gap-3 mb-4"
                        style={{ fontSize: "14px" }}
                      >
                        <a
                          href="as"
                          className="text-decoration-none text-dark bg-light px-2 py-1 rounded"
                        >
                          #vscode
                        </a>
                        <a
                          href="as"
                          className="text-decoration-none text-dark bg-light px-2 py-1 rounded"
                        >
                          #javascript
                        </a>
                        <a
                          href="as"
                          className="text-decoration-none text-dark bg-light px-2 py-1 rounded"
                        >
                          #tutorial
                        </a>
                      </div>
                      <div className="post-stats d-flex space-between">
                        <div
                          className="d-flex gap-3"
                          style={{ fontSize: "14px" }}
                        >
                          <a
                            href="as"
                            className="text-decoration-none text-dark bg-light px-2 py-1 rounded"
                          >
                            <i class="fa-regular fa-heart pe-1"></i>2 reactions
                          </a>
                          <a
                            href="as"
                            className="text-decoration-none text-dark bg-light px-2 py-1 rounded"
                          >
                            <i class="fa-regular fa-comment pe-1"></i>Add
                            Comment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user_comments">
                  <ul class="list-group">
                    <li class="list-group-item py-3 fs-5 fw-bold">
                      Recent Comments
                    </li>
                    <li class="list-group-item dropdown-item">
                      <a
                        href="sa"
                        className="d-block w-100 text-decoration-none text-dark"
                        style={{ whiteSpace: "break-spaces" }}
                      >
                        <span className="fs-6 fw-bold">
                          Save HTML Form Data to a MySQL Database using PHP
                        </span>
                        <div
                          className="d-flex align-items-center gap-2"
                          style={{ fontSize: "14px" }}
                        >
                          <p className="m-0 p-0">Great article.</p>
                          <span className="date d-block text-secondary">
                            Feb 12
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="list-group-item dropdown-item">
                      <a
                        href="sa"
                        className="d-block w-100 text-decoration-none text-dark"
                        style={{ whiteSpace: "break-spaces" }}
                      >
                        <span className="fs-6 fw-bold">
                          Save HTML Form Data to a MySQL Database using PHP
                        </span>
                        <div
                          className="d-flex align-items-center gap-2"
                          style={{ fontSize: "14px" }}
                        >
                          <p className="m-0 p-0">
                            Your article really helped me.
                          </p>
                          <span className="date d-block text-secondary">
                            Feb 12
                          </span>
                        </div>
                      </a>
                    </li>
                    <li class="list-group-item dropdown-item">
                      <a
                        href="sa"
                        className="d-block w-100 text-decoration-none text-dark"
                        style={{ whiteSpace: "break-spaces" }}
                      >
                        <span className="fs-6 fw-bold">
                          Save HTML Form Data to a MySQL Database using PHP
                        </span>
                        <div
                          className="d-flex align-items-center gap-2"
                          style={{ fontSize: "14px" }}
                        >
                          <p className="m-0 p-0">Great article.</p>
                          <span className="date d-block text-secondary">
                            Feb 12
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Profile;
