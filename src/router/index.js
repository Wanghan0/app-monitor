import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/pages/home'
import appManage from '../components/pages/appManage'
import admin from '../components/pages/admin'
import indexMonitor from '../components/pages/indexMonitor'
import updateMonitor from '../components/pages/updateMonitor'
import login from '../components/pages/login'

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/appManage',
        name: 'appManage',
        component: appManage
      },
      {
        path: '/admin',
        name: 'admin',
        component: admin
      },
      {
        path: '/indexMonitor',
        name: 'indexMonitor',
        component: indexMonitor
      },
      {
        path: '/updateMonitor',
        name: 'updateMonitor',
        component: updateMonitor
      },
      {
        path: '/login',
        name: 'login',
        component: login
      },

    ]
});
