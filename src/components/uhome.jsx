import NavbarStudent from '../components/general/navbar_student'
import Footer from '../components/general/footer'
import Home from '../components/front-page/home'
import Features from '../components/front-page/features'
import Teacher from '../components/front-page/teacher'

export default function Uhome() {
    return (
        <div>
        <NavbarStudent/>
        <Home/>
        <Features/>
        <Teacher/>
        <Footer/>
        </div>
    )
}