import NavLinks from "./NavLinks";
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        setOpen(!open);
    }

    const hamburgerIcon = <FontAwesomeIcon className="hamburger" icon={faBars} onClick={clickHandler} />
    const closeIcon = <FontAwesomeIcon className="close" icon={faTimes} onClick={clickHandler} />

    
    return (
        <nav className="mobile-nav">
        {open ? closeIcon : hamburgerIcon}
        {open ? <NavLinks></NavLinks> : null}
        </nav>
    );
}

export default MobileNav;