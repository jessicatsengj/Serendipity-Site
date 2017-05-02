import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import Navi from './Navi';
import PageLayout from './PageLayout';
import Button from 'react-tocas/lib/Button';
import Projects from './Projects';
import TextCards from './elements/TextCards';

class HomePage extends Component {
  render() {
    return (
      <PageLayout>
        <div className="row">
          <div className="one wide column" />
          <div className="three wide column white">
            <div className="home_bg">
              <div className="home_content">
                <h1 className="home_title">無題空間</h1>
                <p className="home_title_intro">孤峰縹緲倚天痕，<br />山光水影迥無塵；<br />梅雪凌寒飄花落，<br />林隱翠微岫雲深。
                <br /> <br /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ---------〈孤山詩〉
              </p>
              </div>
              <div className="ts fluid image">
                <img className="home_image" src="/Image/serendipity.jpg" />
              </div>
            </div>
          </div>
          <div className="twelve wide column">
            <div className="home_intro">
              <p className="home_title_intro side">Serendipity，意指在旅程中意外的發現，命運裡偶然的機遇。
              <br />
              此詞由英國作家華爾波所創，源自於十四世紀的波斯神話「錫蘭三王子」。
              <br />
              故事描述三位波斯王子來到錫蘭經商做買賣，途中發現各種新奇有趣的事物，並靠著意外與智慧經歷各種磨練，最後返回家鄉，創了Serendipity一詞，以紀念在旅程中種種意外而驚喜的機運。
            </p>
            </div>
          </div>
        </div>
        <div className="row space">
          <div className="one wide column" />
          <div className="fourteen wide column">
            <div className="ts four cards">
                <TextCards cardLink="/novels/wolf"
                cardHeader="Topic"
                cardDescription="BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL"
                />
                <TextCards cardLink="/novels/wolf"
                cardHeader="Topic"
                cardDescription="BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL"
                />
                <TextCards cardLink="/novels/wolf"
                cardHeader="Topic"
                cardDescription="BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL"
                />
                <TextCards cardLink="/novels/wolf"
                cardHeader="Topic"
                cardDescription="BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL"
                />
            </div>
          </div>
          <div className="one wide column" />
        </div>
        <div className="row small_space">
          <div className="one wide column" />
          <div className="fourteen wide column">
            <div className="ts four cards">
                <TextCards cardLink="/novels/wolf"
                cardHeader="Topic"
                cardDescription="BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL"
                />
                <TextCards cardLink="/novels/wolf"
                cardHeader="Topic"
                cardDescription="BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL"
                />
                <TextCards cardLink="/novels/wolf"
                cardHeader="Topic"
                cardDescription="BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL"
                />
                <TextCards cardLink="/novels/wolf"
                cardHeader="Topic"
                cardDescription="BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL BLABLA BALBLA BLABL"
                />
            </div>
          </div>
          <div className="one wide column" />
        </div>

        <div className="row snow_video black_block white space">
          <div className="one wide column" />
          <div className="nine wide column">
            <video autoPlay loop>
              <source src="/Image/cover_video.mp4" />
            </video>
          </div>
          <div className="five wide column white">
            <h1>江雪</h1>
            <p className="home_title_intro">
              兩年前，党項部落猖狂為亂，引發朝廷憂慮，故命大理司直六人分別駐守鹽、夏、靈、涇、邠、勝六大重鎮。那年初冬破曉，我無意間闖入此地，發現好一片澄淨之湖，隨著周圍光線照耀變化，湖面顏色隨之變換舞動，既幻而玄，且實且虛，置身其間，猶若夢中。聽當地居民傳言，這湖底深處，存在著一座藍寶石砌成的龍宮，龍宮裡有顆夜明珠，將整座湖底照耀如同白晝。夜晚時，夜明珠與月光相輝映，從水底深處透出寶石般的湛藍。太陽升起時，明珠火鏡兩相照，各色流光蜿蜒纏繞，彷彿遊於太虛之中。以至日間，明珠光澤愈漸減弱，湖面才恢復原本的碧綠。凡觀此景者，皆覺恍入仙境而忘卻塵俗，故名此湖為忘塵湖...... &nbsp;&nbsp;&nbsp;<Link to="/novels/lastnight">Read more...</Link>
            </p>
          </div>
          <div className="one wide column" />
        </div>
        <div className="row rect">
          <div className="one wide column" />
          <div className="two wide column">
            <div className="designer_pic">
              <img className="designer_pic_here" src="/Image/my_pic.png" />
            </div>
          </div>
          <div className="twelve wide column">
            <div className="ts big chatroom">
              <div className="content">
                <div className="left message">
                  <div className="content">
                    <div className="text">
                        無題空間網站，是個人作品集的匯聚。作品類型包含圖像、動畫、小說創作、數位內容專案等等，連同網站本身的設計與架設。
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <p>OMG OMG OMG OMG OMG OMG OMG OMG</p> */}
          </div>
          {/* <div className="fourteen wide column">
            <div className="ts chatroom">
              <div className="content">
                  <div className="left message">
                      <div className="avatar">
                          <img className="designer_pic_here" src="/Image/my_pic.png" />
                      </div>
                      <div className="content">
                          <div className="text">
                              早安！
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div> */}
          <div className="one wide column" />
        </div>

        {/* <div className="row black_block white pic_intro">
          <div className="one wide column" />
          <div className="fourteen wide column">
            <p>OMG OMG OMG OMG OMG OMG OMG OMG</p>
          </div>
          <div className="one wide column" />
        </div> */}
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
