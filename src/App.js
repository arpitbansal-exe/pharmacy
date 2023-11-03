import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componants/Home';
import Gallery from './Componants/Gallery';
import Desk from './Componants/Desk';
import Staff from './Componants/Staff';
import { chairperson_data, director_data, principal_data } from './Componants/LeaderData';
import Footer from './Componants/Footer';
import AllCourses from './Componants/AllCourses';
import CourseDetail from './Componants/CourseDetail';
import { course_data } from './Componants/CourseData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/leadership/chairperson" element={<Desk {...chairperson_data}/>} />
          <Route exact path="/leadership/director" element={<Desk {...director_data}/>} />
          <Route exact path="/leadership/principal" element={<Desk {...principal_data}/>} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path='/courses/bpharma' element={<CourseDetail {...course_data.bpharma} />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />

        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
