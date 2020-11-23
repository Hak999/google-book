import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import SearchBooks from './component/search';
import SavedBooks from './component/saved';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <SearchBooks />
        </Route>
        <Route exact path="/saved">
          <Header />
          <SavedBooks />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
