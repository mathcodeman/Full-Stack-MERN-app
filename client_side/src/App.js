
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/edit_page" element={<EditExercisePage />}></Route>
          <Route path="/create_page" element={<CreateExercisePage />}></Route>
        </Routes >
      </BrowserRouter>

    </div>
  );
}

export default App;
