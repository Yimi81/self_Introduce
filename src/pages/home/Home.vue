<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2020-11-25 17:03:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-26 15:14:27
-->
<template>
  <div>
    <ul id="menu">
      <li data-menuanchor="page1" class="active">
        <a href="#page1">Home</a>
      </li>
      <li data-menuanchor="page2"><a href="#page2">Works</a></li>
      <li data-menuanchor="page3"><a href="#page3">Evaluate</a></li>
      <li data-menuanchor="page4"><a href="#page4">About</a></li>
    </ul>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <!--欢迎页-->
      <div class="section" id="section0">
        <div class="title">
          <transition
            enter-active-class="animate__fadeInUp"
            :duration="{ enter: 800 }"
          >
            <p v-if="flag0" class="animate__animated">Hello,I'm Mark Yi</p>
          </transition>

          <transition>
            <p v-if="flag0" class="sub-title">Software Engineer</p>
          </transition>
          <transition
            enter-active-class="animate__bounceIn"
            :duration="{ enter: 800 }"
          >
            <div v-if="flag0" class="animate__animated technologies">
              <img
                v-for="url in techUrls"
                :src="url"
                :key="url"
                style="width: 30px; height: 30px"
              />
            </div>
          </transition>
        </div>
      </div>
      <!--个人作品-->
      <div class="section" id="section1">
        <div class="slide" id="slide1">
          <transition enter-active-class="animate__fadeInLeft">
            <div v-show="flag1_0" class="work-info animate__animated">
              <p class="work-item">作品一</p>
              <p class="intro-line"></p>
              <h1 class="anim-wrapper">
                <span>毕业设计</span>
              </h1>
              <p class="work-detail">
                一款混合开发模式下的校园社交app,旨在聚合校园各公众号，以及加强各学院师生的交流。
              </p>
            </div>
          </transition>
          <transition enter-active-class="animate__fadeInRight">
            <div v-show="flag1_0" class="work-video animate__animated">
              <video
                width="560"
                height="315"
                loop
                muted
                controls="controls"
                data-autoplay
              >
                <source
                  src="http://119.23.62.18/Download/FinalDesign.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </transition>
        </div>

        <div class="slide" id="slide2">
          <transition enter-active-class="animate__fadeInLeft">
            <div v-show="flag1_1" class="work-info animate__animated">
              <p class="work-item">作品二</p>
              <p class="intro-line"></p>
              <h1 class="anim-wrapper">
                <span>PC端项目</span>
              </h1>
              <p class="work-detail">
                工作中参与的网站开发，包括多个前台与后台网站(不方便展示)，基于.Net开发平台,前端技术选型有涉及有vue
                + element-ui，jquery+原生样式。
              </p>
            </div>
          </transition>

          <transition enter-active-class="animate__fadeInRight">
            <div v-show="flag1_1" class="work-imgs animate__animated">
              <div class="block">
                <el-carousel trigger="click">
                  <el-carousel-item v-for="item in frontWork" :key="item.url">
                    <el-row style="margin-bottom: 10px; width: 100%">
                      <el-col :span="9" style="color: white"
                        >点击轮播图查看我负责的详情
                      </el-col>
                      <el-col :span="14" :offset="1">
                        <a :href="item.url" target="_blank">
                          官网链接: {{ item.url }}
                        </a>
                      </el-col>
                    </el-row>
                    <el-image
                      :src="item.img"
                      :fit="item.fit"
                      @click="showDetail"
                    >
                      <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                      </div>
                    </el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </transition>
        </div>

        <div class="slide" id="slide3">
          <transition enter-active-class="animate__fadeInLeft">
            <div v-show="flag1_2" class="work-info moveT animate__animated">
              <p class="work-item">作品三</p>
              <p class="intro-line"></p>
              <h1 class="anim-wrapper">
                <span>移动端项目</span>
              </h1>
              <p class="work-detail">
                该项目基于Google的跨平台移动应用框架Flutter开发的一款扫码枪，由我独立负责客户端功能，主要用来负责仓库入库出库。难点如下:
              </p>
              <ul style="color:white">
                <li>1、flutter端与原生端交互，以使用扫码枪上的扫码功能。</li>
                <li>2、本地数据库的引入与使用，加深了项目逻辑复杂程度。</li>
                <li>3、跨组件的状态管理、上拉加载与下拉刷新等等</li>
                <li>
                  (注: 下面的项目是学习flutter完成的项目，包括一些动画等效果)
                </li>
              </ul>
            </div>
          </transition>
          <transition enter-active-class="animate__fadeInRight">
            <div v-show="flag1_2" class="work-video moveT animate__animated">
              <el-row>
                <video
                  width="530"
                  height="285"
                  loop
                  muted
                  controls="controls"
                  data-autoplay
                >
                  <source
                    src="http://119.23.62.18/Download/rgc.webm"
                    type="video/webm"
                  />
                </video>
              </el-row>
              <el-row style="margin-top: 15px">
                <el-col :span="10">
                  <video
                    width="300"
                    height="185"
                    loop
                    muted
                    data-autoplay
                    controls="controls"
                  >
                    <source
                      src="http://119.23.62.18/Download/pick.mp4"
                      type="video/mp4"
                    />
                  </video>
                </el-col>
                <el-col :span="10" :offset="2">
                  <video
                    width="300"
                    height="185"
                    loop
                    muted
                    controls="controls"
                  >
                    <source
                      src="http://119.23.62.18/Download/flutternote.webm"
                      type="video/webm"
                    />
                  </video>
                </el-col>
              </el-row>
            </div>
          </transition>
        </div>
      </div>

      <!--个人评价-->
      <div class="section" id="section2">
        <div class="container" :style="{'padding-top': padTop}">
          <!--调用组件简化代码-->
          <transition enter-active-class="animate__animated animate__fadeIn">
            <evaluate v-if="flag2"> </evaluate>
          </transition>
        </div>
      </div>

      <!--个人履历-->
      <div class="section" id="section3">
        <div class="container">
          <!--调用组件简化代码-->
          <transition enter-active-class="animate__animated animate__fadeIn">
            <resume v-if="flag3" :resumeDetail="resumeDeatil"> </resume>
          </transition>
        </div>
      </div>
    </full-page>
    <el-dialog
      title="我的主要贡献"
      :visible.sync="dialogVisible"
      width="40%"
      center
    >
      <div class="content">
        <h3 style="margin-bottom: 10px">模块一</h3>
        <el-row style="padding: 0 10px">
          <el-col :span="19">
            <ul>
              <li>1,我完成了什么...，难点在于....</li>
              <li>2,我完成了什么...，难点在于....</li>
              <li>3,我完成了什么...，难点在于....</li>
            </ul>
          </el-col>
          <el-col :span="4" :offset="1" class="show-img">
            <el-tooltip
              class="item"
              effect="light"
              content="查看详情"
              placement="top"
            >
              <i
                v-if="drawer == false"
                class="el-icon-right animate__animated animate__heartBeat animate__infinite infinite"
                @click="drawer = true"
              ></i>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
          <el-col :span="3" class="little-title"> 完成评分: </el-col>
          <el-col :span="20" :offset="1">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
    </el-dialog>
    <el-drawer title="待开发" :visible.sync="drawer" :direction="direction">
    </el-drawer>

    <el-button type="primary" icon="el-icon-edit" circle></el-button>
  </div>
</template>

<script>
import "fullpage.js/dist/fullpage.css";
import Resume from "./components/Resume.vue";
import Evaluate from "./components/Evaluate.vue";

export default {
  name: "",
  data() {
    return {
      value: 4.0,
      //fullpage配置
      options: {
        menu: "#menu",
        anchors: ["page1", "page2", "page3", "page4"],
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        afterRender: this.afterRender,
        onSlideLeave: this.onSlideLeave,
      },
      flag0: false,
      flag1_0: false,
      flag1_1: false,
      flag1_2: false,
      flag2: false,
      flag3: false,
      techUrls: [
        require("../../assets/images/tech-1.png"),
        require("../../assets/images/tech-2.png"),
        require("../../assets/images/tech-3.png"),
        require("../../assets/images/tech-4.png"),
        require("../../assets/images/tech-5.png"),
        require("../../assets/images/tech-9.png"),
        require("../../assets/images/tech-7.png"),
        require("../../assets/images/tech-8.png"),
        require("../../assets/images/tech-10.png"),
        require("../../assets/images/tech-6.png"),
      ],
      frontWork: [
        {
          img: require("../../assets/images/works/rgc.png"),
          url: "http://royalgourmetcorp.com/",
          fit: "cover",
        },
        {
          img: require("../../assets/images/works/huige.png"),
          url: "https://huigeoutdoor.com",
          fit: "cover",
        },
        {
          img: require("../../assets/images/works/cf.png"),
          url: "http://www.creolefeast.com",
          fit: "cover",
        },
      ],
      //个人履历
      resumeDeatil: [
        {
          key: 0,
          experiences: {
            time: "2020 - 现在",
            title: "全职前端工程师",
            detail:
              "任职于宁波辉格休闲有限公司，担任前端工程师主要负责完成设计所给的设计图完善网站，独立完成了移动端扫码枪的开发",
          },
          education: {
            time: "2019 - 2020",
            title: "大四",
            detail:
              "完成毕设",
          },
        },
        {
          key: 1,
          // experiences: {
          //   time: "",
          //   title: "",
          //   detail:
          //     "",
          // },
          education: {
            time: "2018 - 2019",
            title: "大三",
            detail:
              "",
          },
        },
        {
          key: 2,
          // experiences: {
          //   time: "",
          //   title: "",
          //   detail:
          //     "",
          // },
          education: {
            time: "2017 - 2018",
            title: "大一、大二",
            detail:
              "",
          },
        },
      ],
      dialogVisible: false,
      direction: "rtl",
      drawer: false,
      padTop: ''
    };
  },
  components: {
    resume: Resume,
    evaluate: Evaluate,
  },
  created() {},
  mounted() {
    //监听屏幕分辨率改变
    window.onresize = () => {};
  },
  methods: {
    afterRender() {
      this.flag0 = true;
    },
    onLeave(origin, destination) {
      if (origin.index != 1) {
        let originIndex = `flag${origin.index}`;
        this[originIndex] = false;
      } else {
        let originIndex = `flag${origin.index}_0`;
        this[originIndex] = false;
      }

      if (destination.index != 1) {
        let destinationIndex = `flag${destination.index}`;
        this[destinationIndex] = true;
      } else {
        let destinationIndex = `flag${destination.index}_0`;
        this[destinationIndex] = true;
      }

      if(origin.index == 3 && destination.index == 2)
      {
        this.padTop = '8rem';
      }
      else
      {
          this.padTop = '';
      }
      console.log(`origin.index:${origin.index}destination.index:${destination.index}`)
      console.log(`this.container:${JSON.stringify(this.container)}`)
    },
    onSlideLeave(section, origin, destination) {
      if (section.index == 1) {
        let originIndex = `flag1_${origin.index}`;
        this[originIndex] = false;
        let destinationIndex = `flag1_${destination.index}`;
        this[destinationIndex] = true;
      }
    },
    showDetail() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.section {
  background-size: cover;
  text-align: center;
}
.slide {
  background-size: cover;
}
#section0 {
  background-image: url("~@/assets/images/1.jpg");
  position: relative;
  z-index: 0;
}
#section0:before {
  content: "";
  background: rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 0;
  min-height: 100%;
  left: 0;
  right: 0;
  z-index: -1;
}
#section0 .technologies {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
}
#section0 .technologies img {
  box-sizing: initial;
  background-color: #fff;
  border-style: none;
}
/* #section1 {
  background-image: url("~@/assets/images/parallax-2.jpg");
} */
#section2 {
  background-image: url("~@/assets/images/3.jpg");
  position: relative;
  z-index: 0;
  padding: 5rem 0;
}
#section2:before {
  content: "";
  background: rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 0;
  min-height: 100%;
  left: 0;
  right: 0;
  z-index: -1;
}

.title {
  font-family: "Source Sans Pro", sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: 56px;
  line-height: 65px;
  color: #fff;
}
.title p {
  margin-bottom: 10px;
}
.sub-title {
  font-size: 24px;
  font-weight: 400;
  color: #fff;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.8s;
}
.v-enter, .v-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(80px);
}
/*Adding background for the slides
* --------------------------------------- */
#section1 .fp-slide {
  text-align: left;
  position: relative;
}
#slide1 {
  background-image: url("~@/assets/images/section2-1.jpg");
  position: relative;
  z-index: 0;
}
#slide1:before {
  content: "";
  background: rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 0;
  min-height: 100%;
  left: 0;
  right: 0;
  z-index: -1;
}
.work-info {
  margin: 0 auto;
  display: inline-block;
  width: auto;
  padding: 0 0 0 10%;
  position: absolute;
  top: 32%;
  width: 30%;
}
.work-video {
  position: absolute;
  top: 32%;
  padding-right: 10%;
  right: 0;
}
.moveT {
  top: 20%;
}
.video-style {
  width: 300px;
  height: 300px;
}
.work-item {
  color: #fff;
  font-weight: 900;
  letter-spacing: 10px;
}
p {
  padding: 0;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5em;
}
p.intro-line {
  border-bottom: 4px;
  width: 177px;
  height: 4px;
  background: #fff;
  margin-bottom: 40px;
}
.work-detail {
  text-indent: 2em;
  word-break: break-all;
}
.anim-wrapper {
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 900;
  font-size: 3em;
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 0;
}
#slide2 {
  background-image: url("~@/assets/images/section2-2.jpeg");
  position: relative;
  z-index: 0;
}

#slide2:before {
  content: "";
  background: rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 0;
  min-height: 100%;
  left: 0;
  right: 0;
  z-index: -1;
}
#slide2 .work-imgs {
  position: absolute;
  top: 32%;
  padding-right: 10%;
  right: 0;
}
#slide2 .block {
  width: 560px;
  height: 315px;
}
#slide2 a {
  text-decoration: none;
  color: white;
  float: right;
}
#slide2 a:hover {
  text-decoration: none;
  color: #f56c6c;
  float: right;
}
#slide3 {
  background-image: url("~@/assets/images/section3.jpg");
  position: relative;
  z-index: 0;
}

#slide3:before {
  content: "";
  background: rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 0;
  min-height: 100%;
  left: 0;
  right: 0;
  z-index: -1;
}
#menu {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  font-size: 1.1em;
}
#menu li {
  display: inline-block;
  margin: 10px 0;
  position: relative;
}
#menu a {
  color: #fff;
  padding: 0 1.1em 1.1em 1.1em;
  text-decoration: none;
}
#menu li.active a:after {
  content: "";
  margin: 0 1.1em 0 1.1em;
  height: 2px;
  background: #fff;
  display: block;
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  display: block;
}
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
/* @media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
} */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;

}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}
.animate__animated.animate__fadeIn {
  --animate-duration: 4s;
}

#section3 {
  background-image: url("~@/assets/images/2.jpg");
  position: relative;
  z-index: 0;
  padding: 5rem 0;
}
#section3:before {
  content: "";
  background: rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 0;
  min-height: 100%;
  left: 0;
  right: 0;
  z-index: -1;
}

.el-image {
  cursor: pointer;
}
.little-title {
  font-weight: bold;
}
.show-img {
  color: #409eff;
  font-size: 40px;
  cursor: pointer;
}
.item {
  margin: 4px;
}

</style>
