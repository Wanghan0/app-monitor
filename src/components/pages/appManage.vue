<!--created by wanghan-->
<template>
  <div class="main">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="all"></el-tab-pane>
      <el-tab-pane v-for="(item,index) in typeList" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
    <contentTable
      ref="table"
      :titles="titles"
      :constants="constants"
      :totalPage="totalPage"
      :pageParams="searchParam"
      :noOperat="false">
      <template slot="tdOperate" slot-scope="{item}">
        <button type="button" class="btn btn-intab" @click="">关注应用</button>
      </template>
    </contentTable>
  </div>
</template>

<script type="text/javascript">
  import contentTable from "../common/contentTable";
  export default {
    name: '',
    components: {
      contentTable
    },
    data() {
      return {
        activeName:'all',
        typeList:[{label:'华为',name:'huawei'},{label:'小米',name:'小米'},],
        searchParam:{
          page:1,
          pageSize:15
        },
        totalPage:0,
        titles:[
          {name:'应用',value:'name'},
          {name:'排名',value:'sort'},
          {name:'类别',value:'type'},
          {name:'昨日新增下载量',value:'down'},
          {name:'评分统计',value:'count'},
          {name:'最后更新',value:'updateTime',timeFormat:'yyyy-MM-dd hh:mm:ss'},
          {name:'公司名称',value:'cpName',timeFormat:'yyyy-MM-dd hh:mm:ss'},
        ],
        constants:[
          {name:'应用1',sort:'排名1',type:'类别1',down:'昨日新增下载量1',count:'评分统计1',updateTime:'最后更新1',cpName:'公司名称1'}
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
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }

</script>

<style scoped>

  .main{
    padding: 20px;
    text-align: center;
  }
</style>
