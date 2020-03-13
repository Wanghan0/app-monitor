<!--created by wanghan-->
<template>
  <div class="main">
    <div>
      当前应用
      <el-select v-model="curApp" value-key="name">
        <el-option v-for="(item,index) in appData" :label="item.name" :value="item" :key="index"></el-option>
      </el-select>
      <el-date-picker v-model="date" size="mini" type="date" placeholder="选择日期"></el-date-picker>

      <el-button icon="el-icon-setting" type="primary" size="mini" @click="setting(item)">显示设置</el-button>
    </div>
    <el-card v-for="(item,index) in list" :key="index" class="box-card">
      <div slot="header" class="clearfix">
        <div class="header">
          <span class="name">{{item.name}}</span>
          <span class="value">
            <em class="label">最新数据：</em>
            <em class="last">{{item.value[item.value.length-1]}}</em>
          </span>
        </div>
      </div>
      <div>
        <line-chart :name="item.filed" :trendData="item.value"></line-chart>
      </div>
      <!--<div class="value">{{item.value}}</div>-->
    </el-card>
    <el-dialog :visible.sync="showSetting" title="信息配置" width="400px" :close-on-click-modal="false">
      <el-checkbox-group v-model="checkList" style="margin-top: 20px">
        <el-row>
          <el-col :span="12" v-for="one in indexs" :key="one" style="text-align: initial;padding-left: 50px">
            <el-checkbox :label="one">{{one}}</el-checkbox>
          </el-col>
        </el-row>
      </el-checkbox-group>
      <div style="margin-top: 20px">
        <el-button type="primary" size="small">保存</el-button>
        <el-button size="small">取消</el-button>
      </div>
      <p class="tip">请至少选择四个指标</p>
    </el-dialog>
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
        checkList:[],
        indexs:['应用排名','昨日新增下载量','评分','评论数','类别','上架时间','更新时间'],
        showSetting:false,
        date:'2020-02-27',
        appData:appData,
        curApp:{},
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
      //显示设置
      setting(){
        this.showSetting=true;
      },
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
    height: 350px;
    display: inline-block;
    margin: 20px;
  }
  .section{
    width: 300px;
  }
  .name{
    float: left;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #303133;
  }
  .value{
    float: right;
  }
  .value .label{
    color: #999999;
  }
  .value .last{
    color: #409EFF;
    font-size: 32px;
    /*font-weight: bold;*/
  }
  .tip{
    color: #aaaaaa;
    text-align: center;
    font-size: 12px;
    position: relative;
    top: 10px;
  }
</style>
