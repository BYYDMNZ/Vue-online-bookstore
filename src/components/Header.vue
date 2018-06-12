<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
      </a>
      <a href="/" class="navbar-brand" style="margin-left: 5px">华农书店</a>
      <ul class="navbar-nav">
        <li><router-link class="nav-link" :to="{name:'home'}">主页</router-link></li>
        <li><router-link class="nav-link" :to="{name:'self'}" >个人中心</router-link></li>
        <li><router-link class="nav-link" :to="{name:'admin'}">管理</router-link></li>
        <li><router-link class="nav-link" :to="{name:'statistic'}">统计</router-link></li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li><router-link class="nav-link" :to="{name:'login'}" v-if="currentUser===null">登录</router-link></li>
        <li><router-link class="nav-link" :to="{name:'register'}" v-if="currentUser===null">注册</router-link></li>
        <li class="nav-link" v-if="currentUser!==null">{{currentUser.username}}</li>
        <li class="nav-link"  v-if="currentUser!==null" @click="logout">[退出]</li>
      </ul>
    </nav>
  </header>

</template>

<script>
  export default {
    name: "Header",
    data(){
      return {

      }
    },
    computed:{
      currentUser(){
        return this.$store.state.currentUser
      }
    },
    methods:{
      logout(){
        this.$store.commit("logout")
      }
    },

  }
</script>

<style scoped>
li{
  cursor: pointer;
}
</style>
