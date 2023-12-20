'use client'
import Image from "next/image"
const { Container, Carousel, CarouselItem } = require("react-bootstrap")
import diploma1 from "../../img/diplomas/diploma1.webp"
import diploma2 from "../../img/diplomas/diploma02.webp"
import diploma3 from "../../img/diplomas/diploma03.webp"
import diploma4 from "../../img/diplomas/diploma04.webp"
import diploma5 from "../../img/diplomas/diploma05.webp"
import diploma6 from "../../img/diplomas/diploma06.webp"
import diploma7 from "../../img/diplomas/diploma07.webp"
import diploma8 from "../../img/diplomas/diploma08.webp"
import diploma9 from "../../img/diplomas/diploma09.webp"
import diploma10 from "../../img/diplomas/diploma10.webp"
import diploma11 from "../../img/diplomas/diploma11.webp"
import diploma12 from "../../img/diplomas/diploma12.webp"
import diploma13 from "../../img/diplomas/diploma13.webp"
import diploma14 from "../../img/diplomas/diploma14.webp"
import diploma15 from "../../img/diplomas/diploma15.webp"
import diploma16 from "../../img/diplomas/diploma16.webp"
import diploma17 from "../../img/diplomas/diploma17.webp"
import diploma18 from "../../img/diplomas/diploma18.webp"
import diploma19 from "../../img/diplomas/diploma19.webp"
import diploma20 from "../../img/diplomas/diploma20.webp"
import diploma21 from "../../img/diplomas/diploma21.webp"
import diploma22 from "../../img/diplomas/diploma22.webp"
import diploma23 from "../../img/diplomas/diploma23.webp"
import diploma24 from "../../img/diplomas/diploma24.webp"
import diploma25 from "../../img/diplomas/diploma25.webp"
import diploma26 from "../../img/diplomas/diploma26.webp"
import diploma27 from "../../img/diplomas/diploma27.webp"
import diploma28 from "../../img/diplomas/diploma28.webp"
import diploma29 from "../../img/diplomas/diploma29.webp"
import diploma30 from "../../img/diplomas/diploma30.webp"
import diploma31 from "../../img/diplomas/diploma31.webp"
import diploma32 from "../../img/diplomas/diploma32.webp"

const About = () => {
    const diplomas = [diploma1, diploma2, diploma3, diploma4, diploma5, diploma6, diploma7, diploma8, diploma9, diploma10, diploma11, diploma12, diploma13, diploma14, diploma15, diploma16, diploma17, diploma18, diploma19, diploma20, diploma21, diploma22, diploma23, diploma24, diploma25, diploma26, diploma27, diploma27, diploma28, diploma29, diploma30, diploma31, diploma32]
    return (
        <Container >
            <Container>
                <h1>!Hola¡ Soy Raul <span>Madero</span></h1>
                <p>Mi pasión por la resolución de problemas me ha llevado a explorar el vasto campo de la programación, donde cada línea de código es un rompecabezas que espero ansiosamente resolver. Mi enfoque lógico me ayuda a desentrañar problemas complejos y a encontrar soluciones eficientes y elegantes.</p>
                <p>Además de mi dedicación a la programación, también poseo una habilidad innata para la resolución de conflictos. Mi capacidad para ver las situaciones desde múltiples perspectivas me permiten encontrar soluciones simples, prácticas y creativas que beneficien a todas las partes involucradas.</p>
                <p>En resumen, soy un estudiante de programación apasionado y orientado a resultados, con una sólida ética de trabajo y un enfoque inquebrantable para superar obstáculos. Estoy constantemente buscando oportunidades para aprender y crecer, y estoy emocionado por las posibilidades ilimitadas que el mundo de la programación tiene para ofrecer.</p>
            </Container>
            <Container className="">
                <h2 className="text-center text-olive">Cursos y Talleres en los que he participado</h2>
                <Carousel className="carousel-diploma border-1 rounded-2 shadow-lg" >
                        {diplomas.map((diploma, index) => (
                            <CarouselItem key={index}>
                                <Image style={{maxWidth: "100%", maxHeight: "400px"}} alt="Diploma" src={diploma} />
                            </CarouselItem>
                        ))}
                    
                </Carousel>
            </Container>
        </Container>
    )
}

export default About