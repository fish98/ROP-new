<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">

      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <!-- <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon> -->
          <i v-if="item.children[0].meta&&item.children[0].meta.iconfont" :class="'iconfont ' + item.children[0].meta.iconfont"></i>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{(item.children[0].meta.title)}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <!-- <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon> -->
          <i v-if="item.meta&&item.meta.iconfont" :class="'iconfont ' + item.meta.iconfont"></i>
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path" class="menu-item">
              <!--<svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>-->
              <i v-if="child.meta&&child.meta.iconfont" :class="'iconfont '+ child.meta.iconfont"></i>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';


@Component
export default class SidebarItemClass extends Vue {
    @Prop(Array) routes!: RouteConfig[]
    @Prop({ default: false }) isNest!: boolean

    hasOneShowingChildren(children: any) {
      const showingChildren = children.filter((item: any) => {
        return !item.hidden
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }

    created() {
        console.log(this.routes)
    }
}
</script>
