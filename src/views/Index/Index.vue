<template>
  <div id="index">
    <nav-bar class="index-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-child-swiper :banners="banners"></home-child-swiper>
    <recommend-view :recommends="recommend"></recommend-view>
    <tab-control :titles="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'
  import HomeChildSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import TabControl from 'components/content/tabControl/TabControl'


  export default {
    name: 'Index',
    data() {
      return {
        banners: [],
        recommend: [],
        keywords: [],
        dKeyword: null
      }
    },
    components: {
      NavBar, HomeChildSwiper,RecommendView,TabControl
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        this.keywords = res.data.keywords.list;
        this.dKeyword = res.data.dKeyword.list;
        console.log(this.banners);
        console.log(this.recommend)
      })
    }
  }
</script>

<style scoped>
  .index-nav {
    background-color: #ff5777;
    color: #fff;
  }
</style>