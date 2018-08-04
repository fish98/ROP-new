<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
      <!-- <download-and-upload></download-and-upload> -->
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import Sidebar from './components/SideBar/index.vue'
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
    components: {
        Navbar,
        AppMain,
        Sidebar
    }
})
export default class ConsoleClass extends Vue {

}

</script>

<style lang="less" scoped>
  .app-wrapper {
    .clearfix {
      &:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }
    }
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 1000;
  }
  .main-container {
    background: #f4f4f4;
  }
</style>
