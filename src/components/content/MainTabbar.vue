<template>
  <div>
    <tabbar>
      <tabbar-item v-for="item in tabItem"
                   :link="item.link"
                   :key="item.link">
        <template #icon><img :src="item.icon"></template>
        <template #icon-active><img :src="item.iconActive"></template>
        <template #label>
          {{item.label}}
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'components/common/tabbar/index.js'

  export default {
    name: 'MainTabbar',
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        tabItem: [
          { link: '/index', icon: require('assets/img/tabbar/home.svg'), iconActive: require('assets/img/tabbar/home_active.svg'), label: '主页' },
          { link: '/category', icon: require('assets/img/tabbar/category.svg'), iconActive: require('assets/img/tabbar/category_active.svg'), label: '分类' },
          { link: '/cart', icon: require('assets/img/tabbar/shopcart.svg'), iconActive: require('assets/img/tabbar/shopcart_active.svg'), label: '购物车' },
          { link: '/profile', icon: require('assets/img/tabbar/profile.svg'), iconActive: require('assets/img/tabbar/profile_active.svg'), label: '我的' },
        ]
      }
    }
  }
</script>

<style scoped>
</style>