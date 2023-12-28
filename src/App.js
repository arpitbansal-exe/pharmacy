import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Staff from './Pages/Staff';
import CourseDetail from './Pages/CourseDetail';
import { course_data } from './Componants/CourseData';
import NoPage from './Pages/NoPage';
import Circular from './Pages/Circular';
import ApplyNow from './Pages/ApplyNow';
import Footer from './Componants/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route path="/staff" element={<Staff />} />
          <Route path='/bpharma' element={<CourseDetail {...course_data.bpharma} />} />
          <Route path='/circular' element={<Circular/>} />
          <Route path='/applynow' element={<ApplyNow/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
