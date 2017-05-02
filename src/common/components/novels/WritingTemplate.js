import React, { Component } from 'react';
import PageLayout from '../PageLayout';
import MyCards from '../elements/MyCards';

class WritingTemplate extends Component {
  render() {
    let { content, children } = this.props;
    let img_cover = this.props.img_cover;
    let {title} = this.props;

    return (
      <PageLayout>
        <div className="ts grid">
          <div className="row">
            <div className="one wide column" />
            <div className="eleven wide column">
                <div className="novel_block">
                  <div className="ts fluid image">
                     <img className="cover_image" src={img_cover} />
                  </div>
                  <h2>{title}</h2>
                  <div className="novel_content">
                    {children}
                  </div>
                </div>
            </div>
            <div className="three wide column">
              <div className="recommand_novel">
                <div>
                  {content.map(cardContent => (
                    <MyCards key={cardContent.header} cardLink = {cardContent.link} cardImage = {cardContent.image} cardHeader = {cardContent.header} cardDescription = {cardContent.description}/>
                  ))}
                </div>
              </div>
            </div>
            <div className="one wide column" />
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default WritingTemplate;
