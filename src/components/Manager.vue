<template>
    <div class="container">
      <div class="my-3 p-3 bg-white rounded box-shadow">
        <h6 class="border-bottom border-gray pb-2 mb-0">用户列表</h6>
        <div class="media text-muted pt-3" v-for="user in users">
          <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" class="mr-2 rounded">
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark" style="font-size: 18px">{{user.username}}</strong>
            类型：{{user.type | change}}
          </p>
          <button class="btn btn-sm" :class="{red:user.status,green:!user.status}" @click="changeStatus(user.userid,user.status)">{{user.status | guanli}}</button>
        </div>

        <small class="d-block text-right mt-3">
          <a href="#">管理</a>
        </small>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Manager",
        data(){
          return{
            users:[
              {userid:1,username:"不一样的美男子",type:0,status:true},
              {userid:2,username:"刘人语出道吧",type:1,status:true},
              {userid:3,username:"朴志训好靓仔",type:1,status:false},
              {userid:4,username:"多多",type:0,status:true},
              {userid:5,username:"北部湾的落日",type:0,status:false},
              {userid:6,username:"BYYDMNZ",type:0,status:true}
            ],
          }
        },
        created(){
            // axios.get('/allUsers')
            //   .then()
        },
        filters:{
          change(value){
            if(value===0)
              return "顾客"
            else
              return "店主"
          },
          guanli(value){
            if(value)
              return "禁用账号"
            else
              return "恢复账号"
          }
        },
        methods:{
          changeStatus(id,status){
              var data = {
                userid:id,
                status:status
              }
              console.log(data);
              // axios.post('/changeStatus',data)
              //   .then(()=>{
              //     for(let i = 0;i<this.users.length;i++){
              //       if(this.users[i].userid === id)
              //         this.users[i].status = !this.users[i].status
              //     }
              //   })
          }
        }
    }
</script>

<style scoped>
.red{
  background-color: crimson;
  color: #fff;
}
.green{
  background-color: forestgreen;
  color: #fff;
}
button:hover{
  opacity: 0.7;
}
</style>
