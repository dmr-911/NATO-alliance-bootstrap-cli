import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Member from '../Member/Member';
import './Members.css';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [newMembers, setNewMembers] = useState([]);
    const [searched, setSearched] = useState([]);

    useEffect(() => {
        fetch('./members.JSON')
            .then(res => res.json())
            .then(data => {
                setMembers(data);
                setSearched(data);
            });
    }, []);

    const handleAddToCart = member => {
        const newMember = [...newMembers, member];
        setNewMembers(newMember);
    }

    const onSearch = name => {
        const newMember = members.filter(member => member.name.toLowerCase().includes(name.toLowerCase()));
        setSearched(newMember);
    }

    return (
      <>
        <Header onSearch={onSearch}></Header>
        <div className="container row mx-auto my-4">
          <div className="col-md-9 shadow-lg py-2 rounded members-container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {searched.map((member) => (
                <Member
                  key={member.country}
                  member={member}
                  handleAddToCart={handleAddToCart}
                ></Member>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <Cart members={newMembers}></Cart>
          </div>
        </div>
      </>
    );
};

export default Members;