import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
               <h4 className="text-center pt-4 font-weight-bold">CDON.COM</h4>
                <p className="text-center pb-2 font-italic">Tools</p>
                <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/generator">Article Number generator</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/split">File splitter</NavLink>
                </li>
                </ul>
            </div>
        );
    }
}

export default Header;