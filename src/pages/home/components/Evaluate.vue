<!--
 * @Descripttion: 个人评价页面
 * @version: 
 * @Author: Yimi81
 * @Date: 2021-01-14 15:35:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-26 15:40:45
-->
<template>
  <div>
    <div class="head">
      <h3 class="title">我是怎么样的一个人</h3>
      <div class="brief">
        <div class="three-grids-columns">
          <i class="iconfont iconhobby"></i>
          <h4>爱好</h4>
          <p>吃饭睡觉</p>
        </div>
        <div class="three-grids-columns">
          <i class="iconfont iconnengli"></i>
          <h4>能力</h4>
          <p>打代码</p>
        </div>
        <div class="three-grids-columns">
          <i class="iconfont iconxingge"></i>
          <h4>性格</h4>
          <p>好人</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
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
  margin-top: 3rem !important;
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
</style>
