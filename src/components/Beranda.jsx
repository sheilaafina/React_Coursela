import Home from '../components/front-page/home'
import Features from '../components/front-page/features'
import Courses from './courses'
import Teacher from '../components/front-page/teacher'

export default function Beranda(){
    return(
        <div>
            <Home/>
            <Features/>
            <Courses/>
            <Teacher/>
        </div>
    )
}
