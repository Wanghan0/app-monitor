<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      style="padding-left: 20px"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item disabled index="/home">
        <span class="systemName">APP智能监控平台</span>
      </el-menu-item>
      <el-menu-item index="/indexMonitor">APP指标监控</el-menu-item>
      <el-menu-item index="/updateMonitor">APP升级监控</el-menu-item>
      <el-menu-item index="/appManage">应用管理</el-menu-item>
      <el-menu-item index="/admin">我的工作台</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push(key)
      }
    }
  }
</script>
<style scoped>
 .systemName{
   display: inline-block;
   margin-right: 100px;
   margin-left: 0;
   font-size: 20px;
   color: rgb(255, 208, 75) !important;
 }
  .el-menu-item.is-disabled{
    opacity: 1 !important;
  }
</style>
