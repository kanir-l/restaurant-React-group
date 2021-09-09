import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-container">
           
            <Link className="logo" to='/'>L'Isola</Link>
           
            <nav>
                <ul>
                    <li>
                        <Link className="nav-link" to='/reservations'>Reservations</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/admin'>Admin</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
