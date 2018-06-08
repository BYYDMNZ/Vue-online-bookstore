<template>
  <div>
    <StatisticForClient v-if="page==0"></StatisticForClient>
    <StatisticForShopkeeper v-if="page==1"></StatisticForShopkeeper>
    <StatisticForManager v-if="page==2"></StatisticForManager>
  </div>
</template>

<script>
  import StatisticForClient from "./StatisticForClient";
  import StatisticForShopkeeper from "./StatisticForShopkeeper";
  import StatisticForManager from  './StatisticForManager'
  export default {
    name: "Statistic",
    components: {StatisticForShopkeeper, StatisticForClient,StatisticForManager},
    data(){
      return{
        page:4
      }
    },
    computed:{
      currentUser(){
        return this.$store.state.currentUser
      }
    },
    created(){
          //获取当前用户信息
          var type = this.currentUser.type
          if(type===0){//普通用户
            this.page =0;
          }else if(type===1){//店主
            this.page=1;
          }else if (type===2){//管理员
            this.page=2;
          }else{
            this.page=3;//游客
          }
       }
    }
</script>

<style scoped>

</style>

