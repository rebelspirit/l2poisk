import React from 'react'
import {NavLink} from "react-router-dom";

const Menu = () => (

        <div className={'menu-container'}>
            <nav>
                <NavLink to="/">Interlude</NavLink>
                {/*<a href="#">Interlude</a>*/}
                <NavLink to="/graciafinal">Gracia: Final</NavLink>
                {/*<a href="#">Gracia: Final</a>*/}
                <NavLink to="/epilogue">Gracia: Epilogue</NavLink>
                <NavLink to="/freya">Freya</NavLink>
                <NavLink to="/hf5">High Five 5</NavLink>
                <NavLink to="/classic">Classic</NavLink>
            </nav>
        </div>



);

export default Menu