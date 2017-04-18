// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class Novels extends Component {
  render() {
    return (
      <div className="novel_block">
        <div className="title dark_green">NOVELS</div>
        <div className="ts stackable two cards">
          <div className="ts card">
              <div className="image">
                  <img className="novel_image" src="/Image/last_night.jpg"></img>
              </div>
          </div>
          <div className="ts card">
              <div className="image">
                  <img className="novel_image" src="/Image/wolf.jpg"></img>
              </div>
          </div>
          <div className="ts card">
              <div className="image">
                  <img className="novel_image" src="/Image/erranter.jpg"></img>
              </div>
          </div>
          <div className="ts card">
              <div className="image">
                  <img className="novel_image" src="/Image/snow.jpg"></img>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Novels;
