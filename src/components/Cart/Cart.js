import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import Batch from '../Batch/Batch';
import './Cart.css';

const Cart = (props) => {
    const { members } = props;

    const reducer = (previous, current) => previous + current.salary;
    const totalSalary = members.reduce(reducer, 0);

  // Font awesome icons 
    const user = <FontAwesomeIcon className="text-warning" icon={faUser} />;
  const money = <FontAwesomeIcon className="text-danger" icon={faMoneyBill} />;
  
    return (
      <div className="cart border-start border-3 border-info shadow-lg rounded px-2 py-2">
        <div className="cart-header text-white py-3 rounded">
          <h5 className="">
            <small className="">{user} Members Added</small> : <span className="text-info">
            {members.length}</span>
          </h5>
          <h5 className="">
            <small className="">{money} Total Salary :</small><span className="text-info"> ${totalSalary}</span>
          </h5>
        </div>
        {members.map((member) => (
          <Batch
            key={member.id}
            className="batch"
            member={member}></Batch>
        ))}
      </div>
    );
};

export default Cart;