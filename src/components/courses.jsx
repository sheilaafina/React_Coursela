import { useEffect, useState } from "react"

export default function Courses(){
    const [topCourse, setTopCourse] = useState([])
    const loadCourse= () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };

            fetch("http://127.0.0.1:5000/topcourse", requestOptions)
            .then(response => response.json())
            .then(result => setTopCourse(result))
            .catch((error) => console.log('error', error));
        };
    useEffect(()=>{
        loadCourse()
    }, [])

    const allTopCourse =
       topCourse.map((e)=>{
            return (
                <div key={e.ID}>
                <div className="card mx-3 my-3">
                        <div className="card-body">
                            {/* <img src={`"img/course${e.ID}.jpg"`} alt=""/> */}
                            <img src="img/course1.jpg" alt=""/>
                        <h5 className="card-title">{e.Name}</h5>
                        <p className="card-text">Total Enrolled: {e.TotalEnrolled}</p>
                        </div>
                </div>
                </div>
            )
        })

    return (
                // <!-- Courses  -->
                <section id="course">
                <h1>Our Popular Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam corrupti vel amet id asperiores impedit quisquam, nobis minus atque deleniti ad quasi quo deserunt natus debitis quibusdam tempora facilis.</p>
                <div className="container">
                    <div className="row" id="body">{allTopCourse}</div>
                </div>
                </section>
    )
}