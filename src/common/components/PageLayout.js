import React, { Component } from 'react';
import Navi from './Navi';
import Footer from './Footer';

class PageLayout extends Component {
  render() {
    let { children } = this.props;

    return (
      <div className="ts grid">
        <Navi />
          {children}
        {/* <div className="row"> */}
          <Footer />
        {/* </div> */}
      </div>
    );
  }
}

export default PageLayout;
