// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class MyCards extends Component {
  render() {
    let cardImage = this.props.cardImage;
    let cardHeader = this.props.cardHeader;
    let cardDescription = this.props.cardDescription;

    return(
      <div className="ts card">
           <div className="image">
               <img className="novel_image" src={cardImage} />
           </div>
           <div className="content">
               <div className="header">{cardHeader}</div>
               <div className="description">
                   <p>{cardDescription}</p>
               </div>
           </div>
       </div>
    );
  }
}

export default MyCards;
