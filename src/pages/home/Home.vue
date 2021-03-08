<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2020-11-25 17:03:54
 * @LastEditors: Yimi81
 * @LastEditTime: 2021-03-08 22:07:22
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
            <p v-if="flag0" class="animate__animated">Hello,I'm GuoFeng Yi</p>
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
                一款混合开发模式下的校园社交app,旨在聚合校园各公众号，以及加强各学院师生的交流。完成主要功能有:
              </p>
              <ul style="color: white">
                <li>1、类似微博的交流平台以及校园类App应有的课程表功能</li>
                <li>2、接入个推，用来完成校园重要信息的推送。</li>
                <li>3、短信验证码的接入，用来找回密码、修改密码功能。</li>
              </ul>
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
                  src="http://119.23.62.18/Download/finalDesign.mp4"
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
                      @click="showDetail(item.id)"
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
              <ul style="color: white">
                <li>1、flutter端与原生端交互，以使用扫码枪上的扫码功能。</li>
                <li>2、本地数据库的引入与使用，加深了项目逻辑复杂程度。</li>
                <li>3、跨组件的状态管理、上拉加载与下拉刷新等等</li>
                <li>
                  (注:
                  下面的项目是学习flutter个人完成的项目，以及跟随视频手打的项目,包括一些动画、购物车等效果)
                </li>
              </ul>
            </div>
          </transition>
          <transition enter-active-class="animate__fadeInRight">
            <div v-show="flag1_2" class="work-video moveT animate__animated">
              <el-row style="margin-top: 15px">
                <el-col :span="10">
                  <video
                    width="300"
                    height="185"
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
                </el-col>
                <el-col :span="10" :offset="2">
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
                      src="http://119.23.62.18/Download/flutternote.webm"
                      type="video/webm"
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
                      src="http://119.23.62.18/Download/studyE.webm"
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
        <div class="container" :style="{ 'padding-top': padTop }">
          <!--调用组件简化代码-->
          <transition enter-active-class="animate__animated animate__fadeIn">
            <Evaluate v-if="flag2"> </Evaluate>
          </transition>
        </div>
      </div>

      <!--个人履历-->
      <div class="section" id="section3">
        <div class="container">
          <!--调用组件简化代码-->
          <transition enter-active-class="animate__animated animate__fadeIn">
            <Resume v-if="flag3" :resumeDetail="resumeDeatil"> </Resume>
          </transition>
        </div>
      </div>
    </full-page>

    <!--工作详情-->
    <DetailDialog
      class="scrollable-content"
      :dialogVisible.sync="dialogVisible"
      :workId="workId"
    >
    </DetailDialog>

    <el-drawer title="待开发" :visible.sync="drawer" :direction="direction">
    </el-drawer>

    <!--简历及相关证明-->

    <el-tooltip content="简历及相关证明" placement="top" effect="light">
        <el-image
          class="animate__animated animate__heartBeat animate__delay-3s animate__repeat-3 resume"
          :src="resumeUrl"
          :preview-src-list="srcList"
        >
        </el-image>
    </el-tooltip>
  </div>
</template>

<script>
import "fullpage.js/dist/fullpage.css";
import Resume from "./components/Resume.vue";
import Evaluate from "./components/Evaluate.vue";
import DetailDialog from "./components/Dialog.vue";

export default {
  name: "",
  data() {
    return {
      //fullpage配置
      options: {
        menu: "#menu",
        anchors: ["page1", "page2", "page3", "page4"],
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        afterRender: this.afterRender,
        onSlideLeave: this.onSlideLeave,
        normalScrollElements: ".scrollable-content",
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
          id: 1,
          img: require("../../assets/images/works/rgc.png"),
          url: "http://royalgourmetcorp.com/",
          fit: "cover",
        },
        {
          id: 2,
          img: require("../../assets/images/works/huige.png"),
          url: "https://huigeoutdoor.com",
          fit: "cover",
        },
        {
          id: 3,
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
              "任职于宁波辉格休闲有限公司，担任前端工程师主要负责完成设计所给的设计图完善网站 ; 后台管理系统延伸出需要开发一个扫码枪功能，领导选择flutter技术栈，要求我学习及完成扫码枪的开发，自己在深入研究与学习后独立完成了移动端扫码枪客户端的开发，得到领导积极评价。",
          },
          education: {
            time: "2019 - 2020",
            title: "大四",
            detail: [
              `准备毕业设计与复试相关内容,毕设在考虑到学校各学院交流少以及公众号信息无法及时获得的情况,选择一个设计一个跨平台的校园社交App为题,
                    在导师帮助下，自己独立设计样式与完成编码工作，顺利完成毕设。`,
            ],
          },
        },
        {
          key: 1,
          experiences: {
            time: "2017 - 2018",
            title: "兼职生活",
            detail: `本科大一及大二的暑假以及国庆，分别兼职工作过盒马生鲜、Hello单车、服务员和衣服厂运货员，赚取了生活费，
              减轻家庭负担，培养了自己吃苦耐劳品质的同时也深刻认识到知识的重要性，想要获得一份好工作，必须不断学习，提升自己的价值。`,
          },
          education: {
            time: "2018 - 2019",
            title: "大三",
            detail: [
              `大三上学期学习网站开发,分别是JSP与.NET,除了老师教的Jquery,自己通过钻研了解当时三大框架已经非常流行了
              ,于是自学了Vue,vue的双向绑定机制、组件化开发、脚手架,npm的包管理,webpack的模块打包、热更新大大提升了开发效率,
              应用到我的课设后,得到了老师的积极评价,分别取得了92与97分的优异成绩.`,
              `大三下学期投入到研究生考试的复习中`,
            ],
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
            detail: [
              `大一期间以学习通识课为主,专业相关课程仅有C语言课程,下学期参加了学校组织的程序设计比赛获得三等奖，学期结束拿到了二等奖学金.`,
              `大二期间开始涉及许多专业知识,同时开始寻找自己感兴趣的方向,自学了Unity3D,跟随课本完成多个游戏demo,C++课程取得了满绩点的优良成绩.加入了实验室，实验室期间在导师的带领下，刷了大量编程题，提升了自己的编程与思考能力,学期结束拿到了三等奖学金.`,
            ],
          },
        },
      ],
      dialogVisible: false,
      direction: "rtl",
      drawer: false,
      padTop: "",
      resumeUrl: require("../../assets/images/resume.png"),
      srcList: [
        "http://119.23.62.18/Download/ygf_resume.jpg",
        "http://119.23.62.18/Download/zm_1.jpg",
        "http://119.23.62.18/Download/zm_2.jpg",
      ],
      workId: 0,
    };
  },
  components: {
    Resume,
    Evaluate,
    DetailDialog,
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

      if (origin.index == 3 && destination.index == 2) {
        this.padTop = "8rem";
      } else {
        this.padTop = "";
      }
    },
    onSlideLeave(section, origin, destination) {
      if (section.index == 1) {
        let originIndex = `flag1_${origin.index}`;
        this[originIndex] = false;
        let destinationIndex = `flag1_${destination.index}`;
        this[destinationIndex] = true;
      }
    },
    showDetail(id) {
      this.dialogVisible = true;
      this.workId = id;
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
.resume {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  width: 50px;
  height: 50px;
  z-index: 99;
}
</style>
