import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Styles from './Community.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const Community = () => {

    const [stories, setStories] = useState([]);
    const { id } = useParams();

    // Show All
    useEffect(()=> {
        axios.get("http://localhost:8000/api/stories")
            .then(res => {
                console.log(res.data);
                
                setStories(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    // Delete
    const deleteStory = (deletedId) => {
        console.log(deletedId);

        axios.delete("http://localhost:8000/api/stories/" + deletedId)
            .then(res => {
                console.log(res.data);
                console.log("Delete Success!");

                setStories(stories.filter((story)=> story._id !== deletedId))
            })
            .catch(err => console.log(err))
    }

    return (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className={Styles.header}>
                        <h2>Community Dashboard</h2>
                        <h5> Share your yoga journey with other Yogis!</h5>
                        <Link to="/community/new"><button className={Styles.button_add}>Add your story</button></Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                {
                    stories.map((story, idx)=> {
                        return(
                            <div className={Styles.post} key={story._id}>
                                
                                    
                                        <h4 className={Styles.text}>🧘 {story.name}</h4>
                                        <img src={story.imgUrl} className={Styles.post_img}></img>
                                        <div className={Styles.text}>                            
                                            <h4>{story.title}</h4>
                                            <p>{story.content}</p>
                                            <p>{story.createdAt}</p>
                                            <Link to={'/community/update/' + story._id}><button className={Styles.button_update}>Edit</button></Link>
                                            <button onClick={()=> deleteStory(story._id)} className={Styles.button_update}>Delete</button>
                                        </div>
                                    
                                
                            </div>    
                        )
                    })
                }
                </Col>
            </Row>
            
        </Container>



    </div>
    )
}

export default Community