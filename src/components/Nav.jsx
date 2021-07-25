import React from 'react'
import Logo from '../static/logo.svg'
 const Nav = () => {
    return (
        <div className = 'container-fluid nav_bg'>
          
            <nav class="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
    <img src={Logo} width = '200' height = '100' class="d-inline-block align-top" alt="" />

    </a>
    </nav>
    </div>
            
    )
}

export default Nav;