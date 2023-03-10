import PropTypes from "prop-types"
import React from "react";

const Test = ({ name = "",setName})=>{
    return(
        <>
            <h1>The name is:${name}</h1>
            <input
                type="text"
                value={name}
                onChange{(e)=>setName(e.target.value)}
            />
        </>
    );
};
Test.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
};
export default Test