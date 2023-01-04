import Navbar from '../components/general/navbar';
import Footer from '../components/general/footer';

export default function CreateCourse(){
    return(
      <div>
        <Navbar/>
        <div className="container mt-4">
        <h1>Create Course</h1>
          <div id="book-form">
            <div className="form-group">
              <label for="title">Course Title</label>
              <input type="text" id="title" className="form-control"/>
            </div>
            <div className="form-group">
              <label for="author">Institution</label>
              <input type="text" id="inst" className="form-control"/>
            </div>
            <div className="form-group">
              <label for="isbn">Level</label>
              <input type="text" id="level" className="form-control"/>
            </div>
            <div className="form-group"> 
                <label className="col-md-4 control-label">Topics</label>
                  <div className="col-md-4 selectContainer">
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                  <select id="topics" name="state" className="form-control selectpicker" >
                    <option>Please select the topic</option>
                    <option >Computer Science</option>
                    <option >Digital Marketing</option>
                    <option >UI/UX Design</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group"> 
                <label className="col-md-4 control-label">Prequisite</label>
                  <div className="col-md-4 selectContainer">
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                  <select name="state" id="courses" className="form-control selectpicker">
                    <option value="null">Please select the prerequisite(if there's one)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
                <label for="isbn">Description</label>
                <input type="text" id="desc" className="form-control"/>
            </div>
            <input type="submit" onclick="create()" value="Add Course" className="btn btn-primary btn-block"/>
        </div>
      </div>
      <Footer/>
      </div>
    )
}