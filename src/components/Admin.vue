<template>
  <div class="container">
    <OrderManagement v-if="page==0"></OrderManagement>
    <Manager v-if="page==1"></Manager>
    <Cart v-if="page==2"></Cart>
  </div>
</template>

<script>
    import OrderManagement from "./OrderManagement";
    import Manager from "./Manager";
    import Cart from "./Cart";
    export default {
        name: "Admin",
        components: {Cart, Manager, OrderManagement},
      data(){
        return{
          UserType:0,
          page:4
        }
      },
      created(){
        //获取当前用户信息
        //this.UserType = this.$store.state.currentUser.type;
        if(this.UserType==0){//普通用户
          this.page =2;
        }else if(this.UserType==1){//店主
          this.page=0;
        }else if (this.UserType==2){//管理员
          this.page=1;
        }else{
          this.page=3;//游客
        }
      }
    }
</script>

<style scoped>

</style>
