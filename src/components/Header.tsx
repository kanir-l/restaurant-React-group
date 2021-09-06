import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <i className="fas fa-bars"></i>
            <div className="header-container">
                <div className="logo">
                    <Link to='/'>NAME OR LOGO</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/reservations'>RESERVATIONS</Link>
                        </li>
                        <li>
                            <Link to='/contact'>CONTACT</Link>
                        </li>
                        <li>
                            <Link to='/admin'>ADMIN</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
