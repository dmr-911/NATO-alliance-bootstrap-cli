import React from 'react';
import './Batch.css';


const Batch = (props) => {
    const { member } = props;
    const { name, img } = member;
    return (
      <div className="row my-3 border border-2 border-danger rounded px-0 py-2 batch container text-white">
        <div className="col-6">
          <img className="img-fluid rounded" src={img} alt="" />
        </div>
        <div className="col-6 d-flex align-items-center">
          <h5 className="text-start">{name}</h5>
        </div>
      </div>
    );
};

export default Batch;