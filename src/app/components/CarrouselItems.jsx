import { CarouselCaption, CarouselItem, Image } from "react-bootstrap"

const CarrouselItems = (props) => {
    return (
        <>
            {props.proyects.map(( proyect, index) => (
                <CarouselItem className={proyect.name} key={index}>
                    <CarouselCaption>
                        <h3 className="bg-dark bg-opacity-50 text-light">{proyect.title}</h3>
                        <p className="bg-dark bg-opacity-50 text-light">{proyect.description}</p>
                    </CarouselCaption>
                </CarouselItem>
            ))}
        </>
    )
}
export default CarrouselItems