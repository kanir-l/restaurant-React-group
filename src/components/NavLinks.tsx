import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const NavLinks = () => {
    const animateFrom = {opacity: 0, y: -50}
    const animateTo = {opacity: 1, y: 0}

    return (
        <ul>
        <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}}>
            <Link className="nav-link" to='/reservations'>Reservations</Link>
        </motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}}>
            <Link className="nav-link" to='/contact'>Contact</Link>
        </motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.30}}>
            <Link className="nav-link" to='/admin'>Admin</Link>
        </motion.li>
    </ul>
    )
}

export default NavLinks;