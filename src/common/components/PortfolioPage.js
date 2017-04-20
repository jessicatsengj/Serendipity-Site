import React, { Component } from 'react';
import PageLayout from './PageLayout';
import PortNavi from './PortNavi';

class PortfolioPage extends Component {
  render() {
    return (
      <PageLayout>
        <div className="row">
          <div className="sixteen wide column">
            <div className="space">
              <PortNavi />
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default PortfolioPage;
