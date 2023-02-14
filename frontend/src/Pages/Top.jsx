import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Nav from "../Components/Nav.jsx";
import Tags from "../Components/Tags.jsx";

function Top() {
  return (
    <>
      <Nav />
      <div className="container py-4 mt-5">
        <div className="row pt-4">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 d-none d-sm-block">
            <Tags />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-xs-12">
            <div className="d-flex gap-4">
              <Link
                to="/"
                className="d-block text-decoration-none text-secondary fs-6 fw-normal"
              >
                Relevant
              </Link>
              <Link
                to="/latest"
                className="d-block text-decoration-none text-secondary fs-6 fw-normal"
              >
                Latest
              </Link>
              <Link
                to="/top"
                className="d-block text-decoration-none text-dark fs-6 fw-bold"
              >
                Top
              </Link>
            </div>

            <div className="posts my-3">
              <div class="card w-100 overflow-hidden mb-2">
                <div className="card-header p-0" style={{ height: "275px" }}>
                  <img
                    src={require("../assets/blog.webp")}
                    class="card-img-top w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt="..."
                  />
                </div>
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
                          <i class="fa-regular fa-comment pe-1"></i>Add Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                          <i class="fa-regular fa-comment pe-1"></i>Add Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                          <i class="fa-regular fa-comment pe-1"></i>Add Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                          <i class="fa-regular fa-comment pe-1"></i>Add Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                          <i class="fa-regular fa-comment pe-1"></i>Add Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Top;
