import React, { Component } from 'react';
import PageLayout from './PageLayout';
import MyCards from './elements/MyCards';

class WritingPage extends Component {
  render() {
    return (
      <PageLayout>
        <div className="row">
          <div className="one wide column" />
          <div className="forteen wide column">
            <div className="space">
              <div className="novel_block">
                <div className="title dark_green">NOVELS</div>
                <div className="ts stackable four cards">
                  <MyCards cardImage = "/Image/last_night.jpg" cardHeader = "昨夜夢落花" cardDescription = "小小朱閣之中，燈光脈脈，琴聲縈繞，纖纖巧手，撥弄琴弦。
                    這彈琴的女子，眉似春山，眼若秋水，鬒髮如雲，傾瀉而下。
                    但見她眉梢輕皺，滿腹心事，向誰傾訴？ 只得藉這古箏與手指，奏出她無盡心酸。"/>
                  <MyCards cardImage = "/Image/wolf.jpg" cardHeader = "犬判別錄" cardDescription = "此廟所在山頭道路險阻，人跡少至，經歷了幾十年光景，更因年久失修，而致廟宇破廢，神像毀壞。
                    山下居民更說此地常有怪風，每當三五之夜，便會看見幽幽的藍火在樹林間飄忽，
                    聽見似人非人的怒吼咆哮之聲在山谷間回盪，因此紛紛傳說此地鬧鬼。"/>
                  <MyCards cardImage = "/Image/erranter.jpg" cardHeader = "浪俠嬌客" cardDescription = "其時天空飛起了細雪，寂然從灰濛濛的天空飄落，白密密的細點在天地間交織起舞，不知是梅是雪。
                    燕玲一席話便如山林佛寺中的梵唄，深深透入契安的心坎裡。自己心中一直以來所壓抑的，
                    何嘗不是如此？"/>
                  <MyCards cardImage = "/Image/snow.jpg" cardHeader = "江雪" cardDescription = "我當下不假思索，閉上眼睛縱身一跳。但覺那湖水沁寒入骨，逐漸掩沒身軀，四周頓時靜了下來，
                    只有自己微弱的心跳聲，愈跳愈慢，直至一片死寂。我緩緩睜開眼睛，
                    忽見一波波流光在周圍迴環，身子輕飄飄地。"/>
                </div>
              </div>
            </div>
          </div>
          <div className="one wide column" />
        </div>
        <div className="row">
          <div className="one wide column" />
          <div className="forteen wide column">
            <div className="space2">
              <div className="novel_block">
                <div className="title dark_green">DAILY POSTS</div>
                <div className="ts stackable four cards">
                  <MyCards cardImage = "/Image/last_night.jpg" cardHeader = "歐洲旅遊" cardDescription = "HAHAHA"/>
                  <MyCards cardImage = "/Image/last_night.jpg" cardHeader = "中國旅遊" cardDescription = "HAHAHA"/>
                  <MyCards cardImage = "/Image/post.jpg" cardHeader = "圖文創作" cardDescription = "HAHAHA"/>
                  <MyCards cardImage = "/Image/others.jpg" cardHeader = "其他文章" cardDescription = "HAHAHA"/>
                </div>
              </div>
            </div>
          </div>
          <div className="one wide column" />
        </div>

      </PageLayout>
    )
  }
}

export default WritingPage;
