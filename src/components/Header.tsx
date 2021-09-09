import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import Nav from './Nav'

function Header() {
    return (
        <div className="header-container">
           
            <Link className="logo" to='/'>L'Isola</Link>
            <Nav></Nav>
            <MobileNav></MobileNav>
            
        </div>
    )
}

export default Header
