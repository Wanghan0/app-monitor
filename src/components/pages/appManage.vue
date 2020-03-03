<!--created by wanghan-->
<template>
  <div class="main">
    <el-tabs v-model="activeName" type="card">
      <div class="top-btn">
        <el-button size="mini">昨日</el-button>
        <el-button size="mini" type="primary">今日</el-button>
        <el-date-picker v-model="date" size="mini" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <el-tab-pane label="类别" name="all"></el-tab-pane>
      <el-tab-pane v-for="(item,index) in typeList" :label="item" :name="item" :key="index"></el-tab-pane>
    </el-tabs>
    <contentTable
      ref="table"
      :titles="titles"
      :constants="constants"
      :totalPage="totalPage"
      :pageParams="searchParam"
      :noOperat="false">
      <template slot="tdCustom" slot-scope="{item,one,index}">
        <span>
          <img class="icon" :src="`../../../static/icon_dir/${item.icon}.png`">
        </span>
      </template>
      <template slot="tdOperate" slot-scope="{item}">
        <el-button icon="el-icon-plus" type="primary" size="mini">关注应用</el-button>
        <el-button icon="el-icon-star-off" type="primary" size="mini">指标详情</el-button>
        <el-button icon="el-icon-refresh" type="primary" size="mini">更新详情</el-button>
        <!--<button type="button" class="btn btn-intab" @click="">关注应用</button>-->
      </template>
    </contentTable>
  </div>
</template>

<script type="text/javascript">
  import contentTable from "../common/contentTable";
  import {appData} from '../../assets/data'
  export default {
    name: '',
    components: {
      contentTable
    },
    data() {
      return {
        activeName:'all',
        date:'2020-02-27',
        typeList:['软件下载榜','软件评分榜'],
        searchParam:{
          page:1,
          pageSize:15
        },
        totalPage:0,
        appData:appData,
        titles:[
          {name:'应用',value:'name'},
          {name:'图标',value:'icon',customTd:true},
          {name:'排名',value:'rank'},
          {name:'昨日新增下载量',value:'new_download_yes'},
          {name:'评分统计',value:'score'},
          {name:'最后更新',value:'last_update'},
          {name:'公司名称',value:'company'},
        ],
        constants:[
          {name:'应用1',sort:'排名1',type:'类别1',down:'昨日新增下载量1',count:'评分统计1',updateTime:'最后更新1',cpName:'公司名称1'}
        ],
        constantsSource:[],
        constantsSortByScore:[],
        constantsSortByDownload:[],
      }
    },
    computed: {

    },
    watch:{
      activeName(val){
        console.log('activeName', val);
        if(val==='软件下载榜'){
          this.constants=[...this.constantsSortByDownload];
        }else if(val==='软件评分榜'){
          this.constants=[...this.constantsSortByScore];
        }

      }
    },
    created() {
      this.init()
    },
    methods: {
      init(){
        let data=appData;
        this.constants=data.map(item=>{
          return {
            "new_download_yes": item.new_download_yes[item.new_download_yes.length-1],
            "name": item.name,
            "company": item.name,
            "rank": item.rank[item.rank.length-1],
            "last_update": item.last_update[item.last_update.length-1],
            "before_update": item.before_update[item.before_update.length-1],
            "score": item.score[item.score.length-1],
            "comments": item.comments[item.comments.length-1],
            "after_update": item.after_update[item.after_update.length-1],
            "icon": item.icon,
          }
        });
        this.constantsSource=[...this.constants];
        this.constantsSortByScore=[...this.constants].sort((a,b)=>{
          return Number(b['score'])-Number(a['score'])
        });
        this.constantsSortByDownload=[...this.constants].sort((a,b)=>{
          return Number(b['new_download_yes'].replace(/,/g,''))-Number(a['new_download_yes'].replace(/,/g,''))
        });
      },
    }
  }

</script>

<style scoped>

  .main{
    padding: 20px;
    text-align: center;
  }
  .icon{
    width: 40px;
    height: 40px;
  }
  .top-btn{
    position: absolute;
    top:-50px;
    left: 350px;
  }
</style>
