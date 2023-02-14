import React from "react";
import { Link } from "react-router-dom";

function Tags() {
  return (
    <div className="side-tags">
      <div class="accordion" id="tags_accord">
        <div class="accordion-item bg-transparent border-0">
          <h2 class="accordion-header border-0" id="tags_accord_heading">
            <button
              class="accordion-button bg-transparent shadow-none pt-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accord_tags_collapse"
              aria-expanded="true"
              aria-controls="accord_tags_collapse"
            >
              <span className="d-block text-dark fs-6 fw-bold">
                Popular Tags
              </span>
            </button>
          </h2>
          <div
            id="accord_tags_collapse"
            class="accordion-collapse collapse show"
            aria-labelledby="tags_accord_heading"
          >
            <div class="accordion-body">
              <ul className="p-0 m-0 list-unstyled">
                <li className=" border-0 p-2">
                  <Link
                    to="test"
                    className="text-decoration-none d-block text-secondary dropdown-item"
                  >
                    webdev
                  </Link>
                </li>
                <li className=" border-0 p-2">
                  <Link
                    to="test"
                    className="text-decoration-none d-block text-secondary dropdown-item"
                  >
                    Javascript
                  </Link>
                </li>
                <li className=" border-0 p-2">
                  <Link
                    to="test"
                    className="text-decoration-none d-block text-secondary dropdown-item"
                  >
                    beginners
                  </Link>
                </li>
                <li className=" border-0 p-2">
                  <Link
                    to="test"
                    className="text-decoration-none d-block text-secondary dropdown-item"
                  >
                    react
                  </Link>
                </li>
                <li className=" border-0 p-2">
                  <Link
                    to="test"
                    className="text-decoration-none d-block text-secondary dropdown-item"
                  >
                    opensource
                  </Link>
                </li>
                <li className=" border-0 p-2">
                  <Link
                    to="test"
                    className="text-decoration-none d-block text-secondary dropdown-item"
                  >
                    productivity
                  </Link>
                </li>
                <li className=" border-0 p-2">
                  <Link
                    to="test"
                    className="text-decoration-none d-block text-secondary dropdown-item"
                  >
                    computerscience
                  </Link>
                </li>
                <li className=" border-0 p-2">
                  <Link
                    to="test"
                    className="text-decoration-none d-block text-secondary dropdown-item"
                  >
                    machinelearning
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tags;
