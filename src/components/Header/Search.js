import React from 'react'
import {NavLink} from "react-router-dom";

const Search = () => (
    <div className={'search-container'}>
        <h1>
            <NavLink to="/">L2poisk.info: база знаний Lineage 2</NavLink>
        </h1>
        <input type="text" placeholder="Искать в Энциклопедии Lineage 2"/>
    </div>
)

export default Search