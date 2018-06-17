<template>
  <div class="row mt-3">
    <div class="col-md-4 col-lg-4 register">
      <div class="card" style="padding: 20px">
        <h3>注册</h3>
        <div class="card-body">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label>用户名</label>
              <input type="text" class="form-control" v-model="username" name="username"/>
            </div>
            <div class="form-group">
              <label >手机号码</label>
              <input type="text" class="form-control" v-model="phone" name="phone"/>
            </div>
            <div class="form-group">
              <label >地址</label>
              <input type="text" class="form-control" v-model="address" name="address"/>
            </div>
            <div class="form-group">
              <label>密码</label>
              <input type="password" class="form-control" v-model="password" name="password"/>
            </div>
            <div class="form-group">
              <label>确认密码</label>
              <input type="password" class="form-control" v-model="repassword" name="repassword"/>
            </div>
            <div class="form-group">
              <label>类型</label>
              <select class="form-control" v-model="type">
                <option value="0">普通用户</option>
                <option value="1">店主</option>
              </select>
            </div>
            <button type="submit" class="btn btn-block btn btn-warning">注册</button>
            <hr/>
            <p style="font-size: 12px; color:#222;text-align:center;" >已有账号？</p>
            <router-link :to="{name:'login'}"><button class="btn btn-block btn btn-secondary">登录</button></router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        phone: "",
        address: "",
        password: "",
        repassword: "",
        type: 0
      }
    },
    methods: {
      onSubmit() {
            var user = {
              username:this.username,
              phone:this.phone,
              address:this.address,
              password:this.password,
              repassword:this.repassword,
              type:this.type
            }
            axios.post('/user/register',user)
              .then(res=>{
                console.log(res.data)
                var success = res.data.success
               // console.log(success)
                if(success===true){
                    this.$router.push({name:'login'})
                 }else{
                     alert(res.data.obj);
                }

           })
      },
    },
    created(){
      this.$store.commit("logout")
    }
  }
</script>

<style scoped>
  .register{
    position: absolute;
    left: 50%;
    transform: translate(-50%,5%);
  }

</style>
