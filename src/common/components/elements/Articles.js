// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

class Articles extends Component {
  render() {
    return (
      // <div className="ts list">
      //   <div className="title white">ARTICLES</div>
      //   <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
      //   <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
      //   <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
      //   <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
      //   <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
      //   <div className="item"><Link className="articleLink" to=" " >My Article Article.........</Link></div>
      // </div>
      <div className="content_block black_bg">
        <div className="title white">ARTICLES</div>
        <div className="ts divided items">
          <div className="item">
              <div className="image">
                  <img className="project_img" src="https://tocas-ui.com/assets/img/15d7510.png"></img>
              </div>
              <div className="content">
                  <div className="header white">WellGO App</div>
                  <div className="description white">
                      Solving problems for a specific group, making their world a better place.
                  </div>
              </div>
          </div>
          <div className="item">
              <div className="image">
                  <img className="project_img" src="https://tocas-ui.com/assets/img/15d7510.png"></img>
              </div>
              <div className="content">
                  <div className="header white">Graduation Project</div>
                  <div className="description white">
                      To experience a room escape game with digital art and technology.
                  </div>
              </div>
          </div>
          <div className="item">
              <div className="image">
                  <img className="project_img" src="https://tocas-ui.com/assets/img/15d7510.png"></img>
              </div>
              <div className="content">
                  <div className="header white">Graduation Project</div>
                  <div className="description white">
                      To experience a room escape game with digital art and technology.
                  </div>
              </div>
          </div>
          <div className="item">
              <div className="image">
                  <img className="project_img" src="https://tocas-ui.com/assets/img/15d7510.png"></img>
              </div>
              <div className="content">
                  <div className="header white">Graduation Project</div>
                  <div className="description white">
                      To experience a room escape game with digital art and technology.
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
