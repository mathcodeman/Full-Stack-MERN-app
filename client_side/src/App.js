
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  const [exerciseToEdit, SetExerciseToEdit] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<HomePage SetExerciseToEdit={SetExerciseToEdit} />}></Route>
          <Route path="/edit_page" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
          <Route path="/create_page" element={<CreateExercisePage />}></Route>
        </Routes >
      </BrowserRouter>

    </div>
  );
}

export default App;
