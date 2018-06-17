<template>
  <div class="row mt-3">
    <div class="col-md-4 col-lg-4 login">
      <div class="card" style="padding: 20px">
        <h3>登录</h3>
        <div class="card-body">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label>用户名</label>
              <input type="text" class="form-control" v-model="username" name="username"/>
            </div>
            <div class="form-group">
              <label>密码</label>
              <input type="password" class="form-control" v-model="password" name="password"/>
            </div>
            <button type="submit" class="btn btn-block btn btn-warning">登录</button>
            <div class="form-group">
              <div class="remenber">
                 <input type="checkbox"/>
                 <span>记住登录状态</span>
              </div>
            </div>
            <hr/>
            <p style="font-size: 12px; color:#222;text-align:center;" >新用户？</p>
            <router-link :to="{name:'register'}"><button class="btn btn-block btn btn-secondary">注册</button></router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
   // import qs from 'qs'
    export default {
        name: "Login",
        data(){
          return{
            username:"",
            password:""
          }
        },
      methods:{
        onSubmit(){
            var user = {
              username:this.username,
              password:this.password
            }
            // console.log(user)
            // console.log(JSON.stringify(user))
            // console.log(qs.stringify(user))
            axios.post("/user/login",user)
              .then(res=>{
                return res.data
              })
              .then(data=>{
                if(data.success === true) {
                  this.$store.commit("setCurrentUser", data.obj)
                  this.$store.commit("setToken", true)
                  //console.log(this.$store.state.currentUser)
                  this.$router.push({name: 'home'})
                }else{
                  alert(data.obj)
                }
              })
              .catch(err=>{
                console.log(err)
              })
              // .then(data=>{
              //   console.log(data)
              //   // var user = {
              //   //
              //   // }
              //   // this.$store.commit("setCurrentUser",user)
              // })
            // var data = {
            //   userid:1,
            //   username:"不一样的美男子",
            //   phone:"12347285826",
            //   type:0,
            //   address:"华南农业大学"
            // }
          //this.$store.commit("setCurrentUser",data)
          //this.$store.commit("setToken",true)
    }
      },
      created(){
        this.$store.commit("logout")
      }
    }
</script>

<style scoped>
  .login{
    position: absolute;
    left: 50%;
    transform: translate(-50%,10%);
  }
.remenber{
  margin-top: 6px;
  height: 14px;
  line-height: 14px;
}
.remenber input{
  margin-top: 8px;
}
.remenber span{
  font-size: 14px;
  margin-left: 2px;
}
</style>
