'use client'
const { default: Link } = require("next/link")
const { Container } = require("react-bootstrap")

const Hero = () => {
    return (
        <Container className="container-xl hero d-flex align-items-center">
            <Container className="">
                <h5 className="display-5 text-black-50">¡Hola!</h5>
                <h1 className="display-1 text-black">Soy <span className="text-uppercase fw-bold text-info">Raul</span></h1>
                <h3 className="display-3 text-black-50">Web Developer</h3>
                <Link className="btn btn-info text-primary" href={"/about"} >Acerca de mi</Link>
            </Container>
        </Container>
    )
}
export default Hero