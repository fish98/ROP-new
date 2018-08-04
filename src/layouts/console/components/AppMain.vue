<template>
  <div class="app-main-wrap">
    <div class="app-main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class AppMainClass extends Vue {
    @State(state => state.tagsView.cacheViews) cachedViews!: any

    // Force Refresh
    get key() {
        return this.$route.fullPath
    }


}
</script>
<style lang="less" scoped>

  .app-main-wrap {
    height: calc(100vh - 96px);
    padding: 14px;
    .app-main {
      height: 100%;
      overflow: auto;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      border-radius: 4px;
    }
  }
  .el-main{
    padding: 14px;
  }
</style>
