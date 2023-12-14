'use client'

import { faGithub, faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

const { Container, Row, Col } = require("react-bootstrap")
const Footer = (props) => {
    return (
        <Container className="bg-secondary container-xl">
            <Row className="mt-4">
                <Col className="d-flex my-4 justify-content-center align-items-center" xs={12} md={3}>
                    <Link href="https://wa.me/523310401077?text=Gracias%20por%20ponerte%20en%20contacto%20conmigo.%20En%20cuanto%20me%20sea%20posible%20respondere%20a%20tu%20mensaje." className="btn btn-info text-dark d-flex g-2 align-items-center p-2">
                        <FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#ffffee"}}/>
                        <p className="m-0 ms-2 text-primary">Whatsapp</p>
                    </Link>
                
                </Col>
                <Col className="d-flex my-4 justify-content-center align-items-center" xs={12} md={6}>
                    <Link href="/">
                        <Image width={200} src={props.image} alt="Logo"/>
                    </Link>
                </Col>
                <Col className="d-flex my-4 justify-content-center align-items-center" xs={12} md={3}>
                    <Row>
                        <Col>
                            <Link target="_blank" href="https://twitter.com/rmaderoIV">
                                <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{color: "#ffffee"}}/>
                            </Link>     
                        </Col>
                        <Col>
                            <Link target="_blank" href={"https://github.com/Raul-madero?tab=repositories"}>
                                <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffee"}}/>
                            </Link>
                        </Col>
                        <Col>
                            <Link target="_blank" href={"https://www.linkedin.com/in/raul-madero-28060548/"}>
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#ffffee"}}/>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer