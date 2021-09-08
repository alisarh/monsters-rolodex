import React from "react";

import './search-box.style.css';

export const SearchBox = props => (
    <input className="search" type="search" placehoder={props.placeholder} />
)