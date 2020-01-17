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
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .index-nav {
    background-color: #ff5777;
    color: #fff;
  }
</style>