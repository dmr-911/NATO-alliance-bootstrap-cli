import React from 'react';
import './Member.css';

const Member = (props) => {
    const { member } = props;
    const { name, country, role, salary, img, age } = member;
    console.log(member);
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top card-image" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>{role}</h6>
                    <p className="card-text">Country : {country}</p>
                    <p className="card-text">Age : {age}</p>
                    <p className="card-text">Salary : {salary}</p>
            </div>
    </div>
        </div>
    );
};

export default Member;