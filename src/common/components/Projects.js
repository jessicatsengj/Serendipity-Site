// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import ListCards from './elements/ListCards';


class Projects extends Component {
  render() {
    return (

      <div className="ts grid space">
        <div className="row">
          <div className="one wide column" />
          <div className="seven wide column">
            <ListCards liCardImage = "https://tocas-ui.com/assets/img/15d7510.png" liCardHeader = "WellGO App" liCardType = "App" liCardDescription = "Solving problems for a specific group, making their world a better place."/>
          </div>
          <div className="seven wide column">
            <ListCards liCardImage = "https://tocas-ui.com/assets/img/15d7510.png" liCardHeader = "Graduation Project" liCardType = "Interaction" liCardDescription = "To experience a room escape game with digital art and technology."/>
          </div>
          <div className="one wide column" />
        </div>
      </div>
    );
  }
}

export default Projects;
