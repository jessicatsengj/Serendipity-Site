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
import PortfolioPage from './PortfolioPage';

import LastNight from './novels/LastNight';
import Wolf from './novels/Wolf';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/writings" component={WritingPage}/>
          <Route path="/portfolio" component={PortfolioPage}/>

          <Route path="/novels/lastnight" component={LastNight}/>
          <Route path="/novels/wolf" component={Wolf}/>
        </div>

      </Router>
    );
  }
}

export default App;
