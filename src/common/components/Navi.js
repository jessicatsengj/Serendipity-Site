// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class Navi extends Component {

  render() {
    return (
      <div className="ts fluid container nav navi">
        <div className="ts menu black">
          <NavLink className="myLink" to="/"><img className="logo" src="/Image/logo-white.png"></img></NavLink>
          <div className="right menu">
            <div className="item navi_item"><NavLink className="myLink myOtherLink" activeClassName="selected" to="/about" >ABOUT</NavLink></div>
            <div className="item navi_item"><NavLink className="myLink myOtherLink" activeClassName="selected" to="/portfolio" >PORTFOLIO</NavLink></div>
            <div className="item navi_item"><NavLink className="myLink myOtherLink" activeClassName="selected" to="/writings" >WRITINGS</NavLink></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navi;
