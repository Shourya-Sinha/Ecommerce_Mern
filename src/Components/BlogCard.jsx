import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img
              className="img-fluid"
              src="https://ik.imagekit.io/p66ljstle/images/blog-1.jpg?updatedAt=1710580551414"
              alt="Blog1"
            />
          </div>
          <div className="blog-content">
            <p className="date">16 March, 2024</p>
            <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo velit voluptatibus vero in maiores praesentium !
            </p>
            <Link to={"/"} className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
