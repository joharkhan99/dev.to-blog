import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Nav from "../Components/Nav.jsx";

function Blog() {
  return (
    <>
      <Nav />
      <div className="container py-4 mt-5">
        <div className="row pt-4">
          <div class="col-md-1 d-none d-sm-block col-xs-1 col-sm-1 ps-sm-0">
            <div
              class="d-flex gap-4 align-items-sm-start flex-column gap-4"
              style={{
                position: "sticky",
                top: "calc(56px + 1rem)",
                zIndex: "1",
              }}
            >
              <div className="text-center">
                <button type="button" className="bg-transparent border-0">
                  <i class="fa-regular fa-heart d-block fs-4"></i>
                  <span style={{ fontSize: "15px" }}>140</span>
                </button>
              </div>
              <div className="text-center">
                <button type="button" className="bg-transparent border-0">
                  <i class="fa-regular fa-comment d-block fs-4"></i>
                  <span style={{ fontSize: "15px" }}>30</span>
                </button>
              </div>
              <div className="text-center">
                <button type="button" className="bg-transparent border-0">
                  <i class="fa-regular fa-bookmark d-block fs-4"></i>
                  <span style={{ fontSize: "15px" }}>154</span>
                </button>
              </div>
              <div className="text-center">
                <div className="dropdown">
                  <button
                    type="button"
                    className="bg-transparent border-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-ellipsis d-block fs-4"></i>
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
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-12 mb-4">
            <div class="card w-100 overflow-hidden mb-2">
              <div className="card-header p-0" style={{ height: "275px" }}>
                <img
                  src={require("../assets/blog.webp")}
                  class="card-img-top w-100 h-100"
                  style={{ objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div class="card-body bg-white p-lg-5 pt-4">
                <div className="d-flex gap-2 align-items-center">
                  <a
                    className="post-img text-decoration-none"
                    href="as"
                    style={{ width: "2.5rem", height: "2.5rem" }}
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
                        style={{ fontSize: "16px" }}
                      >
                        Ivan SImaoa
                      </a>
                    </div>
                    <div
                      className="text-decoration-none m-0 p-0 text-dark d-block"
                      style={{ fontSize: "11px" }}
                    >
                      Posted on 1 Sept 2021
                    </div>
                  </div>
                </div>
                <div className="post-details my-3 mb-5">
                  <h1 className="fw-bolder fs-1 py-3 text-dark">
                    VS Code Setup for Frontend Devs
                  </h1>
                  <div
                    className="post-tags d-flex gap-3 mb-4"
                    style={{ fontSize: "15px" }}
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
                </div>
                <div className="post-description border-bottom pb-2 mb-4">
                  <p>
                    "What is the best way to get what you want?" she asked. He
                    looked down at the ground knowing that she wouldn't like his
                    answer. He hesitated, knowing that the truth would only
                    hurt. How was he going to tell her that the best way for him
                    to get what he wanted was to leave her?
                  </p>
                  <p>
                    The boxed moved. That was a problem. Peter had packed the
                    box three hours before and there was nothing inside that
                    should make it move. The question now was whether or not
                    Peter was going to open it up and look inside to see why it
                    had moved. The answer to that question was obvious. Peter
                    dropped the package into the mailbox so he would never have
                    to see it again.
                  </p>
                  <p>
                    "What is the best way to get what you want?" she asked. He
                    looked down at the ground knowing that she wouldn't like his
                    answer. He hesitated, knowing that the truth would only
                    hurt. How was he going to tell her that the best way for him
                    to get what he wanted was to leave her?
                  </p>
                  <p>
                    The boxed moved. That was a problem. Peter had packed the
                    box three hours before and there was nothing inside that
                    should make it move. The question now was whether or not
                    Peter was going to open it up and look inside to see why it
                    had moved. The answer to that question was obvious. Peter
                    dropped the package into the mailbox so he would never have
                    to see it again.
                  </p>
                  <p>
                    "What is the best way to get what you want?" she asked. He
                    looked down at the ground knowing that she wouldn't like his
                    answer. He hesitated, knowing that the truth would only
                    hurt. How was he going to tell her that the best way for him
                    to get what he wanted was to leave her?
                  </p>
                  <p>
                    The boxed moved. That was a problem. Peter had packed the
                    box three hours before and there was nothing inside that
                    should make it move. The question now was whether or not
                    Peter was going to open it up and look inside to see why it
                    had moved. The answer to that question was obvious. Peter
                    dropped the package into the mailbox so he would never have
                    to see it again.
                  </p>
                </div>
                <div className="post-comments">
                  <h3 className="fw-bolder">Comments (19)</h3>
                  <div className="d-flex gap-2 mt-4">
                    <div style={{ width: "30px", height: "30px" }}>
                      <img
                        src={require("../assets/user.jpeg")}
                        className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                        alt=""
                      />
                    </div>
                    <div style={{ width: "90%" }}>
                      <textarea
                        className="form-control d-block w-100 shadow-none"
                        rows={5}
                        placeholder="Add to Discussion"
                      ></textarea>
                    </div>
                  </div>
                  <div className="comments mt-5">
                    <div className="comment mb-4">
                      <div className="d-flex gap-2">
                        <div style={{ width: "30px", height: "30px" }}>
                          <img
                            src={require("../assets/user.jpeg")}
                            className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                            alt=""
                          />
                        </div>
                        <div style={{ width: "90%" }}>
                          <div class="card">
                            <div class="card-body">
                              <div className="d-flex gap-3">
                                <span className="d-block fs-6 text-dark fw-bold">
                                  Thomas Bnt
                                </span>
                                <span className="d-block fs-6 text-secondary">
                                  11 Feb
                                </span>
                              </div>
                              <div className="comment-content mt-2">
                                <p>
                                  Hello ! Don't hesitate to put colors on your
                                  codeblock like this example for have to have a
                                  better understanding of your code 😎
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="d-flex gap-3 mt-1 ps-2"
                            style={{ fontSize: "14px" }}
                          >
                            <button className="text-decoration-none text-dark bg-light px-2 py-1 rounded border-0">
                              <i class="fa-regular fa-heart pe-1"></i>2
                              reactions
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment mb-4">
                      <div className="d-flex gap-2">
                        <div style={{ width: "30px", height: "30px" }}>
                          <img
                            src={require("../assets/user.jpeg")}
                            className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                            alt=""
                          />
                        </div>
                        <div style={{ width: "90%" }}>
                          <div class="card">
                            <div class="card-body">
                              <div className="d-flex gap-3">
                                <span className="d-block fs-6 text-dark fw-bold">
                                  Thomas Bnt
                                </span>
                                <span className="d-block fs-6 text-secondary">
                                  11 Feb
                                </span>
                              </div>
                              <div className="comment-content mt-2">
                                <p>
                                  Hello ! Don't hesitate to put colors on your
                                  codeblock like this example for have to have a
                                  better understanding of your code 😎
                                </p>
                                <p>
                                  Hello ! Don't hesitate to put colors on your
                                  codeblock like this example for have to have a
                                  better understanding of your code 😎
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="d-flex gap-3 mt-1 ps-2"
                            style={{ fontSize: "14px" }}
                          >
                            <button className="text-decoration-none text-dark bg-light px-2 py-1 rounded border-0">
                              <i class="fa-regular fa-heart pe-1"></i>2
                              reactions
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-3 col-sm-12 p-0 col-xs-12">
            <div
              class="d-flex gap-4 align-items-sm-start justify-content-center"
              style={{
                position: "sticky",
                top: "calc(56px + 1rem)",
              }}
            >
              <div class="card bg-light">
                <div class="card-header bg-dark p-3"></div>
                <div class="card-body pb-0">
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ marginTop: "-31px" }}
                  >
                    <a className="post-img text-decoration-none" href="as">
                      <img
                        src={require("../assets/user.jpeg")}
                        className="rounded-circle bg-light cover shadow-sm"
                        alt=""
                        style={{ width: "2.5rem", height: "2.5rem" }}
                      />
                    </a>
                    <a
                      className="post-img text-decoration-none mt-3 text-dark"
                      href="as"
                    >
                      <h5 class="card-title fw-bold">Alex Bespoyasov</h5>
                    </a>
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    <p class="card-text my-3">
                      Developer, mentor, author, speaker 🧑‍💻❤️
                    </p>
                    <p class="card-text my-3">
                      <b>EDUCATION</b>
                      <br />
                      Master's in IT & Robotics
                    </p>
                    <p class="card-text my-3">
                      <b>WORK</b>
                      <br />
                      Web-developer at 0+X
                    </p>
                    <p class="card-text my-3">
                      <b>JOINED</b>
                      <br />
                      23 Apr 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
