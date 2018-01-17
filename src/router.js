/**
 * Created by ling on 2018/1/16.
 */
import Router from 'vue-router';
import Login from './modules/login/index.vue';
import Main from './modules/main/index.vue';
import My from './modules/my/index.vue';
import Detail from './modules/detail/index.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {path: '/login', component: Login},
    {path: '/main', component: Main},
    {path: '/my', component: My},
    {path: '/detail/:id', component: Detail}
  ]
})