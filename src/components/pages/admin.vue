<!--created by wanghan-->
<template>
  <div class="main">
    <div
      v-for="(item,index) in list"
      :key="index"
      class="cardBox"
      @mouseenter="hoverItem=index"
      @mouseleave="hoverItem=''">
      <div class="tag">某个app</div>
      <div class="box-card">
              <span class="del" v-show="hoverItem===index">
                <i class="el-icon-close" @click.stop="del(index,item)"></i>
              </span>
        <div class="card_content">
          111
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: '',
    components: {

    },
    data() {
      return {
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
      del(){}

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
    width: 25%;
    display: inline-block;
    padding: 12px;
    box-sizing: border-box;
    cursor: move;
    vertical-align: bottom;
  }
  .box-card {
    position: relative;
    height: 160px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
  }
  .card_content {
    text-align: center;
    padding-top: 20px;
    box-sizing: border-box;
    height: 100%;
    color: #4f4f4f;
  }
  .tag {
    position: absolute;
    top: 5px;
    left: 2px;
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
</style>
