<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "./components/Header";
import Alert from "./components/Alert";
export default {
  name: 'App',
  components:{
    appHeader:Header,//驼峰式命名不需要引号

  }
}
</script>

<style>

</style>
