import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import './App.css'
import ExerciseList from './Components/ExerciseList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" exact component/> */}
      <Navbar />
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />

    </BrowserRouter>
  );
}

export default App;
