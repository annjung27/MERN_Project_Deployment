import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './ClassList.module.css'
import { Container, Col, Row, Card } from 'react-bootstrap';



const ClassList = (props) => {

    

    return (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className={Styles.header}>
                        <h2>All Classes</h2>            
                    </div>
                </Col>        
            </Row>   
            <Row>
                <Col>                
                    <div className={Styles.card_grid}>
                        {
                            props.classes.map((oneClass, idx) => {
                                return (
                                    <div className={Styles.card} key={idx}>
                                        <img src={oneClass.imgUrl} className={Styles.imgStyle} alt="yoga-img"/>
                                        <h4>{oneClass.title}</h4>
                                        <div className={Styles.list_items}>
                                            <p>{oneClass.level}</p>
                                            <p>{oneClass.method} ▶️</p>
                                            <p>Instructor: {oneClass.teacher}</p>
                                            <p>Date: {oneClass.date}</p>
                                            <p>Price: ${oneClass.price}</p>
                                        </div>
                                        
                                        <Link to={`/classes/${oneClass.id}`}><button className={Styles.button}>See Class</button></Link>                
                                    </div>
                                )
                            })
                        }
                    </div>        
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default ClassList