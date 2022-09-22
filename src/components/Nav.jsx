import React from 'react'
import {navigation} from '../data';

const Nav = () => {
    return (
        <nav className="nav_area">
            <ul className="">
                {navigation.map((item, index) => {
                    return(
                        <li className="" key={index}>
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Nav
