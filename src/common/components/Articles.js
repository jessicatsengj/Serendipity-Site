// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class Articles extends Component {
  render() {
    return (
      <div className="ts list">
        <div className="title white">ARTICLES</div>
        <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
        <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
        <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
        <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
        <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
        <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
      </div>
    );
  }
}

export default Articles;
