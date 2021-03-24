import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
    //Destructing
    const {title} = props;

    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default Navbar"
}

export default Navbar;