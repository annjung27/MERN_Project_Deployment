import React, { useState } from 'react'
import axios from 'axios'
import Styles from './CommunityForm.module.css'
import { Link, useHistory } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap';


const CommunityForm = (props) => {

    const history = useHistory();

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imgUrl, setImgUrl] = useState("");


    const createStory = (e) => {
        e.preventDefault();
        console.log(name, title, content);
        
        const newStory = {
            name: name, 
            title,
            content,
            imgUrl
        }
        axios.post("http://localhost:8000/api/stories", newStory)
            .then( res => {
                console.log(res.data);
                history.push("/community")
            })
            .catch(err => console.log(err))
    }
    

    return (
    <div>
        <Container>            
            <div className={Styles.form_container}>
                <h1>Add your story</h1>
                <form onSubmit={createStory}  className={Styles.form}>
                    <input onChange={e => setName(e.target.value)} value={name} placeholder='Name' className={Styles.input} ></input> 
                    <input onChange={e => setTitle(e.target.value)} value={title} placeholder='Title' className={Styles.input} ></input>                    
                    <input onChange={e => setImgUrl(e.target.value)} value={imgUrl} placeholder='Image URL' className={Styles.input}></input>                  
                    <textarea onChange={e => setContent(e.target.value)} value={content}  cols="30" rows="10" className={Styles.text_area}></textarea>
                    <p>
                        <button className={Styles.button}>Post</button>
                        <Link to="/community"><button className={Styles.button}>Cancel</button></Link>
                    </p>
                    
                </form>
            </div>
        </Container>
    </div>
    )
    
}


export default CommunityForm