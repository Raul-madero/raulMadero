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
                    <Link href="/" className="btn btn-info text-dark d-flex g-2 align-items-center p-2">
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
                            <Link href="/">
                                <FontAwesomeIcon icon={faXTwitter} size="2xl" style={{color: "#ffffee"}}/>
                            </Link>     
                        </Col>
                        <Col>
                            <Link href={"/"}>
                                <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffee"}}/>
                            </Link>
                        </Col>
                        <Col>
                            <Link href={"/"}>
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