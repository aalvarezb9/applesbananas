import { Carousel } from "react-bootstrap";
import data from '../../data/carousel.json';

const Carru = () => {
    return (
        <div>
            <Carousel variant="dark">
                {/* {data.map((el, index) => <CarouselItem key={index} img={el.img} cap1={el.cap1} cap2={el.cap2} alt={el.alt} />)} */}
                {data.map((el, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 crs"
                            src={process.env.PUBLIC_URL + el.img}
                            style={{'opacity': '0.8'}}
                            alt={el.alt}
                        />
                        <Carousel.Caption>
                            <h3>{el.cap1}</h3>
                            <p>{el.cap2}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Carru
