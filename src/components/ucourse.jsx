import NavbarStudent from './general/navbar_student'
import Footer from './general/footer'
import '../css/ucourse.css'
import React, { useState, useEffect} from 'react'

export default function Ucourse(){
    const [getUCourse, setUCourse] = useState([]);
    const token = document.cookie;
    var id = ""
    const loadData =()=>{
        const split = token.split(".");
        let parsedToken = JSON.parse(atob(split[1]));
        let user_id = parsedToken["user_id"]
        id = user_id 
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };

        fetch("http://127.0.0.1:5000/statusenroll/"+id, requestOptions)
        .then(response => response.json())
        .then((result) => {  
            setUCourse(result);       
        })
        .catch((error) => console.log('error', error));
        };

    useEffect(() => {
    loadData();
    }, [])

    const allUCourse = getUCourse.map((y) => {
        return(
        
            <div className="card mx-3 my-3">
                <div className="card-body">
                    <img src={`img/course${y.ID}.jpg`} alt=""/>
                    <span id={`"item${y.course_id}"`} hidden>item${y.course_id}</span>
                <h5 className="card-title">{y.name}</h5>
                <button id={`"complete${y.course_id}"`} className="btn btn-primary" onClick="">Click here to complete</button>
                <button id={`"complete${y.course_id}"`} className="btn btn-primary" onClick="">Droput from course</button>
                </div>
            </div>
        );})
    return (
    <div>
        <NavbarStudent/>
    <div>
        <h2 className="judul-ucourse">List Course</h2>
        <div className="container">
            <div className="row" id="body">{allUCourse}</div>
        </div>
    </div>
    <Footer/>
    </div>
    )
}