import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// import Antd from 'vue-antd-ui';
// import 'vue-antd-ui/dist/antd.css';
// Vue.use(Antd);

import * as Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
    size: 'medium',
})

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
