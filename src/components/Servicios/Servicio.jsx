
import { Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {
    Pagination
} from 'swiper';

import edu from '../../utils/img/edu.jpg';
import servicios from '../../data/servicios.json';
    
    // install Swiper modules
SwiperCore.use([Pagination]);

const Servicio = () => {

    const pagination = {
        "clickable": true,
        "renderBullet": function (index, className) {
                return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
        }
    }

    return (
        <div className="servicio">
            <Swiper pagination={pagination} className="mySwiper">
                {servicios.map((servicio, index) => 
                    <SwiperSlide key={index}>
                        <Card className="tt" style={{ width: "18rem" }}>
                            <Card.Img className="ajustar" variant="top" src={edu} />
                            <Card.Body>
                                <Card.Title>{servicio.title}</Card.Title>
                                <Card.Text>
                                    {servicio.body}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                )}
            </Swiper>
        
        </div>
    )
}

export default Servicio
