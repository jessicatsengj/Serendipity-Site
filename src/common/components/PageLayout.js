import React, { Component } from 'react';
import Navi from './Navi';

class PageLayout extends Component {
  render() {
    let { children } = this.props;

    return (
      <div className="ts grid">
        <Navi />
        <div className="space"></div>
          {children}
        <div className="row">
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default PageLayout;