import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddIdea from './components/AddIdea/AddIdea';
import IdeaDetails from './components/IdeaDetails/IdeaDetails';


function App() {
  return (

    <Router>
      
      <div className="App">
        <Navbar/>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/addidea">
              <AddIdea/>
            </Route>
            <Route path="/ideas/:id">
              <IdeaDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

    
  );
}

export default App;
