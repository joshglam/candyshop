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
import CandyContainer from './CandyContainer';

function App() {
  const [count, setCount] = useState(0)
  const [candies, setCandies]= useState([])
  return (
    <div>
      <Header />
      
      <Switch>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/form">
          <Form setCandies={setCandies}/>
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/candy">
          <CandyPage />
        </Route>

        <Route exact path="/">
          <CandyContainer candies={candies} setCandies={setCandies} />
        </Route>

      </Switch>

    </div>

    
    


    
  )
}

export default App
