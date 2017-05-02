// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class MyCards extends Component {
  render() {
    let cardLink = this.props.cardLink;
    let cardImage = this.props.cardImage;
    let cardHeader = this.props.cardHeader;
    let cardDescription = this.props.cardDescription;

    return(
      <div className="ts card link">
           <div className="image">
             <Link className="myCardsLink" to={cardLink}>
                <img className="novel_image" src={cardImage} />
             </Link>
           </div>
           <Link className="myCardsLink words" to={cardLink}>
             <div className="content">
                 <div className="header"><h4>{cardHeader}</h4></div>
                 <div className="description">
                     <p>{cardDescription}</p>
                 </div>
             </div>
           </Link>
     </div>

    );
  }
}

export default MyCards;
