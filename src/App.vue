<template>
  <div id="app">
    <!--<loading></loading>-->
    <vheader></vheader>
    <div class="main clearfix">
      <!--<div class="pub_menu">-->
        <!--<h3 class="pub_menu_title">晚饭报销平台</h3>-->
        <!--<menu-dynamic v-if="isShowMenu" :menuData="menuData"></menu-dynamic>-->
      <!--</div>-->
      <router-view class="content"></router-view>
    </div>
  </div>
</template>

<script>
  import vheader from './components/header/header.vue'
  import menuDynamic from './components/menu/menuDynamic.vue'
  import {permsBtnAll} from './api/permsData.js'    //所有已埋权限的元素（按钮）列表
  import {menuData} from './components/menu/staticMenuData.js' //静态菜单数据
  // import {userGetPerms} from './api/index.js'
  import loading from './components/pages/login'

  export default {
    name: 'app',
    data() {
      return {
        isShowMenu: true,   //用来更新视图
        menuData: [],
        resourceSwitch: true,  //是否启用静态资源
      }
    },
    components: {vheader, menuDynamic,loading},
    created() {

    },
    watch: {

    },
    methods: {




    }
  }
</script>

<style scoped>
  .main {
    /*padding-top: 60px;*/
  }

  .content {
    /*margin-left: 200px;*/
    padding: 20px;
  }

  .pub_menu {
    position: fixed;
    left: 0;
    top: 80px;
    bottom: 0;
    width: 200px;
    background-color: #3f3f3f;
    z-index: 10;
    overflow: hidden;
  }

  .pub_menu .pub_menu_title {
    width: 152px;
    margin: 20px auto;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #5c5c5c;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
  }
</style>
