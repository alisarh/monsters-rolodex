import React from "react";

import './search-box.style.css';

export const SearchBox = ({placeholder , handlChange}) => (
    <input className="search" type="search" placeholder={placeholder}
     onChange={ handlChange} />
)