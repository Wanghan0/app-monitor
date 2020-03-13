<!--created by wanghan-->
<template>
  <div class="main">
    <el-tabs v-model="activeName" type="card">
      <div class="top-btn">
        <el-button size="mini">昨日</el-button>
        <el-button size="mini" type="primary">今日</el-button>
        <el-date-picker v-model="date" size="mini" type="date" placeholder="选择日期"></el-date-picker>
        <el-button size="mini" type="primary">搜索</el-button>
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
        <span v-if="one.value==='icon'">
          <img class="icon" :src="`../../../static/icon_dir/${item.icon}.png`">
        </span>
        <span v-else-if="one.value==='rank'">
          {{index+1}}
        </span>
      </template>
      <template slot="tdOperate" slot-scope="{item}">
        <!--按钮type的值为text则为文字按钮，更多设置见element按钮组件-->
        <el-button icon="el-icon-plus" type="text" size="mini" @click="follow">关注应用</el-button>
        <el-button icon="el-icon-star-off" type="text" size="mini">指标详情</el-button>
        <el-button icon="el-icon-refresh" type="text" size="mini">更新详情</el-button>
        <el-button icon="el-icon-edit" type="text" size="mini" @click="config(item)">配置信息</el-button>
      </template>
    </contentTable>
    <!--这个是弹框组件，详情可查阅element组件文档https://element.eleme.cn/#/zh-CN/component/dialog-->
    <el-dialog :visible.sync="showConfig" title="信息配置" width="820px" :close-on-click-modal="false">
      <!--此处弹框里放了一个表单，这个表单是我写的组件，使用时需要引入，你也可以放其他东西-->
      <edit-form
        ref="editForm"
        v-if="showConfig"
        :fields="editFields"
        :editData="editData"
        @save="save"
        label-width="120px"
        @close="showConfig=false">
      </edit-form>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
  import contentTable from "../common/contentTable";//引入表格组件
  import {appData} from '../../assets/data'//引入表格数据
  import editForm from "../common/editForm";//引入表单组件
  export default {
    name: '',
    components: {
      contentTable,
      editForm
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
          {name:'排名',value:'rank',customTd:true},
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
        showConfig:false,//控制配置弹框是否显示
        editData:null,//配置弹框表单的数据对象
        editFields:{//配置弹框表单的配置项
          name:{type: 'input', label: '应用',required:true},
          icon:{type: 'input', label: '图标'},
          score:{type: 'number', label: '评分统计',required:true},
          company:{type: 'input', label: '公司名称',required:true},
        },
      }
    },
    computed: {

    },
    watch:{
      //切换tab
      activeName(val){
        console.log('activeName', val);
        if(val==='软件下载榜'){
          this.constants=[...this.constantsSortByDownload];
        }else if(val==='软件评分榜'){
          this.constants=[...this.constantsSortByScore];
        }

      }
    },
    created() {//组件加载完成的生命周期，可以做一些初始化工作
      this.init()
    },
    methods: {
      //关注应用，这里是一个简单弹框，仅作提示使用
      follow(){
        //这个是提示框组件，详情可查阅element组件文档https://element.eleme.cn/#/zh-CN/component/message-box
        this.$confirm('确定关注该应用吗？','提示').then(()=>{
          //点击确定后做一些逻辑处理
        }).catch(()=>{
          //点击取消后做一些逻辑处理
        })
      },
      //打开配置弹框,这里的弹框是一个表单，常见于编辑表格某行的内容
      config(item){
        this.showConfig=true; //配置弹框设置为显示，此为显示弹框的必须步骤
        //此处可做一些逻辑处理，例如下面
        this.editData={...item}; //给配置表单对象赋值
        this.editData.type='edit'; //状态设置为编辑
      },
      //保存配置信息
      save(){
        //此处可做一些逻辑处理
        this.showConfig=true;//关闭配置弹框
      },
      //处理表格数据
      init(){
        let data=appData;
        this.constants=data.map(item=>{
          return {
            "new_download_yes": item.new_download_yes[item.new_download_yes.length-1],
            "name": item.name,
            "company": item.company,
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
