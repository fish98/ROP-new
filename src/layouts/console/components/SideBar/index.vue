<template>
  <el-scrollbar wrapClass="scrollbar-wrapper" class="sidebar-container">
    <div class="logo">
      <!-- <img src="@/assets/yiwise-logo-white.png" width="54"> -->
      <span class="site-name">Yiwise CRM</span>
    </div>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="false"
      :default-openeds="routers.map(item => item.name || item.path)"
      background-color="#232940"
      text-color="hsla(0, 0%, 100%, .65)"
      :collapse-transition="true"
    >
      <sidebar-item :routes="routers"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import SidebarItem from './SidebarItem.vue'

import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { RouteConfig } from 'vue-router';

@Component({
    components: {
        SidebarItem
    }
})
export default class SideBarClass extends Vue {
    @Getter('routers') routers!: RouteConfig
}
</script>
<style lang="less" scoped>
// @import '@/styles/variables.scss';
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  line-height: 60px;
  background: #2d71f8;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
}
.site-name {
  margin-left: 16px;
}
</style>
