'use client'
const { Container, Col, Row } = require("react-bootstrap")
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngular, faBootstrap, faCss3, faHtml5, faJs, faPhp, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons"

const Tecnologias = () => {
    return (
        <Container className="tecnologias p-0 rounded-1">
            <Container className="bg-darker bg-opacity-75 m-0 p-4">
                <h1 className="text-info text-center">Algunas Tecnologías con las que Trabajo</h1>
                <Row>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faCss3} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faSass} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faPhp} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faPython} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                    <Col className="border border-info m-3 p-2 rounded-2 text-center">
                        <FontAwesomeIcon icon={faAngular} size="2xl" style={{color: "#e67e22"}}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Tecnologias