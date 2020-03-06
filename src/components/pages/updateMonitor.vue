<!--created by wanghan-->
<template>
  <div class="main">
    <div>
      当前应用
      <el-select v-model="curApp" value-key="name">
        <el-option label="bilibili" value="item"></el-option>
      </el-select>
      <el-date-picker v-model="date" size="mini" type="date" placeholder="选择日期"></el-date-picker>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>更新前</span>
      </div>
      <div>
        <img src="../../../static/img/before.jpg">
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>更新后</span>
      </div>
      <div>
        <img src="../../../static/img/after.jpg">
      </div>
    </el-card>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: '',
    components: {
    },
    data() {
      return {
        date:'2020-02-27',
        curApp:'bilibili'
      }
    },
    computed: {
    },
    watch:{
    },
    created() {
    },
    methods: {
    }
  }

</script>

<style scoped>
  .main{
    padding: 20px 50px;
    text-align: center;
  }
  .box-card{
    min-width:400px;
    min-height: 550px;
    display: inline-block;
    margin: 20px;
  }
</style>
