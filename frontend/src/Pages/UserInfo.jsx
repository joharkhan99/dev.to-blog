import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";

const UserInfo = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <Nav />
      <div
        class="modal fade d-block bg-dark bg-opacity-75 opacity-100"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Please provide below details
              </h5>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Write a brief bio about yourself
                </label>
                <textarea className="form-control shadow-none"></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Your Education
                </label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="exampleInputEmail1"
                  placeholder="Masters in XYZ.."
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Work Experience
                </label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="exampleInputEmail1"
                  placeholder="CEO at abc, web developer at, etc.."
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Your Location
                </label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="exampleInputEmail1"
                  placeholder="New York, USA, etc.."
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="text-end">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={routeChange}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
