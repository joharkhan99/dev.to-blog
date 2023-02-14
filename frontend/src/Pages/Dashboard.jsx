import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Relevant from "./Relevant";

const Dashboard = () => {
  return (
    <>
      <Nav />

      <div className="container my-5 py-5">
        <h2 className="fs-2 text-dark fw-bolder">Dashboard</h2>
        <div className="row mt-5">
          <div className="col-md-4 mb-2">
            <div className=" bg-white border rounded p-4">
              <div className="fs-2 text-dark fw-bolder">23</div>
              <span className="text-secondary">Total post likes</span>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className=" bg-white border rounded p-4">
              <div className="fs-2 text-dark fw-bolder">40</div>
              <span className="text-secondary">Total post comments</span>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className=" bg-white border rounded p-4">
              <div className="fs-2 text-dark fw-bolder">9</div>
              <span className="text-secondary">Total posts created</span>
            </div>
          </div>
        </div>
        <div className="row my-4 p-md-3">
          <div className="col-md-12">
            <h2 className="fs-4 text-dark fw-bolder mb-4">Posts</h2>
            <div className="card mb-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <Link
                      to="/blog"
                      className="fs-5 fw-bolder d-block text-decoration-none"
                    >
                      What will AI do in future?
                    </Link>
                    <span style={{ fontSize: "14px" }}>
                      <b>Published:</b> 13 Feb
                    </span>
                  </div>
                  <div className="col-md-6" style={{ fontSize: "14px" }}>
                    <div className="d-flex justify-content-between align-items-center h-100">
                      <div className="d-flex gap-3 text-secondary">
                        <span className="bg-transparent border-0">
                          <i class="fa-regular fa-heart pe-1"></i>
                          <span>140</span>
                        </span>
                        <span className="bg-transparent border-0">
                          <i class="fa-regular fa-comment pe-1"></i>
                          <span>30</span>
                        </span>
                        <span className="bg-transparent border-0">
                          <i class="fa-regular fa-bookmark pe-1"></i>
                          <span>154</span>
                        </span>
                      </div>
                      <div className="d-flex gap-3">
                        <a href="as" className="text-decoration-none text-dark">
                          Edit
                        </a>
                        <a href="as" className="text-decoration-none text-dark">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <Link
                      to="/blog"
                      className="fs-5 fw-bolder d-block text-decoration-none"
                    >
                      What will AI do in future?
                    </Link>
                    <span style={{ fontSize: "14px" }}>
                      <b>Published:</b> 13 Feb
                    </span>
                  </div>
                  <div className="col-md-6" style={{ fontSize: "14px" }}>
                    <div className="d-flex justify-content-between align-items-center h-100">
                      <div className="d-flex gap-3 text-secondary">
                        <span className="bg-transparent border-0">
                          <i class="fa-regular fa-heart pe-1"></i>
                          <span>140</span>
                        </span>
                        <span className="bg-transparent border-0">
                          <i class="fa-regular fa-comment pe-1"></i>
                          <span>30</span>
                        </span>
                        <span className="bg-transparent border-0">
                          <i class="fa-regular fa-bookmark pe-1"></i>
                          <span>154</span>
                        </span>
                      </div>
                      <div className="d-flex gap-3">
                        <a href="as" className="text-decoration-none text-dark">
                          Edit
                        </a>
                        <a href="as" className="text-decoration-none text-dark">
                          Delete
                        </a>
                      </div>
                    </div>
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
};
export default Dashboard;
