<!--
 * @Descripttion: 个人经历与教育经历组件
 * @version: 
 * @Author: Yimi81
 * @Date: 2021-01-07 15:19:08
 * @LastEditors: Yimi81
 * @LastEditTime: 2021-01-07 16:17:48
-->
<template>
  <div id="resume">
    <el-row>
      <el-col :span="12">
        <h3 class="mb-2">
          Experiences
        </h3>
      </el-col>
      <el-col :span="11" :offset="1">
        <h3 class="mb-2">
          Education
        </h3>
      </el-col>
    </el-row>
    <el-row v-for="item in resumeDetail" :key="item.key">
      <el-col :span="12">
        <div class="experience-top">
          <h5>{{ item.experiences.time }}</h5>
          <h4>{{ item.experiences.title }}</h4>
          <p>{{ item.experiences.detail }}</p>
        </div>
      </el-col>
      <el-col :span="11" :offset="1">
        <div class="experience-top">
          <h5>{{ item.education.time }}</h5>
          <h4>{{ item.education.title }}</h4>
          <p>{{ item.education.detail }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
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
  created() {},
  mounted() {},
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
}
#resume{
    vertical-align: unset;
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
  margin-bottom: 20px;
}
#resume h5 {
  padding: 6px 10px 5px 10px;
  border: 2px solid #35a22c;
  color: #fff;
  display: inline-block;
  margin-bottom: 20px;
  font-size: 16px;
  /* line-height: 24px; */
  font-weight: 700;
}
#resume .mb-2 {
  margin-bottom: 2rem !important;
}
.el-col {
  text-align: left;
}
.experience-top {
  border-bottom: solid 1px rgba(250, 250, 250, 0.32);
  margin-bottom: 30px;
  padding-bottom: 10px;
  height: 30%;
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
</style>
