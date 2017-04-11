// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navi extends Component {
  componentWillMount() {

  }

  componentDidMount() {

  }

  // ...

  render() {
    return (
      <div className="navigation">
        <Link className="myLink" to="/"><img src="/Image/logo-white.png"></img></Link>
        <nav>
          <div className="nav_item"><Link className="myLink" to="/about">ABOUT</Link></div>
          <div className="nav_item"><Link className="myLink" to="/portfolio">PORTFOLIO</Link></div>
          <div className="nav_item"><Link className="myLink" to="/writings">WRITINGS</Link></div>
          <div className="nav_item"><Link className="myLink" to="/posts">POSTS</Link></div>
        </nav>
      </div>
    );
  }
}

export default Navi;
