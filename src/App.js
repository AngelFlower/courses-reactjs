import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import LayoutComponent from './components/LayoutComponent';
import HomePage from './pages/HomePage';
//import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import GradesPage from './pages/GradesPage';
import CourseIndexPage from './pages/CourseIndexPage';
import CourseEditPage from './pages/CourseEditPage';

function App() {
  //<CoursesPage />
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<HomePage />} />
          {/*><Route path="courses" element={<CoursesPage />} />*/}
          <Route path="courses" element={<CourseIndexPage />} />
          <Route exact path="course/:type/:id" element={<CourseEditPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="grades" element={<GradesPage />} />
          <Route path="*" element={<NoMatch/>} />`
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
