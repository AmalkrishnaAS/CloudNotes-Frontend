
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import { useState } from 'react';


function App() {
  const [alert, setalert] = useState({
    msg:"message",
    type:"primary"
  })
  return (
    <NoteState>
    <div className="App">
      <Router>
      <Navbar />
      <Alert  alert={alert}/>
     <div>
      <Switch>
         
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </div>
        </Router>
    </div>
    </NoteState>
  );
}

export default App;
