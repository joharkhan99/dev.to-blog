import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserInfo = () => {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    bio: "",
    location: "",
    education: "",
    experience: "",
  });
  const [avatar, setAvatar] = useState("");
  const [userUploadedImage, setuserUploadedImage] = useState(false);

  const user = useContext(UserContext);
  useEffect(() => {
    setInputs(user);
    setAvatar(user.avatar);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
    // setInputs({ ...user, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setAvatar(e.target.files[0]);
    if (e.target.files[0]) setuserUploadedImage(true);
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/upload`,
        formData
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/users/update`;
    if (userUploadedImage) {
      const imgUrl = await upload();
      await axios
        .post(
          url,
          {
            inputs,
            newavatar: `${process.env.REACT_APP_API_URL}/users/${imgUrl}`,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.error) {
            toast.success(res.data.message, { type: "error" });
          } else {
            toast.success("Profile Updated Successfully", {
              type: "success",
              autoClose: 500,
            });
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await axios
        .post(url, { inputs, newavatar: avatar }, { withCredentials: true })
        .then((res) => {
          if (res.data.error) {
            toast.success(res.data.message, { type: "error" });
          } else {
            toast.success("Profile Updated Successfully", {
              type: "success",
              autoClose: 500,
            });
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Nav />
      <ToastContainer />

      <div class="container mt-5 pt-5">
        <div class="row mt-5">
          <div class="col-md-8 mx-auto">
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="fw-bold fs-5 mb-3">User</h5>
                  <div>
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control shadow-none"
                        id="name"
                        name="name"
                        value={inputs.name}
                        onInput={handleInputChange}
                        onPaste={handleInputChange}
                        placeholder="Masters in XYZ.."
                      />
                    </div>
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        class="form-control shadow-none"
                        id="username"
                        name="username"
                        value={inputs.username}
                        onInput={handleInputChange}
                        onPaste={handleInputChange}
                        placeholder="New York, USA, etc.."
                      />
                    </div>
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Profile Image
                      </label>
                      <div className="d-flex gap-2 align-items-center">
                        <img
                          src={
                            // user.avatar.includes("http") ||
                            // user.avatar.includes("https")
                            //   ?
                            user.avatar
                            // : require("../../../backend/users/" + user.avatar)
                          }
                          className="rounded-circle bg-light"
                          alt=""
                          width="60px"
                          height="60px"
                          style={{ objectFit: "cover" }}
                        />
                        <input
                          type="file"
                          class="form-control shadow-none d-inline-block w-auto"
                          id="avatar"
                          name="avatar"
                          onChange={handlePhoto}
                          placeholder="New York, USA, etc.."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="fw-bold fs-5 mb-3">Basic</h5>
                  <div>
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Write a brief bio about yourself
                      </label>
                      <textarea
                        className="form-control shadow-none"
                        id="bio"
                        name="bio"
                        value={inputs.bio}
                        onInput={handleInputChange}
                        onPaste={handleInputChange}
                      ></textarea>
                    </div>
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Your Location
                      </label>
                      <input
                        type="text"
                        class="form-control shadow-none"
                        id="location"
                        name="location"
                        value={inputs.location}
                        onInput={handleInputChange}
                        onPaste={handleInputChange}
                        placeholder="New York, USA, etc.."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="fw-bold fs-5 mb-3">Work</h5>
                  <div>
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Your Education
                      </label>
                      <input
                        type="text"
                        class="form-control shadow-none"
                        id="education"
                        name="education"
                        value={inputs.education}
                        onInput={handleInputChange}
                        onPaste={handleInputChange}
                        placeholder="Masters in XYZ.."
                      />
                    </div>
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Work Experience
                      </label>
                      <input
                        type="text"
                        class="form-control shadow-none"
                        id="experience"
                        name="experience"
                        value={inputs.experience}
                        onInput={handleInputChange}
                        onPaste={handleInputChange}
                        placeholder="CEO at abc, web developer at, etc.."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-sticky d-block bottom-0 w-100 p-3 bg-white rounded border my-3 mb-5">
                <button type="submit" class="btn btn-primary w-100 fw-bold">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default UserInfo;
