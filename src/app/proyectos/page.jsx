import Image from "next/image"
import { Carousel, CarouselItem, Container, CarouselCaption } from "react-bootstrap"
import proyecto1 from "../../img/proyectos/blogDeCafe.webp"
import calavera from "../../img/proyectos/calavera.webp"
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
import Link from "next/link"

const Proyectos = () => {
    const proyectos = [{
                            title: 'Blog de Café',
                            description: 'Página de blog de café realizada como practica para curso de HTML y CSS',
                            image: proyecto1,
                            url: "https://raul-madero.github.io/blogDeCafe/index.html"
                        },
                        {
                            title: 'Agencia de Viajes',
                            description: 'Realizada como practica para curso de Tailwind',
                            image: travel,
                            url: "https://raul-madero.github.io/Travels/"
                        },
                        {
                            title: 'Juego de Calavera',
                            description: 'Página de juego de calavera realizada como practica para curso de JavaScript',
                            image: calavera,
                            url: "https://raul-madero.github.io/calavera/"
                        }, 
                        {
                            title: 'Generador de excusas',
                            description: 'Realizado como practica para curso de JavaScript',
                            image: excuse,
                            url: "https://raul-madero.github.io/raulMadero_excuseGenerator/"
                        }, 
                        {
                            title: 'Copia de feed de Instagram',
                            description: 'Realizada como practica para curso de Bootstrap',
                            image: feed,
                            url: "https://raul-madero.github.io/raulMadero_instagramFeed/"
                        },
                        {
                            title: 'Landing Page',
                            description: 'Realizada como practica en Frontend Mentor',
                            image: fylo,
                            url: "https://raul-madero.github.io/Fylo/"
                        }, 
                        {
                            title: 'Landing',
                            description: 'Realizada como practica en Frontend Mentor',
                            image: huddle,
                            url: "https://raul-madero.github.io/landing/"
                        },
                        {
                            title: 'Portada de Página de Noticias',
                            description: 'Realizada como practica en Frontend Mentor',
                            image: news,
                            url: "https://raul-madero.github.io/news-homepage/"
                        },
                        {
                            title: 'Formulario de pago',
                            description: 'Realizada como practica para curso de Bootstrap',
                            image: payment,
                            url: "https://raul-madero.github.io/raulMadero_HTML5form/"
                        },
                        {
                            title: 'Post de Instagram',
                            description: 'Realizado como practica para curso de Bootstrap',
                            image: post,
                            url: "https://raul-madero.github.io/instagramPost/"
                        },
                        {
                            title: 'Festival Musical',
                            description: 'Realizada como practica para curso de HTML y CSS práctico',
                            image: rockBand,
                            url: "https://raul-madero.github.io/rockband/"
                        },
                        {
                            title: 'Feed Social',
                            description: 'Realizada como practica en Frontend Mentor',
                            image: social,
                            url: "https://raul-madero.github.io/social-proof/"
                        },
                        {
                            title: 'Equipo',
                            description: 'Realizada como practica en Frontend Mentor',
                            image: team,
                            url: "https://raul-madero.github.io/team/"
                        },
                        {
                            title: 'Landing de Testimonios',
                            description: 'Realizada como practica en Frontend Mentor',
                            image: testimonials,
                            url: "https://raul-madero.github.io/testimonials/"
                        }
                        ]
    return (
        <Container className="my-4 p-3">
            <h1 className="mb-2 text-center text-bg-info w-50 mx-auto text-olive bg-opacity-50 p-3">Proyectos</h1>
            <p className="w-75 mx-auto mt-3">En mi trayectoria académica, he tenido el privilegio de participar en diversos proyectos que reflejan no solo mi dedicación y pasión por mi área de estudio, sino también mi capacidad para aplicar los conocimientos adquiridos en mis cursos. A continuación, presento algunos de los proyectos más destacados que he desarrollado como parte de mi formación:</p>
            <Carousel className="carousel-diploma">
                {proyectos.map((proyecto, index) => (
                    <CarouselItem key={index}>
                        <Link href={proyecto.url} target="_blank">
                            <Image style={{width: "100%", maxHeight: "350px"}} alt="Proyect" src={proyecto.image}/>
                        </Link>
                        <CarouselCaption>
                            <h3 className="bg-dark bg-opacity-50 text-light">{proyect.title}</h3>
                            <p className="bg-dark bg-opacity-50 text-light">{proyect.description}</p>
                        </CarouselCaption>
                    </CarouselItem>
                ))}
                
            </Carousel>
        </Container>
    )
}

export default Proyectos