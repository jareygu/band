<template>
  <div id="app">
    <MainView></MainView>
  </div>
</template>
<script>
import MainView from './views/MainView.vue'
export default {
  name: 'app',
  components: {
    MainView
  }
}
</script>
<style>
::-webkit-scrollbar {
  width: 12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(159, 167, 164, 0.5);
}
</style>