import React from 'react';
import Nav from "./components/nav/nav";
import MainPage from './components/mainPage/mainPage';
import AssignmentsPage from './components/assignmentsPage/AssignmentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className = "Content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
