import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Main.module.css'
import teacherImg from '../images/main_teacher3.jpg'
import newImg from '../images/main_community.jpg'
import classImg from '../images/main_class2.jpg'
import { Container, Row, Col } from 'react-bootstrap';

const Main = (props) => {
    return (
    <div>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col>
                    <div className={Styles.main_img}>
                        <h2> Full access to all yoga classes</h2>
                        <h3>$35/month</h3>
                        <Link to="/users/new"><button className={Styles.button}>Sign Up</button></Link>            
                    </div>
                </Col>

            </Row>
            <Row>
                <Col sm>
                    <div className={Styles.card}>
                        <img src={teacherImg} className={Styles.img} alt='main_img'></img>                            
                        <h4>Meet our Instructors</h4>
                        <p>meet our wondeful instructors! Start your yoga journey with great teachers </p>
                        <Link to='/instructors'><button className={Styles.button}>Learn more</button></Link>
                    </div>           
                </Col>
                <Col sm>        
                    <div className={Styles.card}>
                        <img src={classImg} className={Styles.img} alt='main_img'></img>
                        <h4>Virtual Classes</h4>
                        <p>connect with teachers and other students in our real-time online classes!</p>
                        <Link to='/classes' className={Styles.linkStyle}><button className={Styles.button}>Learn more</button></Link>
                    </div>
                </Col>
                <Col sm>                
                    <div className={Styles.card}>
                        <img src={newImg} className={Styles.img} alt='main_img'></img>
                        <h4>Community</h4>
                        <p>Communicate with other students in our community dashboard. Share your story!</p>
                        <Link to='/community'><button className={Styles.button}>Learn more</button></Link>
                    </div>
                </Col>
            </Row>

        </Container>
        

        
    </div>
    )
}

export default Main;
