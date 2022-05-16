import React from 'react'
import Styles from './Events.module.css'
import googlmap_img from '../images/googlemap_example.jpg'
import { Container, Row, Col} from 'react-bootstrap';

const Events = () => {
return (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className={Styles.header}>
                        <h1>Outdoor Events</h1>                
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={Styles.content_grid}>            
                        <div className={Styles.text}>
                            <h2>Saturday Morning Yoga</h2>
                            <p>Saturday, April 2, 8am-9am</p>
                            <p>Location: Seven Seas Park, 1010 Morse Ave, Sunnyvale, CA 94089 </p>
                            <img src={googlmap_img}></img>
                            <button className={Styles.button}>Sign Up</button>                
                        </div>
                
                        <div>
                            <img className={Styles.img} src="https://cdn.pixabay.com/photo/2019/11/20/12/04/yoga-4639895_960_720.jpg"></img>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={Styles.content_grid}>            
                        <div className={Styles.text}>
                            <h2>Sunday Morning Yoga</h2>
                            <p>Saturday, April 2, 9am-10am</p>
                            <p>Location: Seven Seas Park, 1010 Morse Ave, Sunnyvale, CA 94089 </p>
                            <img src={googlmap_img}></img>
                            <button className={Styles.button}>Sign Up</button>                
                        </div>
                        
                        <div>
                            <img className={Styles.img} src="https://cdn.pixabay.com/photo/2019/11/20/12/04/yoga-4639895_960_720.jpg"></img>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default Events