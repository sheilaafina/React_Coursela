import NavbarStudent from './general/navbar_student'
import Footer from '../components/general/footer'
import React, {useState, useEffect} from 'react';

export default function UcourseList(){
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

        fetch("http://127.0.0.1:5000/usercourse/"+id, requestOptions)
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
        
        <div key={y.ID} className="card mx-3 my-3">
        <div className="card-body">
        <img src={`img/course${y.ID}.jpg`} alt=""/>
        {/* <img src="img/course1.jpg" alt=""/> */}
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
        <NavbarStudent/>
        <br/>
        <h2 className="judul-ucourse">List Course</h2>
            <div class="container-fluid col-md-6 offset-md-12  ">
                <div class="d-flex" role="search">
                    <input id="searchcourse" class="form-control form-control-lg" type="text" placeholder="Search course by name" aria-label="Search"/>
                    <button onclick="search()" class="btn btn-outline-success">Search</button>
                </div>
            </div>
            <br/>
            <br/>
            {/* <div class="container-fluid col-md-6 offset-md-12  ">
                <div class="d-flex" role="search">
                    <input id="searchbyd" class="form-control form-control-lg" type="text" placeholder="Search course by description" aria-label="Search"/>
                    <button onclick="searchdesc()" class="btn btn-outline-success">Search</button>
                </div>
            </div> */}
            <div class="container">
                <div class="row" id="body">{allUCourse}</div>
            </div>
        <Footer/>
        </div>
    )}