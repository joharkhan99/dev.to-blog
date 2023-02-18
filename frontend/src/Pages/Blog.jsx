import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../App.js";
import Footer from "../Components/Footer.jsx";
import Nav from "../Components/Nav.jsx";

function Blog() {
  const params = useParams();
  const title = params.title;
  const username = params.username;
  const [post, setPost] = useState("");
  const [comments, setComments] = useState("");
  const [author, setAuthor] = useState("");
  const [commentLikeId, setcommentLikeId] = useState(null);

  const user = useContext(UserContext);

  const getPostDetails = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/posts/${username}/${title}`;
      const response = await axios.get(url);
      console.log(response.data);
      setPost(response.data.post);
      setAuthor(response.data.author);
      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  const [commentText, setCommentText] = useState("");
  const handleCommentSubmit = async () => {
    if (commentText.trim() === "") {
      toast.error("Please add comment body");
    } else {
      const url = `${process.env.REACT_APP_API_URL}/posts/comment`;
      await axios
        .post(
          url,
          {
            body: commentText,
            post: post._id,
            author: user._id,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.error) {
            toast.error(res.data.message);
          } else {
            toast.success("Comment Added Successfully", {
              type: "success",
              autoClose: 500,
            });
            setTimeout(() => {
              window.location.href = `/${username}/${title}`;
            }, 800);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const likePost = async () => {
    if (!user) {
      toast.error("Login or Sign up to like this post");
      return;
    }
    const url = `${process.env.REACT_APP_API_URL}/posts/like`;
    await axios
      .post(
        url,
        {
          post: post._id,
          author: user._id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message, {
            type: "success",
            autoClose: 500,
          });
          setTimeout(() => {
            window.location.href = `/${username}/${title}`;
          }, 800);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likeComment = async (e) => {
    if (!user) {
      toast.error("Login or Sign up to like this comment");
      return;
    }
    const url = `${process.env.REACT_APP_API_URL}/posts/comment/like`;
    await axios
      .post(
        url,
        {
          comment: e.target.value,
          author: user._id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message, {
            type: "success",
            autoClose: 500,
          });
          setTimeout(() => {
            window.location.href = `/${username}/${title}`;
          }, 800);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.toDateString()}`;
  }

  return (
    <>
      <Nav />
      <ToastContainer />

      {post && post !== undefined && (
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
                  <button
                    type="button"
                    className="bg-transparent border-0"
                    onClick={likePost}
                  >
                    <i class="fa-regular fa-heart d-block fs-4"></i>
                    <span style={{ fontSize: "15px" }}>
                      {post.likes.length}
                    </span>
                  </button>
                </div>
                <div className="text-center">
                  <button type="button" className="bg-transparent border-0">
                    <i class="fa-regular fa-comment d-block fs-4"></i>
                    <span style={{ fontSize: "15px" }}>
                      {post.comments.length}
                    </span>
                  </button>
                </div>
                <div className="text-center">
                  <button type="button" className="bg-transparent border-0">
                    <i class="fa-regular fa-bookmark d-block fs-4"></i>
                    <span style={{ fontSize: "15px" }}>
                      {post.bookmarks.length}
                    </span>
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
                {post.image !== "" ? (
                  <div className="card-header p-0" style={{ height: "275px" }}>
                    <img
                      src={post.image}
                      class="card-img-top w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt={post.title}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div class="card-body bg-white p-lg-5 pt-4">
                  <div className="d-flex gap-2 align-items-center">
                    <Link
                      className="post-img text-decoration-none"
                      to={"/" + author.username}
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <img
                        src={author.avatar}
                        className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                    <div className="post-metadata">
                      <div>
                        <Link
                          to={"/" + author.username}
                          className="text-decoration-none m-0 p-0 text-dark fw-bold"
                          style={{ fontSize: "16px" }}
                        >
                          {author.name}
                        </Link>
                      </div>
                      <div
                        className="text-decoration-none m-0 p-0 text-dark d-block"
                        style={{ fontSize: "11px" }}
                      >
                        Posted on {formatDate(post.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className="post-details my-3 mb-5">
                    <h1 className="fw-bolder fs-1 py-3 text-dark">
                      {post.title}
                    </h1>
                    <div
                      className="post-tags d-flex gap-3 mb-4"
                      style={{ fontSize: "15px" }}
                    >
                      {post.tags.map((item) => {
                        return (
                          <Link
                            to={"/tag/" + item}
                            key={item}
                            className="text-decoration-none text-dark bg-light px-2 py-1 rounded"
                          >
                            {item}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="post-description border-bottom pb-2 mb-4">
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                  </div>

                  {/* comments */}
                  <div className="post-comments">
                    <h3 className="fw-bolder">
                      Comments ({post.comments.length})
                    </h3>

                    {user !== null && user !== undefined ? (
                      <div className="d-flex gap-2 mt-4">
                        <div style={{ width: "30px", height: "30px" }}>
                          <img
                            src={user.avatar}
                            className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                        <div style={{ width: "90%" }}>
                          <textarea
                            className="form-control d-block w-100 shadow-none"
                            rows={5}
                            placeholder="Add to Discussion"
                            value={commentText}
                            onInput={(e) => {
                              setCommentText(e.target.value);
                            }}
                          ></textarea>
                          <div className="btns mt-2">
                            <button
                              className="btn btn-primary fw-bold"
                              type="submit"
                              onClick={handleCommentSubmit}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to="/signup"
                        className="d-block fw-bold text-center my-4 py-3 bg-light rounded text-decoration-none"
                      >
                        Sign in or Create an Account to Leave a Comment
                      </Link>
                    )}

                    <div className="comments mt-5">
                      {comments.map((comment) => {
                        return (
                          <div className="comment mb-4">
                            <div className="d-flex gap-2">
                              <div style={{ width: "30px", height: "30px" }}>
                                <img
                                  src={comment.author.avatar}
                                  className="rounded-circle bg-light cover w-100 h-100 shadow-sm"
                                  style={{ objectFit: "cover" }}
                                  alt=""
                                />
                              </div>
                              <div style={{ width: "90%" }}>
                                <div class="card">
                                  <div class="card-body">
                                    <div className="d-flex gap-3">
                                      <span className="d-block fs-6 text-dark fw-bold">
                                        {comment.author.name}
                                      </span>
                                      <span className="d-block fs-6 text-secondary">
                                        {formatDate(comment.createdAt)}
                                      </span>
                                    </div>
                                    <div className="comment-content mt-2">
                                      <p>{comment.body}</p>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="d-flex gap-3 mt-1 ps-2"
                                  style={{ fontSize: "14px" }}
                                >
                                  <button
                                    className="text-decoration-none text-dark bg-light px-2 py-1 rounded border-0"
                                    value={comment._id}
                                    onClick={likeComment}
                                  >
                                    <i class="fa-regular fa-heart pe-1"></i>
                                    {comment.likes.length} reactions
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
                <div class="card bg-light w-100">
                  <div class="card-header bg-dark p-3"></div>
                  <div class="card-body pb-0">
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ marginTop: "-31px" }}
                    >
                      <a className="post-img text-decoration-none" href="as">
                        <img
                          src={author.avatar}
                          className="rounded-circle bg-light cover shadow-sm"
                          alt=""
                          style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            objectFit: "cover",
                          }}
                        />
                      </a>
                      <a
                        className="post-img text-decoration-none mt-3 text-dark"
                        href="as"
                      >
                        <h5 class="card-title fw-bold">{author.name}</h5>
                      </a>
                    </div>
                    <div style={{ fontSize: "15px" }}>
                      <p class="card-text my-3">{author.bio}</p>
                      <p class="card-text my-3">
                        <b>EDUCATION</b>
                        <br />
                        {author.education}
                      </p>
                      <p class="card-text my-3">
                        <b>WORK</b>
                        <br />
                        {author.experience}
                      </p>
                      <p class="card-text my-3">
                        <b>JOINED</b>
                        <br />
                        {formatDate(author.joinDate)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Blog;
