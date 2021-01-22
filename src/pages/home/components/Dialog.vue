<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2021-01-19 15:30:32
 * @LastEditors: Yimi81
 * @LastEditTime: 2021-01-21 14:18:52
-->
<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"

    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    dialogVisible: Boolean
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>
