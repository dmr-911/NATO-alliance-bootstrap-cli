import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Members = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('./members.JSON')
            .then(res => res.json())
            .then(data => setMembers(data));
    },[])
    return (
      <div className="container row mx-auto">
        <div className="col-md-10">
        <div className="row row-cols-1 row-cols-md-3 g-4">          
            {members.map((member) => (
                <Member key={member.country} member={member}></Member>
            ))}
          </div>
        </div>
        <div className="col-md-2">
          <h2>This is total salary container</h2>
        </div>
      </div>
    );
};

export default Members;