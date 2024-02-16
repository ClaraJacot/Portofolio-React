import { useState, useEffect } from "react";
import {Link} from "react-scroll";

function Navbar(){
    const [navActive, setNavActive] = useState(false);
    
    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu =() => {
        setNavActive(false)
    };

    useEffect(() => {
        const handleResize = () =>{
            if (window.innerWidth <= 500){
                closeMenu
            }
        };
    
    window.addEventListener("resize", handleResize);

    return () => {
        window.addEventListener("resize", handleResize);
        };
    },[]);

    useEffect(() => {
        if (window.innerWidth <=1200) {
            closeMenu;
        }
    }, []);

    return (
        <nav className ={`navbar ${navActive? "active" : ""}`}>
            <div>
                <img src = "./img/dna1.png" alt="logo"/>
            </div>
            <a className={`nav__hamburger ${navActive? "active": ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link 
                        onClick={closeMenu} 
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to= "hero-section"
                        className="navbar--content"
                        >Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu} 
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to= "MyPortofolio"
                        className="navbar--content"
                        >Portofolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu} 
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to= "about--section"
                        className="navbar--content"
                        >About me
                        </Link>
                    </li>
                </ul>
            </div>
            <Link 
            onClick={closeMenu} 
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to= "contact--section"
            className="btn btn-outline-primary">
            Contact Me
            </Link>
        </nav>
    );
}
export default Navbar;