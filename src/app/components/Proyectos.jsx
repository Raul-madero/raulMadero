import { Carousel } from "react-bootstrap"
import CarrouselItems from "./CarrouselItems"

const Proyectos = (props) => {
    return (
        <Carousel className="container-xl my-4" fade>
            <CarrouselItems proyects={props.proyectos}/>
        </Carousel>
    )
}

export default Proyectos