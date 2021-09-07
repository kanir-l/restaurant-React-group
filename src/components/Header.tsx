import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <i className="fas fa-bars"></i>
            <div className="header-container">
                <div className="logo">
                    <Link to='/'>Name or logo</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/reservations'>Reservations</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
