import React from 'react'
import Styles from './Instructors.module.css'
import { Container, Row, Col } from 'react-bootstrap';

const Instructors = () => {
    return (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className={Styles.header}>
                        <h1>Instructors</h1>                
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={Styles.content_grid}>
                        <div>
                            <img className={Styles.img} src="https://cdn.pixabay.com/photo/2016/11/18/14/15/woman-1834827_960_720.jpg"></img>
                        </div>
                        <div className={Styles.text}>
                            <h4>Jenny</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lacus mi. Integer nec tempus sapien, gravida ultricies dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed fringilla nisl. Mauris id bibendum urna, ut vehicula dui. Mauris imperdiet, nisi non mattis pharetra, nisi tortor ultrices odio, at hendrerit dolor diam id nunc. Pellentesque vehicula nunc mattis </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>            
                    <div className={Styles.content_grid}>
                        <div>
                            <img className={Styles.img} src="https://cdn.pixabay.com/photo/2020/02/15/00/33/yoga-4849681_960_720.jpg"></img>
                        </div>
                        <div className={Styles.text}>
                            <h4>John</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lacus mi. Integer nec tempus sapien, gravida ultricies dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed fringilla nisl. Mauris id bibendum urna, ut vehicula dui. Mauris imperdiet, nisi non mattis pharetra, nisi tortor ultrices odio, at hendrerit dolor diam id nunc. Pellentesque vehicula nunc mattis  </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={Styles.content_grid}>
                        <div>
                            <img className={Styles.img} src="https://cdn.pixabay.com/photo/2017/03/04/14/00/yoga-2116093_960_720.jpg"></img>
                        </div>
                        <div className={Styles.text}>
                            <h4>Angela</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id lacus mi. Integer nec tempus sapien, gravida ultricies dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse sed fringilla nisl. Mauris id bibendum urna, ut vehicula dui. Mauris imperdiet, nisi non mattis pharetra, nisi tortor ultrices odio, at hendrerit dolor diam id nunc. Pellentesque vehicula nunc mattis. </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Instructors