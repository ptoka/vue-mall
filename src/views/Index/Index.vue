<template>
  <div id="index">
    <nav-bar class="index-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-child-swiper :banners="banners"></home-child-swiper>
    <recommend-view :recommends="recommend"></recommend-view>
    <tab-control ref="tabControl1" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goodsType"></goods-list>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import HomeChildSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from  'components/content/goods/GoodsList'
  import GoodsList from "../../components/content/goods/GoodsList";

  export default {
    name: 'Index',
    data() {
      return {
        banners: [],
        recommend: [],
        keywords: [],
        dKeyword: null,
        index:0,
        goods: {
          pop: {'page': 0, 'list': []},
          new: {'page': 0, 'list': []},
          sell: {'page': 0, 'list': []}
        },
        currentType: ["pop", "new", "sell"],
      }
    },
    components: {
      GoodsList,
      NavBar, HomeChildSwiper, RecommendView, TabControl,GoodList
    },
    created() {
      this.getHomeMultidata();

      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");

    },
    methods: {
      /*网络请求*/
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
          this.keywords = res.data.keywords.list;
          this.dKeyword = res.data.dKeyword.list;
          console.log(this.banners);
          console.log(this.recommend)
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          console.log(this.goods);
        })
      },
      /*事件监听*/
      tabClick(index){
        this.index = index;
        // this.$refs.tabControl1.currentIndex = index;
        // this.$refs.tabControl2.currentIndex = index;
      }
    },
    computed:{
      goodsType() {
        return this.goods[this.currentType[this.index]].list;
      }
    }
  }
</script>

<style scoped>
  .index-nav {
    background-color: #ff5777;
    color: #fff;
  }
</style>