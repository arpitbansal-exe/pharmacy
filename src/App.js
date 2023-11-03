import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componants/Home';
import Gallery from './Componants/Gallery';
import Staff from './Componants/Staff';
import Footer from './Componants/Footer';
import CourseDetail from './Componants/CourseDetail';
import { course_data } from './Componants/CourseData';
import NoPage from './Componants/NoPage';
import Circular from './Componants/Circular';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route path="/staff" element={<Staff />} />
          <Route path='/courses/bpharma' element={<CourseDetail {...course_data.bpharma} />} />
          <Route path='/circular' element={<Circular/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
