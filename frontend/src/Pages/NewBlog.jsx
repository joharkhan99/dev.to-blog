import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewBlog = () => {
  const [value, setValue] = useState("");
  const quillmodules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

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

      <div className="container pb-2">
        <div className="row">
          <div className="col-md-10">
            <ul
              class="nav nav-tabs justify-content-end border-0"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-dark active"
                  id="editor-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#editor"
                  type="button"
                  role="tab"
                  aria-controls="editor"
                  aria-selected="true"
                >
                  Editor
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-dark"
                  id="preview-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#preview"
                  type="button"
                  role="tab"
                  aria-controls="preview"
                  aria-selected="false"
                >
                  Preview
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="editor"
                role="tabpanel"
                aria-labelledby="editor-tab"
              >
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
                        <ReactQuill
                          theme="snow"
                          value={value}
                          onChange={setValue}
                          modules={quillmodules}
                          formats={formats}
                          // bounds={".app"}
                          placeholder="Write your post content here..."
                        />
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
              <div
                class="tab-pane fade"
                id="preview"
                role="tabpanel"
                aria-labelledby="preview-tab"
              >
                <div class="card w-100 overflow-hidden px-md-0">
                  <div className="card-header p-0" style={{ height: "275px" }}>
                    <img
                      src={require("../assets/blog.webp")}
                      class="card-img-top w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                  </div>
                  <div class="card-body bg-white p-lg-5">
                    <div className="post-details mb-5">
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
                    <div className="post-description">
                      <ReactQuill
                        value={value}
                        readOnly={true}
                        theme={"bubble"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewBlog;
