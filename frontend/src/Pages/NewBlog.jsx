import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Relevant from "./Relevant";

const NewBlog = () => {
  return (
    <>
      <div className="container-fluid bg-transparent">
        <nav class="navbar">
          <div class="container p-0">
            <div className="d-flex justify-content-start align-items-center">
              <Link class="navbar-brand" to="/">
                <img
                  src={require("../assets/logo.png")}
                  alt="Bootstrap"
                  height="40"
                />
              </Link>
              <span className="fw-bold">Create Post</span>
            </div>

            <div className="d-flex justify-content-end align-items-center gap-2">
              <Link to="/" class="btn btn-outline-dark fw-bold border-0">
                <i class="fa-solid fa-xmark"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <form>
              <div className="card px-md-4">
                <div className="card-body">
                  <div>
                    <label for="formFileLg" class="form-label fw-bold">
                      Add cover image
                    </label>
                    <input
                      class="form-control form-control-md w-auto shadow-none"
                      id="formFileLg"
                      type="file"
                    />
                  </div>
                  <div className="my-3">
                    <textarea
                      name="text"
                      placeholder="New post title here..."
                      class="fw-bolder shadow-none fs-1 text-dark form-control border-0"
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <input
                      type="text"
                      name="tags"
                      className="form-control border-0 shadow-none"
                      placeholder="Add up to 4 tags..."
                    />
                  </div>
                  <div className="my-3">
                    <textarea
                      name="text"
                      placeholder="Write your post content here..."
                      class="shadow-none text-dark form-control border-0"
                      rows={6}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="btns mt-3">
                <button className="btn btn-primary fw-bold" type="submit">
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewBlog;
