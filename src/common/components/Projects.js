// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class Projects extends Component {
  render() {
    return (
      <div className="content_block green_bg">
        <div className="title dark_green">PROJECTS</div>
        <div className="ts divided items">
          <div className="item dark_green">
              <div className="image">
                  <img className="project_img" src="https://tocas-ui.com/assets/img/15d7510.png"></img>
              </div>
              <div className="content">
                  <div className="header">WellGO App</div>
                  <div className="meta">
                      <span className="type">App</span>
                  </div>
                  <div className="description">
                      Solving problems for a specific group, making their world a better place.
                  </div>
              </div>
          </div>
          <div className="item dark_green">
              <div className="image">
                  <img className="project_img" src="https://tocas-ui.com/assets/img/15d7510.png"></img>
              </div>
              <div className="content">
                  <div className="header">Graduation Project</div>
                  <div className="meta">
                      <span className="type">Interaction</span>
                  </div>
                  <div className="description">
                      To experience a room escape game with digital art and technology.
                  </div>
              </div>
          </div>
          <div className="item dark_green">
              <div className="image">
                  <img className="project_img" src="https://tocas-ui.com/assets/img/15d7510.png"></img>
              </div>
              <div className="content">
                  <div className="header">Graduation Project</div>
                  <div className="meta">
                      <span className="type">Interaction</span>
                  </div>
                  <div className="description">
                      To experience a room escape game with digital art and technology.
                  </div>
              </div>
          </div>
          <div className="item dark_green">
              <div className="image">
                  <img className="project_img" src="https://tocas-ui.com/assets/img/15d7510.png"></img>
              </div>
              <div className="content">
                  <div className="header">Graduation Project</div>
                  <div className="meta">
                      <span className="type">Interaction</span>
                  </div>
                  <div className="description">
                      To experience a room escape game with digital art and technology.
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
