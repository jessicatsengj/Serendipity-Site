// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class TextCards extends Component {
  render() {
    let cardLink = this.props.cardLink;
    let cardHeader = this.props.cardHeader;
    let cardDescription = this.props.cardDescription;

    return(

     <div className="ts card link textCard">
      <Link className="myCardsLink" to={cardLink}>
        <div className="secondary extra content">
            <div className="header"><h3>{cardHeader}</h3></div>
        </div>
        <div className="content">
            <div className="description">
                {cardDescription}
            </div>
        </div>
      </Link>
    </div>
    );
  }
}

export default TextCards;
