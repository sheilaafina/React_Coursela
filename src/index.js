import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/login';
// import Courses from './components/front-page/courses'
// import Features from './components/front-page/features'
// import Teacher from './components/front-page/teacher'
import Beranda from './components/Beranda'
import CourseDetail from './components/course_detail'
import CourseList from './components/course_list'
import CreateCourse from './components/tcourse_create'
import CourseEdit from './components/tcourse_edit'
import Uhome from './components/uhome'
import StudentProfile from './components/uprofile'
import StudentEdit from './components/uprofile_edit'
import Ucourse from './components/ucourse';
import UcourseList from './components/ucourse_list';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Beranda/>}></Route>
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/course-detail' element={<CourseDetail />}/>
          <Route path='/course-list' element={<CourseList />}/>
          <Route path='/tcourse-create' element={<CreateCourse />}/>
          <Route path='/tcourse-edit' element={<CourseEdit />}/>
          <Route path='/uhome' element={<Uhome />}/>
          <Route path='/uprofile' element={<StudentProfile />}/>
          <Route path='/ucourse' element={<Ucourse />}/>
          <Route path='/ucourse-list' element={<UcourseList />}/>
          <Route path='/uprofile-edit' element={<StudentEdit />}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
