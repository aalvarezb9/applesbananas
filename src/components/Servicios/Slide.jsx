import { SwiperSlide } from "swiper/react";
import { Card, Button } from "react-bootstrap";
import edu from '../../utils/img/edu.jpg';

const Slide = ({ title, img, body }) => {
    return (
        <SwiperSlide>
            <Card className="tt" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={edu} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </SwiperSlide>
    );
};

export default Slide;
