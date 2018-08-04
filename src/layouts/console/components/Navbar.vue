<template>
  <el-menu class="navbar" mode="horizontal">
    <!-- <breadcrumb class="breadcrumb-container"></breadcrumb> -->
    <div class="right-menu">
      <div class="user-profile-container" trigger="click">
      <div class="user-profile-content">

        <el-dropdown>
          <div class="user-profile-body">
            <img class="user-avatar" src="https://img.alicdn.com/tfs/TB1ONhloamWBuNjy1XaXXXCbXXa-200-200.png">
            <span class="user-name">{{name}}</span>
          </div>
          <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <el-dropdown-item>
              <span @click="logout" style="display:block;">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    </div>
  </el-menu>
</template>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class'


@Component
export default class NavbarClass extends Vue {
    @Getter('name') name!: string;

    logout() {
        this.$store.dispatch('LogOut').then(() => {
            // localtion.reload()
        })
    }
}

</script>

<style lang="less" scoped>

.navbar {
  height: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .hamburger-container {
    line-height: 60px;
    height: 60px;
    float: left;
    padding: 0 30px;
  }
    .user-profile-container {
    position: absolute;
    right: 20px;
    cursor: pointer;
    .user-profile-content {
      display: flex;
      padding: 20px 0;
    }
    .menu-icons {
      display: flex;
      align-items: center;
      .menu-icon {
        padding: 0 10px;
        .icon {
          display: inline-block;
          font-size: 18px;
          text-align: center;
        }
      }
    }
    .user-profile-body {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-right: 16px;
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      margin: 0 6px 0 10px;
      border-radius: 4px;
    }
    .user-name {
      color: #333;
    }
    .user-department {
      font-size: 12px;
      color: #666;
    }
    .el-icon-caret-bottom {
      position: absolute;
      right: 0;
      top: 13px;
      font-size: 12px;
    }
  }
}
</style>
