import React from 'react';
import nato from '../../images/nato.jpg'
import './Header.css';

const Header = (props) => {
    const { handleSearch } = props;
    const onTextChange = event => {
        handleSearch(event.target.value);
    }
    return (
        <div className="nato-bg rounded-bottom px-3 text-white container-fluid row">
            <nav className="navbar navbar-dark col-md-3">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                        <img src={nato} className="rounded" alt="" width="100" height="64" />
                        </a>
                    </div>
            </nav>
            <div className="col-md-5">
                <h2><span className="text-info">NATO</span> alliance</h2>
                <h5>Total Budget : <b className="text-warning">$ 1 Billion</b></h5>
            </div>
            <div className="col-md-4 d-flex align-items-center">
                <div className="input-group mb-3">
                    <input onChange={onTextChange} type="text" className="form-control" placeholder="Search members"/>
                </div>
            </div>
        </div>
    );
};

export default Header;