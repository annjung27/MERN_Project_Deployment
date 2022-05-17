import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory, Link } from 'react-router-dom'
import Styles from './CommunityForm.module.css'
import {Container} from 'react-bootstrap';

const CommunityUpdate = (props) => {

    const history = useHistory();

    const { id } = useParams();

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    // const [photo, setPhoto] = useState("");
    const [content, setContent] = useState("");
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/stories/" + id)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);
                setTitle(res.data.title);
                setImgUrl(res.data.imgUrl)
                // setPhoto(res.data.photo);
                setContent(res.data.content);

            })
            .catch(err => console.log(err))
    }, [])

    

    // const handlePhoto = (e) => {
    //     setPhoto(e.target.files[0])
    // }


    const updateStory = (e) => {
        e.preventDefault();
        
        const newStory = {
            name,
            title,
            imgUrl,            
            content
        }
        axios.put(`http://localhost:8000/api/stories/${id}`, newStory)
            .then( res => {
                console.log(res.data);
                history.push('/community')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
    <div>
        <Container fluid>
            <div className={Styles.form_container}>
                <h1>Edit your story</h1>
                <form onSubmit={updateStory}  className={Styles.form}>
                    <input onChange={(e)=>{setName(e.target.value)}} value={name} className={Styles.input} name='name'></input> 
                    <input onChange={(e)=>{setTitle(e.target.value)}} value={title} className={Styles.input} name='title'></input>            
                    <input onChange={(e)=>{setImgUrl(e.target.value)}} value={imgUrl} className={Styles.input} name='title'></input>            
                
                    <textarea onChange={(e)=>{setContent(e.target.value)}} value={content}  name="content" cols="30" rows="10" className={Styles.text_area}></textarea>
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

export default CommunityUpdate