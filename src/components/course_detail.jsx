import Navbar from '../components/general/navbar';
import Footer from '../components/general/footer';

export default function CourseDetail(){
    return(
      <div>
        <Navbar/>
        <div className="container">
          <div className="row" id="body"></div>
        </div>
        <Footer/>
      </div>
      
    )
}