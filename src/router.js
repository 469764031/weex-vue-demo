/**
 * Created by ling on 2018/1/16.
 */
import Router from 'vue-router';
import Login from './js/modules/login/index.vue';
import Main from './js/modules/main/index.vue';


Vue.use(Router);

export default new Router({
  routes:[
    {path: '/login', component:Login},
    {path: '/main', component:Main}
  ]
})