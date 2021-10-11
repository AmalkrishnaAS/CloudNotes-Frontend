
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
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  const [alert, setalert] = useState(null
)
  const showalert=(message,type)=>{

    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        
      setalert(null)
    }, 2500);
  }
  return (
    <NoteState>
    <div className="App">
      <Router>
      <Navbar />
      <Alert  alert={alert}/>
     <div>
      <Switch>
         
          <Route exact path="/">
            <Home showalert={showalert} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login  showalert={showalert} />
          </Route>
          <Route exact path="/signup" >
            <Signup showalert={showalert} />
          </Route>
        </Switch>
        </div>
        </Router>
    </div>
    </NoteState>
  );
}

export default App;
