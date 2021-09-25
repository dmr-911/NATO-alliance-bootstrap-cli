import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [newMembers, setNewMembers] = useState([]);

    useEffect(() => {
        fetch('./members.JSON')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);

    const handleAddToCart = member => {
        const newMember = [...newMembers, member];
        setNewMembers(newMember);
    }

    return (
      <div className="container row mx-auto">
        <div className="col-md-9">
        <div className="row row-cols-1 row-cols-md-3 g-4">          
            {members.map((member) => (
                <Member
                    key={member.country}
                    member={member}
                    handleAddToCart={handleAddToCart}
                ></Member>
            ))}
          </div>
        </div>
        <div className="col-md-3">
                <Cart
                    members={newMembers}
                ></Cart>
        </div>
      </div>
    );
};

export default Members;