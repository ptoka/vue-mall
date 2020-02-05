<template>
  <div id="index">
    <nav-bar class="index-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
<<<<<<< HEAD
    <home-child-swiper :banners="banners"></home-child-swiper>
    <recommend-view :recommends="recommend"></recommend-view>
    <tab-control :titles="['流行','新款','精选']"></tab-control>
=======
>>>>>>> 0e0824d27e7367c7baf8759bf077d8178be1c0c0
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
<<<<<<< HEAD
  import {getHomeMultidata} from 'network/home'
  import HomeChildSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import TabControl from 'components/content/tabControl/TabControl'


  export default {
    name: 'Index',
    data() {
=======
  import { getHomeMultidata } from 'network/home'
  export default {
    name: 'Index',
    data () {
>>>>>>> 0e0824d27e7367c7baf8759bf077d8178be1c0c0
      return {
        banners: [],
        recommend: [],
        keywords: [],
        dKeyword: null
      }
    },
    components: {
<<<<<<< HEAD
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
=======
      NavBar
    },
    created () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner
        this.recommend = res.data.recommend
        this.keywords = res.data.keywords
        this.dKeyword = res.data.dKeyword
>>>>>>> 0e0824d27e7367c7baf8759bf077d8178be1c0c0
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