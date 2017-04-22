// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Waterfalls from './elements/Waterfalls';


class Drawings extends Component {
  render() {
    return (
      <div className="ts grid">
        {/* <div className="row"> */}
          <div className="one wide column" />
          <div className="fourteen wide column">
            <div className="ts four waterfall cards">
              <Waterfalls picImage = "/Image/bohe_winter.png" picHeader = "Bohemia Winter"/>
              <Waterfalls picImage = "/Image/bohe_summer.png" picHeader = "Bohemia Summer"/>
              <Waterfalls picImage = "/Image/tyger.jpg" picHeader = "Tyger"/>
              <Waterfalls picImage = "/Image/winter_tree.png" picHeader = "Winter Tree"/>
              <Waterfalls picImage = "/Image/poem.png" picHeader = "Poem"/>
              <Waterfalls picImage = "/Image/demeter.png" picHeader = "Demeter"/>
              <Waterfalls picImage = "/Image/lake.jpg" picHeader = "Lake"/>
              <Waterfalls picImage = "/Image/into-bush.gif" picHeader = "Bush"/>
              <Waterfalls picImage = "/Image/solitary.png" picHeader = "Solitary Hill"/>
              <Waterfalls picImage = "/Image/lee_po.gif" picHeader = "李白"/>

            </div>
          </div>
          <div className="one wide column" />
        {/* </div> */}
      </div>
    );
  }
}

export default Drawings;
