import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Switch, Route} from "react-router-dom";
import Header from './Header';
import About from './About';
import Form from './Form';
import Contact from './Contact';
import CandyPage from './CandyPage';
import Home from './Home';

import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      
      <BrowserRouter>
      <Switch>

        <Route path ="/about">
          <About />
        </Route>

        <Route path ="/form">
          <Form />
        </Route>

        <Route path ="/contact">
          <Contact />
        </Route>

        <Route path ="/candy">
          <CandyPage />
        </Route>

        <Route path ="/">
          <CandyContainer />
        </Route>

      </Switch>
      </BrowserRouter>

    </div>

    
    


    
  )
}

export default App
