import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/student/home.jsx';
import CoursesList from './pages/student/coursesList.jsx';
import CourseDetail from './pages/student/courseDetail.jsx';
import MyEnrollments from  './pages/student/myenrolment.jsx';
import Player from './pages/student/player.jsx';
import Loding from '../components/student/loding.jsx';
import Educator from './pages/educator/educator.jsx';
import AddCourse from './pages/educator/addCourse.jsx';
import Dashboard from './pages/educator/dashboard.jsx';
import MyCourse from './pages/educator/myCourse.jsx';
import StudentEnrolled from './pages/educator/studentEnrolled.jsx';
import Navbar from '../components/student/navbar.jsx';

function App() { 
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/course-list' element={<CoursesList />}></Route>
      <Route path='/course-list/:input' element={<CoursesList />}></Route>
      <Route path='/course/:id' element={<CourseDetail />}></Route>
      <Route path='/my-enrollments' element={<MyEnrollments />}></Route>
      <Route path='/player/:courseId' element={<Player />}></Route>
      <Route path='/loding/:path' element={<Loding />}></Route>
      <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />}></Route>
          <Route path='add-course' element={<AddCourse />}></Route>
          <Route path='my-course' element={<MyCourse />}></Route>
          <Route path='student-enrolled' element={<StudentEnrolled />}></Route>
      
      </Route>
     </Routes>
    </div>
  );
}

export default App;