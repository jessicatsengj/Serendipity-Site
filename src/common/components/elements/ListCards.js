// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class ListCards extends Component {
  render() {
    let liCardImage = this.props.liCardImage;
    let liCardHeader = this.props.liCardHeader;
    let liCardType = this.props.liCardType;
    let liCardDescription = this.props.liCardDescription;

    return(
      <div className="content_block black_bg">
        <div className="ts divided items">
          <div className="item">
              <div className="image">
                  <img className="project_img" src={liCardImage}></img>
              </div>
              <div className="content">
                  <div className="header white">{liCardHeader}</div>
                  <div className="meta">
                      <span className="type">{liCardType}</span>
                  </div>
                  <div className="description white">
                      {liCardDescription}
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCards;
