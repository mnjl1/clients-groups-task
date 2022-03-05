import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <Link to='/users'>Users | </Link>
            <Link to='/groups'>Groups</Link>
        </div>
    )
}

export default Header;