import React from "react";
import './SearchBox.css'

const SearchBox = ({searchChange})=>{
    return(
        <div className="search-container">
            <input className="search-bar" type="search" placeholder="Search Any Robot" onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;