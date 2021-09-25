import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Batch from '../Batch/Batch';

const Cart = (props) => {
    const { members } = props;

    const reducer = (previous, current) => previous + current.salary;
    const totalSalary = members.reduce(reducer, 0);

    const user = <FontAwesomeIcon icon={faUser} />;
    return (
      <div>
        <h4 className="text-success">
          <small className="text-primary">{user} Members Added</small> :{" "}
          {members.length}
        </h4>
        <h4 className="text-danger">
          <small className="text-primary">Total Salary :</small> $ {totalSalary}
        </h4>
        {members.map((member) => (
          <Batch member={member}></Batch>
        ))}
      </div>
    );
};

export default Cart;