<template>
  <div id="index">
    <nav-bar class="index-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import { getHomeMultidata } from 'network/home'
  export default {
    name: 'Index',
    data () {
      return {
        banners: [],
        recommend: [],
        keywords: [],
        dKeyword: null
      }
    },
    components: {
      NavBar
    },
    created () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner
        this.recommend = res.data.recommend
        this.keywords = res.data.keywords
        this.dKeyword = res.data.dKeyword
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