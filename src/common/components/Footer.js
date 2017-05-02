// var react = require('react');
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class Footer extends Component {
  render() {

    return(

    //  <div className="ts card link textCard">
    //   <Link className="myCardsLink" to="">
    //     <div className="secondary extra content">
    //         <div className="header"><h3>BLA</h3></div>
    //     </div>
    //     <div className="content">
    //         <div className="description">
    //             BLA
    //         </div>
    //     </div>
    //   </Link>
    // </div>

    // <div className="ts grid">
      <div className="row black_block white footer">
        <div className="two wide column" />
        <div className="four wide column foot_block foot_line">
          <p className="foot_text">jessica834945@yahoo.com.tw</p>
        </div>
        <div className="four wide column foot_block foot_line">
          <div className="foot_text">
            <h2>JESSICA TSENG</h2>
            <h4>Designer</h4>
          </div>
        </div>
        <div className="four wide column foot_block ">

        </div>
        <div className="two wide column" />
      </div>
    /* </div> */



    );
  }
}

export default Footer;
