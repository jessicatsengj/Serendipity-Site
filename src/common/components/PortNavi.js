// var react = require('react');
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Projects from './Projects';
import Drawings from './Drawings';


class PortNavi extends Component {

  render() {
    return (
      // <div className="ts fluid container nav">
      //   <div className="ts menu black">
      //     <NavLink className="myLink" to="/"><img className="logo" src="/Image/logo-white.png"></img></NavLink>
      //     <div className="right menu">
      //       <div className="item navi_item"><NavLink className="myLink myOtherLink" activeClassName="selected" to="/about" >ABOUT</NavLink></div>
      //       <div className="item navi_item"><NavLink className="myLink myOtherLink" activeClassName="selected" to="/portfolio" >PORTFOLIO</NavLink></div>
      //       <div className="item navi_item"><NavLink className="myLink myOtherLink" activeClassName="selected" to="/writings" >WRITINGS</NavLink></div>
      //     </div>
      //   </div>
      // </div>

      // <Router>
      //   <div>
      //     <ul>
      //       <li><Link to="/">Projects</Link></li>
      //       <li><Link to="/about">Drawings</Link></li>
      //       <li><Link to="/topics">Interaction</Link></li>
      //     </ul>
      //
      //     <hr/>
      //
      //     <Route exact path="/" component={Projects}/>
      //     <Route path="/about" component={Drawings}/>
      //     <Route path="/topics" component={Interaction}/>
      //   </div>
      // </Router>

      <Router>
        <div>
            <div className="ts fluid container nav port_navi">
              <div className="ts menu green">
                <div className="right menu">
                    <div className="item"><NavLink className="portLink" activeClassName="port_selected" to="/projects">Projects</NavLink></div>
                    <div className="item"><NavLink className="portLink" activeClassName="port_selected" to="/drawings">Drawings</NavLink></div>
                    <div className="item"><NavLink className="portLink" activeClassName="port_selected" to="/interaction">Interaction</NavLink></div>
                </div>
              </div>
            </div>


            <div>
              <Route exact path="/projects" component={Projects}/>
              <Route path="/drawings" component={Drawings}/>
              <Route path="/interaction" component={Interaction}/>
            </div>
        </div>
      </Router>

    );
  }
}

const Interaction = () => (
  <div>
    <h2>Interaction</h2>
  </div>
)
export default PortNavi
