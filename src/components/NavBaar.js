import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../App.css';
import '../css/Navbar.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

  return (
    <Navbar expand="lg" className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <Container className='d-flex justify-content-between'>
            <Navbar.Brand href="#home">
                {/* <img src={''} alt="logo" /> */}
                <h1 style={{color: '#ffff', fontFamily:'monospace', fontWeight: 'bolder'}} >Logo.</h1>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                   <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link> 
                   <Nav.Link href="#skills" className={activeLink === 'skils' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skils')}>Skills</Nav.Link>
                   <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> 
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={''} alt="" /></a>
                        <a href="#"><img src={''} alt="" /></a>
                        <a href="#"><img src={''} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}>let's Connect</button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}