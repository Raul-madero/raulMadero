'use client'
const { Navbar, Container, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavLink } = require("react-bootstrap")
import Image from "next/image"
const links = [
    {
        tag: 'Acerca de mi',
        target: '/about'
    },
    {
        tag: 'Proyectos',
        target: '/proyectos'
    }
]
const Header = (props) => {
    return ( 
        <Navbar expand="md" className="bg-secondary container-xl" >
            <Container>
                <NavbarBrand href="/" className="mb-2"><Image src={props.image} alt="Logo" width={200} /></NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav" >
                    <Nav>
                        {links.map(({tag, target}) => (
                            <NavLink className="text-light" href={target} key={target}>{tag}</NavLink>
                        ))}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default Header