<template>
    <div class="container">
      <consumer v-if="page===0"></consumer>
      <shopkeeper v-if="page===1"></shopkeeper>
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
          console.log(type)
          if(type===0){
            this.page =0;
          }else if(type===1){
            this.page=1;
          }else if (type===2){
            this.page=2;
          }else{
            this.page=3
          }
      }
    }
</script>

<style scoped>

</style>
