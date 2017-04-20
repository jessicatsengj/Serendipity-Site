import React, { Component } from 'react';
// import Navi from './Navi';
import PageLayout from './PageLayout';
import Button from 'react-tocas/lib/Button';
import Projects from './Projects';

class HomePage extends Component {
  render() {
    return (
      <PageLayout>
        <div className="row">
          <div className="one wide column" />
          <div className="five wide column">
            <div className="space">
              HAHAHA
            </div>
          </div>
          <div className="four wide column">
            <div className="space">
              HAHA
            </div>
          </div>
          <div className="five wide column">
            <div className="space">
              <Projects />
            </div>
          </div>
          <div className="one wide column" />
        </div>
        {/* <div>
          <Button info onClick={() => alert('World')}>
            Hello
          </Button>
        </div> */}
      </PageLayout>
    );
  }
}

export default HomePage;
