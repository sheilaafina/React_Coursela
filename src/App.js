import NavbarDarkExample from './components/general/navbar'
// import Home from './components/front-page/home'
// import Features from './components/front-page/features'
// import Courses from './components/front-page/courses'
// import Teacher from './components/front-page/teacher'
import Footer from './components/general/footer'
import { Outlet } from "react-router-dom"
// import Login from './components/login'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/img/logo.png'
import './assets/img/pro1.webp'
import './assets/img/pro2.webp'
import './assets/img/pro3.webp'

function App() {
  return (
      <div className="App">
        <div>
          <NavbarDarkExample/>
        </div>
        <div>
          <Outlet/>
        </div>
        <div>
          <Footer/>
        </div>
      </div> );}

export default App;
