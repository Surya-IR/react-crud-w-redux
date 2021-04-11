import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Route
} from "react-router-dom";
import LoginPage from './components/Login/LoginPage'
import MainPage from './components/CRUD/List/MainPage'

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component ={LoginPage}/>
        <Route path="/home" component={MainPage}/>
        
      </Switch>
    </Router>
    </div>
  );
}

export default withRouter(App);
