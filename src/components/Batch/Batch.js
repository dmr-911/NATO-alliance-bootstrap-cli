import React from 'react';

const Batch = (props) => {
    const { member } = props;
    const { name, img } = member;
    return (
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-6">
          <h4>{name}</h4>
        </div>
      </div>
    );
};

export default Batch;