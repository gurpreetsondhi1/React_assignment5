import React from 'react';
import './App.css';
import Main from './project/Main.js';
import Student from './project/Student.js';
import Contact from './project/Contact.js';
import Home from './project/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StudentDetail from './project/StudentDetail.js';


function App() {
  return (
   
      <div>
        
        <Router>
          <Main />
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Student' element={<StudentDetail/>} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/StudentDetail/:ids' element={<StudentDetail />} />
          </Routes>
        </Router>
        

      </div>
  
  );
}

export default App;
