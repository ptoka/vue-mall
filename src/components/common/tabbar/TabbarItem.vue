<template>
  <div id="tabbar-item"
       @click="onClick">
    <div v-show='!isActive'>
      <slot name="icon"></slot>
    </div>
    <div v-show='isActive'>
      <slot name="icon-active"></slot>
    </div>
    <p :class="hasActive">
      <slot name="label">首页</slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'TabbarItem',
    props: {
      link: String,
    },
    data () {
      return {
      }
    },
    methods: {
      onClick () {
        this.$router.push(this.link)
        console.log(this.link)
      }
    },
    computed: {
      isActive () {
        // 判断当前活跃的路由是否是自身
        return this.$route.path.indexOf(this.link) !== -1;
        console.log(this.link)
      },
      hasActive () {
        if (this.$route.path.indexOf(this.link) !== -1) {
          return 'hasActive'
        } else {
          return ' '
        }
      }
    }
  }
</script>

<style scoped>
  #tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  #tabbar-item img {
    margin-top: 3px;
    margin-bottom: 2px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
  .hasActive {
    color: #ff5777;
  }
</style>