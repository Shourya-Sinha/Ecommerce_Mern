import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="col-3">
        <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="https://ik.imagekit.io/p66ljstle/images/wish.svg?updatedAt=1710580567227" alt="wishlist-icon"/>
          </Link>
        </div>
          <div className="produc-image">
            <img className="img-fluid" 
              src="https://ik.imagekit.io/p66ljstle/images/watch.jpg?updatedAt=1710580566989"
              alt="watch"
            />
             <img className="img-fluid"
              src="https://ik.imagekit.io/p66ljstle/images/laptop.jpg?updatedAt=1710580560123"
              alt="watch"
            />
          </div>
          <div className="product-deails">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi coloured for students
            </h5>
            <ReactStars
              count={5}
              size={25}
              value={3}
              edit={false}
              activeColor={"#ffd700"}
            />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img
                  src="https://ik.imagekit.io/p66ljstle/images/prodcompare.svg?updatedAt=1710580561519"
                  alt="compare"
                />
              </Link>
              <Link>
                <img
                  src="https://ik.imagekit.io/p66ljstle/images/add-cart.svg?updatedAt=1710580551489"
                  alt="addcart"
                />
              </Link>
              <Link>
                <img
                  src="https://ik.imagekit.io/p66ljstle/images/view.svg?updatedAt=1710580567073"
                  alt="view"
                />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
