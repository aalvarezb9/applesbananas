
import { Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {
    Pagination
} from 'swiper';

import edu from '../../utils/img/edu.jpg';
    
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
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="tt" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={edu} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Servicio
