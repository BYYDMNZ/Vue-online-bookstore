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
        UserType:2,
        page:4
      }
    },
    created(){
          //获取当前用户信息
          //this.UserType = this.$store.state.currentUser.type;
          if(this.UserType==0){//普通用户
            this.page =0;
          }else if(this.UserType==1){//店主
            this.page=1;
          }else if (this.UserType==2){//管理员
            this.page=2;
          }else{
            this.page=3;//游客
          }
       }
    }
</script>

<style scoped>

</style>

