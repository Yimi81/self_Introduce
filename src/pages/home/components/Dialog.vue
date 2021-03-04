<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2021-01-19 15:30:32
 * @LastEditors: Yimi81
 * @LastEditTime: 2021-01-21 14:18:52
-->
<template>
  <el-dialog
    title="我的主要贡献"
    :visible.sync="dialogDetail"
    width="40%"
    center
  >
    <div class="content">
      <div v-for="item in showWork" :key="item.job">
        <h3 style="margin-bottom: 10px">{{ item.title }}</h3>
        <el-row style="padding: 0 10px">
          <el-col :span="19">
            <ul>
              <li v-for="info in item.job" :key="info">{{ info }}</li>
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
                @click="messageInfo"
              ></i>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-row style="margin-top: 10px">
          <el-col :span="3" class="little-title"> 完成评分: </el-col>
          <el-col :span="20" :offset="1">
            <el-rate
              v-model="item.score"
              disabled
              show-score
              text-color="#ff9900"
            >
            </el-rate>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      dialogDetail: this.dialogVisible,
      drawer: false,
      workOne: [
        {
          title: "贡献",
          job: [
            "1,按照设计所给设计图迭代网站主页样式。",
            "2,独立完成多个静态展示页面，包括'关于我们'、'担保条款'、'产品手册'等等。",
            "3,产品展示页面模仿淘宝引入放大镜效果。",
          ],
          score: 4.0,
        },
      ],
      workTwo: [
        {
          title: "贡献",
          job: [
            "1, 参与网站特色功能3D订制系统的开发，复制各组件及部件的相应逻辑开发。",
            "2, 还原设计所设计的样式，完善网站展示。",
            "3, 阅读前员工代码完成后台官网从vue单页面项目迁移至.net,其中完成多处插件的引入以及组件化引入方式得到上司充分肯定。",
          ],
          score: 4.5
        },

      ],
      workThree: [
        {
          title: "贡献",
          job: [
            "1, 实时跟进运营人员，按照所给的要求及时更改网站展示。",
            "2, 根据设计所给蓝图，完成网站前台的优化。",
            "3, 维护与更新网站产品数据。",
          ],
          score: 4.0,
        },
      ],
      showWork: [],
    };
  },
  props: {
    dialogVisible: Boolean,
    workId: Number,
  },
  created() {},
  mounted() {},
  watch: {
    dialogVisible(val) {
      if (val != this.dialogDetail) this.dialogDetail = val;
    },
    dialogDetail(val) {
      this.$emit("update:dialogVisible", val);
    },
    workId(val) {
      console.log(`val:${val}`);
      if (val == 1) {
        this.showWork = this.workOne;
      } else if (val == 2) {
        this.showWork = this.workTwo;
      } else {
        this.showWork = this.workThree;
      }
    },
  },
  methods: {
    messageInfo() {
      this.$message({
        message: "待开发,可至官网查看。",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
ol,
ul {
  list-style: none;
}
ul li{
  margin-bottom: 5px;
}
.show-img {
  color: #409eff;
  font-size: 40px;
  cursor: pointer;
}
.item {
  margin: 4px;
}
.little-title {
  font-weight: bold;
}
.content {
  overflow: auto;
}
</style>
