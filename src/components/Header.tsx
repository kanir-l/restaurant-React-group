import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <React.Fragment>
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
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header
