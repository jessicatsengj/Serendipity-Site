import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WritingPage from './WritingPage';
import PostPage from './PostPage';
import PortfolioPage from './PortfolioPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/writings" component={WritingPage}/>
          <Route path="/posts" component={PostPage}/>
          <Route path="/portfolio" component={PortfolioPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
