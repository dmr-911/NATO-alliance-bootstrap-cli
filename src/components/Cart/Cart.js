import React from 'react';
import Batch from '../Batch/Batch';

const Cart = (props) => {
    const { members } = props;


    const reducer = (previous, current) => previous + current.salary;
    const totalSalary = members.reduce(reducer,0)
    return (
        <div>
            <h4>Members Added : {members.length}</h4>
            <h4>Total Salary : {totalSalary}</h4>
            {
                members.map(member => <Batch
                    member={member}
                ></Batch>)
            }
        </div>
    );
};

export default Cart;