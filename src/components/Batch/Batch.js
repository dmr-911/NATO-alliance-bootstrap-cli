import React from 'react';


const Batch = (props) => {
    const { member } = props;
    const { name, img } = member;
    return (
      <div className="row my-3 border border-2 border-danger rounded py-2">
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