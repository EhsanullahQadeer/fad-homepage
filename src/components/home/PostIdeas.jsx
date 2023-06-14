import React from "react";

export default function PostIdeas() {
  return (
    <div className="postIdeas-main py-5">
      <div className="container py-4">
        <div className="row rGa30 ">
          <div className="col-lg-5 px-lg-4">
            <h3 className="px-lg-4 ">
              Post Your Ideas For Professionals From Around The Globe To See.
            </h3>
          </div>
          <div className="col-lg-7">
          <div>
          <button className="ideas-btn px-3 py-2 mx-1 my-2">Post Blogs</button>
          <button className="ideas-btn px-3 py-2 mx-1 my-2">Publish Articles</button>
          <button className="ideas-btn px-3 py-2 mx-1 my-2">Host Events</button>
          <button className="ideas-btn px-3 py-2 mx-1 my-2">Create Forums</button>
          <button className="ideas-btn px-3 py-2 mx-1 my-2">Form Groups</button>
          <button className="ideas-btn px-3 py-2 mx-1 my-2">Post Classifieds Ads</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
