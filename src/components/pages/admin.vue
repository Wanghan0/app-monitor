<!--created by wanghan-->
<template>
  <div class="main">
    <div
      v-for="(item,index) in appData"
      :key="index"
      class="cardBox"
      @mouseenter="hoverItem=index"
      @mouseleave="hoverItem=''">
      <div class="tag">{{item.name}}</div>
      <div class="box-card">
              <span class="del" v-show="hoverItem===index" @click="del(index,item)">
                <i class="el-icon-close"></i>
              </span>

        <div class="card_content">
          <img class="icon" :src="`../../../static/icon_dir/${item.icon}.png`">
          <!--<div class="footer">移除</div>-->
        </div>
      </div>
    </div>
    <!--<el-card class="box-card cardBox" v-for="(item,index) in appData" :key="index">-->
      <!--<div slot="header" class="clearfix">-->
        <!--<span style="float: left; padding: 3px 6px;font-size: 14px">{{item.name}}</span>-->
        <!--<el-button style="float: right; padding: 3px 6px;font-size: 12px" type="text" @click="del(index,item)">移除</el-button>-->
      <!--</div>-->
      <!--<div class="card_content">-->
        <!--<img class="icon" :src="`../../../static/icon_dir/${item.icon}.png`">-->
        <!--&lt;!&ndash;<div class="footer">移除</div>&ndash;&gt;-->
      <!--</div>-->
    <!--</el-card>-->
  </div>
</template>

<script type="text/javascript">
  import {appData} from '../../assets/data'
  export default {
    name: '',
    components: {

    },
    data() {
      return {
        appData:appData,
        hoverItem:null,
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
      del(){
        this.$confirm('确定移除该应用吗？','提示').then(()=>{
          //点击确定后做一些逻辑处理
        }).catch(()=>{
          //点击取消后做一些逻辑处理
        })
      }

    }
  }

</script>

<style scoped>

  .main{
    padding: 100px 200px;
    text-align: center;
  }
  .cardBox {
    position: relative;
    transition: all 1s;
  }
  .cardBox {
    margin: 20px;
    width: 25%;
    display: inline-block;
    /*padding: 12px;*/
    box-sizing: border-box;
    vertical-align: bottom;
  }
  .box-card {
    position: relative;
    height: 160px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 5px;
  }
  .del {
    position: absolute;
    right: 6px;
    top: 3px;
    font-size: 20px;
    color: #999;
    cursor: pointer;
    z-index: 9999;
  }
  .card_content {
    position: relative;
    text-align: center;
    padding-top: 50px;
    box-sizing: border-box;
    height: 100%;
    color: #4f4f4f;
  }
  .tag {
    position: absolute;
    top: -4px;
    left: -7px;
    z-index: 1;
    padding-right: 10px;
    color: #000;
    height: 0px;
    line-height: 0px;
    border: rgb(179, 216, 255) 10px solid;
    /*border: rgb(217, 236, 255) 10px solid;*/
    border-right-color: transparent;
    box-shadow: -0px 5px 5px -5px #272727;
  }

  .tag:after {
    content: "";
    position: absolute;
    top: 10px;
    left: -10px;
    border: rgb(139, 168, 198) 4px solid;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }
  .realLine .index_name {
    color: #409EFF;
  }
  .offLine .index_name {
    color: #70869c;
  }
  .icon{
    width: 50px;
    height: 50px;
  }

  .footer{
    width: 100%;
    height: 30px;
    border-top: 1px solid #409EFF;
    color: #409EFF;
    cursor: pointer;
    position: absolute;
    bottom: 0;
  }
  .el-card__header{
    padding: 8px 2px !important;
  }
</style>
