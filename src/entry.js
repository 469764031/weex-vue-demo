/**
 * Created by ling on 2018/1/16.
 */
import App from './App.vue';
import router from './router';
import mixins from './mixins'

Vue.mixin(mixins);

new Vue(Vue.util.extend({
  el: '#root',
  router,
}, App));

router.push('/main');