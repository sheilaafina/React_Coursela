// import Navbar from '../components/general/navbar';
import Footer from '../components/general/footer';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import NavbarDarkExample from './general/navbar';

export default function CourseList(){
    const [getCourse, setCourse] = useState([]);

    const loadData =()=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/allcourse", requestOptions)
        .then(response => response.json())
        .then((result) => {  
            setCourse(result);       
        })
        .catch((error) => console.log('error', error));
        };

    useEffect(() => {
    loadData();
    }, [])
    const allCourse = getCourse.map((y, index) => {
    return(
        
        <div key={index+1} className="card mx-3 my-3">
        <div className="card-body">
        {/* <img src={`"img/course${y.ID}.jpg"`} alt=""/> */}
        <img src="img/course1.jpg" alt=""/>
        <span id={y.ID} hidden>{y.ID}</span>
        <h5 class="card-title">{y.Course}</h5>
        <h6 class="card-text">{y.Nama}</h6>
        <p class="card-text">{y.Description}</p>
        <button class="btn btn-primary" onclick="pageItem({y.ID})">Details</button>
        </div>
        </div>
    );
    }
    )

    return(
        <div>
        <NavbarDarkExample/>
        <br/>
        <h2 className="judul-ucourse">Course List</h2>
        <br/>
            <div class="container-fluid col-md-6 offset-md-12  ">
                <div class="d-flex" role="search">
                    <input id="searchcourse" class="form-control form-control-lg" type="text" placeholder="Search course by name" aria-label="Search"/>
                    <button onclick="search()" class="btn btn-outline-success">Search</button>
                </div>
            </div>
            <br/>
            <br/>
            <div class="container">
                <div class="row" id="body">{allCourse}</div>
            </div>
        <Footer/>
            </div>
    )
}