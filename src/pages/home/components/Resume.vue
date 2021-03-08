<!--
 * @Descripttion: 个人经历与教育经历组件
 * @version: 
 * @Author: Yimi81
 * @Date: 2021-01-07 15:19:08
 * @LastEditors: Yimi81
 * @LastEditTime: 2021-03-08 21:51:23
-->
<template>
  <div id="resume">
    <div class="left">
      <h3 class="mb-2">工作经历</h3>
      <div v-for="item in resumeDetail" :key="item.key">
        <div v-if="item.experiences" class="experience-top">
          <h5>{{ item.experiences.time }}</h5>
          <el-collapse v-model="activeNames2" accordion>
            <el-collapse-item
              :title="item.experiences.title"
              :name="item.experiences.title"
              class="test"
            >
              <p class="textStyle">{{ item.experiences.detail }}</p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <div class="right">
      <h3 class="mb-2">教育经历</h3>
      <div v-for="item in resumeDetail" :key="item.key">
        <div v-if="item.education" class="experience-top">
          <h5>{{ item.education.time }}</h5>
          <el-collapse v-model="activeNames" accordion>
            <el-collapse-item
              :title="item.education.title + '相关情况'"
              :name="item.education.title"
              class="test"
            >
              <p
                class="textStyle"
                v-for="text in item.education.detail"
                :key="text"
              >
                {{ text }}
              </p>
            </el-collapse-item>
          </el-collapse>
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
      activeNames: ["大一、大二"],
      activeNames2: ["全职前端工程师"],
    };
  },
  props: {
    resumeDetail: {
      type: Array,
      default() {
        return [];
      },
      require: true,
    },
  },
  created() {
    // this.adaptHeight = document.documentElement.clientHeight - 220;
  },
  mounted() {
    // 监听屏幕大小变化，改变table高度
    // var _self = this;
    // window.onresize = function () {
    //   _self.adaptHeight = document.documentElement.clientHeight - 220;
    // };
  },
  methods: {},
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
  text-align: left;
}
#resume {
  overflow: hidden;
  height: 100% !important;
}
#resume h3 {
  font-size: 36px;
  color: #fff;
  font-weight: 700;
  line-height: 42px;
}
#resume h4 {
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 10px;
}
#resume h5 {
  padding: 6px 10px 5px 10px;
  border: 2px solid #35a22c;
  color: #fff;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 16px;
  /* line-height: 24px; */
  font-weight: 700;
}
#resume .mb-2 {
  margin-bottom: 1rem !important;
}

.experience-top {
  border-bottom: solid 1px rgba(250, 250, 250, 0.32);
  margin-bottom: 30px;
  padding-bottom: 10px;
  text-align: left;
}

.experience-top p {
  line-height: 24px;
  font-size: 16px;
  color: #585858;
  font-weight: normal;
  font-style: normal;
  opacity: 0.7;
  color: #fff !important;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
p {
  margin: 0;
  padding: 0;
}
.textStyle {
  text-align: left;
  text-indent: 2em;
  word-break: break-all;
}
.left {
  float: left;
  width: 45%;
  margin-right: 10%;
}
.right {
  float: left;
  width: 45%;
}
.el-collapse {
  border-top: none;
  border-bottom: none;
}
.test >>> .el-collapse-item__header {
  background-color: transparent;
  color: white;
  border-bottom: none;
  font-weight: bold;
  font-size: 20px;
  font-weight: 700;
}
.test >>> .el-collapse-item__wrap {
  background-color: transparent;
  border-bottom: none;
}
</style>
