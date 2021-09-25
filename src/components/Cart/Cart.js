import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import Batch from '../Batch/Batch';

const Cart = (props) => {
    const { members } = props;

    const reducer = (previous, current) => previous + current.salary;
    const totalSalary = members.reduce(reducer, 0);

    const user = <FontAwesomeIcon className="text-danger" icon={faUser} />;
    const money = <FontAwesomeIcon className="text-success" icon={faMoneyBill} />;
    return (
      <div className="border-start border-3 border-info">
        <h4 className="text-success">
          <small className="text-primary">{user} Members Added</small> :{" "}
          {members.length}
        </h4>
        <h4 className="text-danger">
          <small className="text-primary">{money} Total Salary :</small> ${totalSalary}
        </h4>
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