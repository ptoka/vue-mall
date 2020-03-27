export default {
  debounce(fn, delay = 300) {
    var timer

    return function(...args) {
      if (timer) {
        clearTimeout(timer)
      } ///如果有新的请求,则把之前的定时器清除掉

      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  }
}
