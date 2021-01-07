<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2020-11-25 17:03:54
 * @LastEditors: Yimi81
 * @LastEditTime: 2021-01-07 16:40:37
-->
<template>
  <div>
    <ul id="menu">
      <li data-menuanchor="page1" class="active">
        <a href="#page1">Home</a>
      </li>
      <li data-menuanchor="page2"><a href="#page2">Works</a></li>
      <li data-menuanchor="page3"><a href="#page3">About</a></li>
    </ul>
    <full-page ref="fullpage" :options="options" id="fullpage">
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
              <img v-for="url in techUrls" :src="url" :key="url" />
            </div>
          </transition>
        </div>
      </div>
      <div class="section" id="section1">
        <div class="slide" id="slide1">
          <h1>Lazy load image</h1>
          <img data-src="../../assets/logo.png" alt="iphone" />
        </div>

        <div class="slide" id="slide2">
          <h1>Lazy load video</h1>
          <video loop muted controls="false" data-autoplay>
            <source
              data-src="http://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            <source
              data-src="http://www.w3schools.com/html/mov_bbb.ogg"
              type="video/ogg"
            />
          </video>
        </div>
      </div>

      <div class="section" id="section2">
        <div class="container">
          <!--调用组件简化代码-->
          <transition  enter-active-class="animate__animated animate__fadeIn" >
            <resume v-if="flag2" :resumeDetail="resumeDeatil"> </resume>
          </transition>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import "fullpage.js/dist/fullpage.css";
import Resume from "./components/Resume.vue";
export default {
  name: "",
  data() {
    return {
      //fullpage配置
      options: {
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        afterRender: this.afterRender,
        onSlideLeave: this.onSlideLeave,
      },
      flag0: false,
      flag1: false,
      flag2: false,
      techUrls: [
        require("../../assets/images/tech-1.png"),
        require("../../assets/images/tech-2.png"),
        require("../../assets/images/tech-3.png"),
        require("../../assets/images/tech-4.png"),
        require("../../assets/images/tech-5.png"),
        require("../../assets/images/tech-9.png"),
        require("../../assets/images/tech-7.png"),
        require("../../assets/images/tech-8.png"),
        require("../../assets/images/tech-6.png"),
      ],
      //个人履历
      resumeDeatil: [
        {
          key: 0,
          experiences: {
            time: "2020 - now",
            title: "Fulltime FrontEngineer",
            detail:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
          education: {
            time: "2020 - now",
            title: "Bachelor of CS,NIT",
            detail:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
        },
        {
          key: 1,
          experiences: {
            time: "2018 - 2020",
            title: "Web Designer at HuaWei",
            detail:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
          education: {
            time: "2018 - 2020",
            title: "Bachelor of CS,NIT",
            detail:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
        },
        {
          key: 2,
          experiences: {
            time: "2018 - 2020",
            title: "Web Designer at HuaWei",
            detail:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
          education: {
            time: "2018 - 2020",
            title: "Bachelor of CS,NIT",
            detail:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
        },
      ],
      // styleObject:{
      //    backgroundImage:`url(${require('../../assets/images/parallax-2.jpg')})`,
      // }
    };
  },
  components: {
    resume: Resume,
  },
  created() {},
  mounted() {
        //监听屏幕分辨率改变
       window.onresize = () => {
         
      };
  },
  methods: {
    afterRender() {
      this.flag0 = true;
    },
    onLeave(origin, destination) {
      let originIndex = `flag${origin.index}`;
      this[originIndex] = false;

      let destinationIndex = `flag${destination.index}`;
      this[destinationIndex] = true;
    },
    // onSlideLeave(section, origin, destination) {
    //   if (section.index == 1 && destination.index == 0) {
    //     let url = `url(${require('../../assets/images/parallax-2.jpg')})`;
    //     this.styleObject.backgroundImage = url;
    //   }
    //   if (section.index == 1 && destination.index == 1) {
    //     let url = `url(${require('../../assets/images/parallax-3.jpg')})`;
    //     this.styleObject.backgroundImage = url;
    //   }
    // },
    // afterLoad() {
    //   this.flag = true;
    // },
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
  background-image: url("~@/assets/images/2.jpg");
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
#slide1 {
  background-image: url("~@/assets/images/section2-1.jpg");
}
#slide2 {
  background-image: url("~@/assets/images/section2-2.jpeg");
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
</style>
