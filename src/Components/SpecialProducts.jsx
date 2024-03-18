import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProducts = () => {
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img
                className="img-fluid"
                src="https://ik.imagekit.io/p66ljstle/images/watch.jpg?updatedAt=1710580566989"
                alt="Watch"
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Havels</h5>
              <h6 className="title">
                Samsung Galaxy Note10+ Mobile Phone: Sim...
              </h6>
              <ReactStars
                count={5}
                size={25}
                value={3}
                edit={false}
                activeColor={"#ffd700"}
              />
              <p className="price">
                <span className="red-p">$100</span> &nbsp;
                <strike>$200</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 Days</b>
                </p>
                <div className="d-flex gap-10  align-items-center">
                  <span className="badge rounded-circle p-3 bg-warning">01</span>
                  :
                  <span className="badge rounded-circle p-3 bg-warning">19</span>
                  :
                  <span className="badge rounded-circle p-3 bg-warning">49</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products :5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProducts;
