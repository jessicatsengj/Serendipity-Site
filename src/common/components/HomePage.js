import React, { Component } from 'react';
// import Navi from './Navi';
import PageLayout from './PageLayout';
import Articles from './Articles';
import Button from 'react-tocas/lib/Button';
import Novels from './Novels';

class HomePage extends Component {
  render() {
    return (
      <PageLayout>
        <div className="row">
          <div className="one wide column" />
          <div className="three wide column">
            <Articles />
          </div>
          <div className="six wide column">
            <div className="content">
              <Novels />
            </div>
          </div>
          <div className="five wide column">
            <div className="content">
              HomePage
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
