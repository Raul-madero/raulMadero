import Image from "next/image"
import { Carousel, CarouselItem, Container } from "react-bootstrap"
import proyecto1 from "../../img/proyectos/blogDeCafe.webp"
import calavera from "../../img/proyectos/calavera.webp"
import dynamicCard from "../../img/proyectos/dinamic-card.webp"
import excuse from "../../img/proyectos/excuse.webp"
import feed from "../../img/proyectos/feed.webp"
import fylo from "../../img/proyectos/fylo.webp"
import huddle from "../../img/proyectos/huddle.webp"
import news from "../../img/proyectos/news.webp"
import payment from "../../img/proyectos/payment-form.webp"
import post from "../../img/proyectos/post.webp"
import rockBand from "../../img/proyectos/rockBand.webp"
import social from "../../img/proyectos/social.webp"
import team from "../../img/proyectos/team.webp"
import testimonials from "../../img/proyectos/testimonials.webp"
import travel from "../../img/proyectos/travel.webp"

const Proyectos = () => {
    const proyectos = [proyecto1, calavera, dynamicCard, excuse, feed, fylo, huddle, news, payment, post, rockBand, social, team, testimonials, travel]
    return (
        <Container className="my-4 p-3">
            <h1 className="mb-2 text-center text-bg-info w-50 mx-auto text-olive bg-opacity-50 p-3">Proyectos</h1>
            <p className="w-75 mx-auto mt-3">En mi trayectoria académica, he tenido el privilegio de participar en diversos proyectos que reflejan no solo mi dedicación y pasión por mi área de estudio, sino también mi capacidad para aplicar los conocimientos adquiridos en mis cursos. A continuación, presento algunos de los proyectos más destacados que he desarrollado como parte de mi formación:</p>
            <Carousel className="carousel-diploma">
                {proyectos.map((proyecto, index) => (
                    <CarouselItem key={index}>
                        <Image style={{width: "100%", maxHeight: "350px"}} alt="Proyect" src={proyecto}/>
                    </CarouselItem>
                ))}
                
            </Carousel>
        </Container>
    )
}

export default Proyectos