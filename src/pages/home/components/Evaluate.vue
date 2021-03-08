<!--
 * @Descripttion: 个人评价页面
 * @version: 
 * @Author: Yimi81
 * @Date: 2021-01-14 15:35:42
 * @LastEditors: Yimi81
 * @LastEditTime: 2021-03-08 22:24:25
-->
<template>
  <div>
    <div class="head">
      <h3 class="title">我是怎么样的一个人</h3>
      <div class="brief">
        <div class="three-grids-columns">
          <i class="iconfont iconhobby"></i>
          <h4>爱好</h4>
          <p v-for="item in hobby" :key="item" class="textStyle">{{ item }}</p>
        </div>
        <div class="three-grids-columns">
          <i class="iconfont iconnengli"></i>
          <h4>能力</h4>
          <p v-for="item in ability" :key="item" class="textStyle">
            {{ item }}
          </p>
        </div>
        <div class="three-grids-columns">
          <i class="iconfont iconxingge"></i>
          <h4>性格</h4>
          <p v-for="item in character" :key="item" class="textStyle">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      hobby: [
        "大二期间接触了Unity3D游戏引擎,对游戏引擎所涉及的AI与图形渲染分支产生浓厚兴趣,为此自己认真学习C++课程,学期毕业C++课程取得了94分的良好成绩",
        "对深度学习与图形学有浓厚兴趣,人工智能是当前主流趋势，而深度学习是其重要一环；图形学的应用领域广泛(Video Games、Movies、Visualization、VR...),实时给自己反馈,开发出炫酷、美丽的东西很有成就感.目前自己仅仅了解基础概念,未来非常渴望能深入研究.",
      ],
      ability: [
        "语言: html+css+js 、flutter的dart语言 、熟练掌握C++基础知识，工作接触学习了C#基础;",
        "框架/库: PC端: vue 、 element-ui 、 jquery 、 bootstrap ; 移动端: flutter",
        "开发平台: 了解.Net、Node.js基础",
        "工具: git&svn版本控制工具、vscode、visual studio",
        "扎实的专业课基础(本科期间专业课成绩在年级前列),良好的数学与英语能力(考研数学一121分、通过了CET6级)"
      ],
      character: [
        "自己是一个比较宅的人,喜欢音乐、动漫和开发游戏.",
        "优点: 能够快速接受新事物、做事专注认真负责、抗压能力强。本科期间自学了许多感兴趣的知识，在学习或接触自己感兴趣的事物时非常专注，喜欢学习感兴趣的新事物.",
        "缺点：慢热，话少",
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
h3 {
  font-size: 36px;
  line-height: 42px;
  color: #fff;
  font-weight: 600;
}
.brief {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  text-align: center !important;
  padding-top: 1rem !important;
  margin-top: 2rem !important;
}
.three-grids-columns {
  padding: 40px 40px;
  transition: 0.1s ease-out;
  border-radius: 4px;
  /* border: 1px solid #828282; */
  background: rgba(255, 255, 255, 0.1);
}
.three-grids-columns:hover {
  background: #000;
  transition: 0.3s ease-out;
  opacity: 0.8;
}
.three-grids-columns h4 {
  font-size: 20px;
  line-height: 30px;
  padding-top: 25px;
  font-weight: 800;
  color: white;
  margin: 0;

  font-family: "Nunito", sans-serif;
}
.three-grids-columns p {
  padding-top: 15px;
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin: 0;
}
.iconhobby {
  color: #35a22c;
  font-size: 48px;
}
.iconxingge {
  color: #35a22c;
  font-size: 48px;
}
.iconnengli {
  color: #35a22c;
  font-size: 48px;
}
.textStyle {
  text-align: left;
  text-indent: 2em;
  word-break: break-all;
}
</style>
