import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';


export const NavBar = () => {

    const linksSocialNavBar = {
        linkedInLink: 'https://www.linkedin.com/in/sbsing77/',
        githubRepository: 'https://github.com/sebassg7'

    }

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if( window.scrollY > 50 ){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener( "scroll", onScroll );

        return () => window.removeEventListener( "scroll", onScroll );
    }, []);

    const onUpdateActiveLink = ( value ) => {
        setActiveLink( value );
    };

    const scrollToSection = () => {
        const section = document.getElementById('connect'); 
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    return (
    <Navbar expand="lg" className={ scrolled ? "scrolled" : "" }>
        <Container>

            <Navbar.Brand href="#home">
                < img src={ logo } alt="Logo" />
            </Navbar.Brand>
                
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link href="#home" className={ activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={ () => onUpdateActiveLink( 'home' ) }>Home</Nav.Link>
                    <Nav.Link href="#skills" className={ activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={ () => onUpdateActiveLink( 'skills' ) }>Skills</Nav.Link>
                    <Nav.Link href="#project" className={ activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={ () => onUpdateActiveLink( 'project' ) }>Projects</Nav.Link>
                </Nav>

                <span className="navbar-text">
                    <div className="social-icon">
                        <a href={linksSocialNavBar.linkedInLink} target="_blank"><img src={ navIcon1 } alt=""/></a>
                        <a href={linksSocialNavBar.githubRepository} target="_blank"><img src={ navIcon2 } alt=""/></a>
                    </div>
                    <button href className="vvd" onClick={ scrollToSection }>
                        <span>Let´s Connect</span>
                    </button>
                </span>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
