<template>
  <div id="tab-control">
    <div v-for="(item,index) in titles" class="item-tab" @click="itemClick(index)"
         :class="{active:index===currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  #tab-control {
    display: flex;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    text-align: center;
  }
  .item-tab {
    flex: 1;
  }
  .item-tab span{
    padding:5px;
  }
  .active{
    color:var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>