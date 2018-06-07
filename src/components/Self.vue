<template>
    <div class="container">
      <consumer v-if="page==0"></consumer>
      <shopkeeper v-if="page==1"></shopkeeper>
    </div>
</template>

<script>
    import Consumer from './Consumer'
    import Shopkeeper from  './Shopkeeper'
    export default {
      name: "Self",
      components:{
        Shopkeeper,
        Consumer
      },
        data(){
          return{
            UserType:0,
            page:4
          }
        },
      created(){
          //获取当前用户信息
          //this.UserType = this.$store.state.currentUser.type;
          if(this.UserType==0){
            this.page =0;
          }else if(this.UserType==1){
            this.page=1;
          }else if (this.UserType==2){
            this.page=2;
          }else{
            this.page=3
          }
      }
    }
</script>

<style scoped>

</style>
