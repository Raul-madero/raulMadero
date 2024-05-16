'use client'
const { Container, Image } = require("react-bootstrap")
const Resumen = () => {
    return (
        <Container className="d-flex g-4 align-items-center flex-wrap border border-warning bg-opacity-75 my-3 rounded-2 shadow bg-body-secondary border-4">
            <Container className="perfil-info">
                <h5 className="display-5 fw-light">Acerca de mi.</h5>
                <h1 className="display-1">Soy <span className="text-uppercase fw-bold text-secondary">Raul</span></h1>
                <p>Soy un estudiante apasionado de programación con una mente analítica, lógica y pragmática. Mi enfoque meticuloso y mi habilidad para resolver problemas me han permitido destacarme en el mundo de la programación. Siempre he sido alguien que disfruta enfrentando desafíos y encontrando soluciones innovadoras y efectivas.</p>
            </Container>
            <Container className="perfil">
            </Container>
        </Container>
    )
}
export default Resumen