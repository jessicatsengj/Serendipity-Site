// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class Waterfalls extends Component {
  render() {
    let picImage = this.props.picImage;
    let picHeader = this.props.picHeader;

    return(
      <div className="ts card">
           <div className="image">
               <img src={picImage} />
           </div>
           <div className="content">
               <div className="header">{picHeader}</div>
           </div>
       </div>
    );
  }
}

export default Waterfalls;
