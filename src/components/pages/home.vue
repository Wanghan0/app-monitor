<!--created by wanghan-->
<template>
  <div class="main">
    <el-card v-for="(item,index) in list" :key="index" class="box-card">
      <div slot="header" class="clearfix">
        <span class="header">{{item.name}}</span>
      </div>
      <div class="value">{{item.value}}</div>
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
        list:[
          {name:'新上架应用',value:72},
          {name:'下架应用',value:112},
          {name:'应用总数',value:1},
          {name:'30天平均审核时长',value:1},
        ]
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
    padding: 100px 200px;
    text-align: center;
  }
  .box-card{
    display: inline-block;
    width: 400px;
    height: 300px;
    margin: 20px;
  }
  .header{
    font-size: 16px;
    color: #606266;
  }
  .value{
    text-align: center;
    font-size: 50px;
    margin-top: 50px;
    color: #67C23A;
  }
</style>
