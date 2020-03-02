<!--created by wanghan-->
<template>
  <div class="main">
    <!--<div class="section">-->
      <!---->
      <!--<line-chart name="whtest" :trendData="trendData"></line-chart>-->
    <!--</div>-->
    <div>
      当前应用
      <el-select v-model="curApp" value-key="name">
        <el-option v-for="(item,index) in appData" :label="item.name" :value="item" :key="index"></el-option>
      </el-select>
    </div>
    <el-card v-for="(item,index) in list" :key="index" class="box-card">
      <div slot="header" class="clearfix">
        <span class="header">{{item.name}}</span>
      </div>
      <div>
        <line-chart :name="item.filed" :trendData="item.value"></line-chart>
      </div>
      <!--<div class="value">{{item.value}}</div>-->
    </el-card>
  </div>
</template>

<script type="text/javascript">
  import lineChart from "./lineChart";
  import {appData} from '../../assets/data'
  export default {
    name: '',
    components: {
      lineChart
    },
    data() {
      return {
        appData:appData,
        curApp:{},
        trendData:[820, 932, 901, 934, 1290, 1330, 1320],
        list:[
          {name:'应用排名',filed:'rank',value:[]},
          {name:'昨日新增下载量',filed:'new_download_yes',value:[]},
          {name:'评分',filed:'score',value:[]},
          {name:'评论数',filed:'comments',value:[]},
          // {name:'上次更新时间',filed:'last_update',value:112},
          // {name:'更新前图片',filed:'before_update',value:1},
          // {name:'更新后图片',filed:'after_update',value:1},
        ]
      }
    },
    computed: {
    },
    watch:{
      curApp(val){
        console.log('val',val)
        this.list[0].value=val.rank;
        this.list[1].value=val.new_download_yes.map(item=>{
          return item.replace(/,/g,'')
        });
        this.list[2].value=val.score;
        this.list[3].value=val.comments;
        console.log('list',this.list)
      }
    },
    created() {
      this.curApp=appData[0];
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
    width:500px;
    height: 320px;
    display: inline-block;
    margin: 20px;
  }
  .section{
    width: 300px;
  }
</style>
