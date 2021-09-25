import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Member.css';

const Member = (props) => {
    const { member } = props;
    const { name, country, role, salary, img, age } = member;
    // console.log(member);
    const cart = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
      <div className="col">
        <div className="card pt-2 border border-1 border-info">
          <img
            src={img}
            className="card-img-top card-image rounded-circle px-3"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6>Role : {role}</h6>
            <p className="card-text">Country : {country}</p>
            <p className="card-text">Age : {age}</p>
            <p className="card-text">Salary : ${salary}</p>
            <button
              onClick={() => props.handleAddToCart(member)}
              type="button"
              className="btn btn-danger"
            >
              {cart} Add Member
            </button>
          </div>
        </div>
      </div>
    );
};

export default Member;