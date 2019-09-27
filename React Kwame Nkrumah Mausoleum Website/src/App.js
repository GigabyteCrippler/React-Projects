import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './home';
import { About } from "./about";
import { Contact } from "./contact";
//import {NoMatch} from "./NoMatch";
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';


function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
        <Router>
          <switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
