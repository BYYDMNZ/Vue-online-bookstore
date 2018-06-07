<template>
    <div class="consumer">
      <!--个人信息-->
      <div class="row">
          <div class="col-sm-12 col-md-6" style="margin-top: 20px">
            <h2>编辑个人信息</h2>
            <p style="margin-top: 5px;color:crimson;font-size: 12px">注:如果信息正确则无需再次确认编辑</p>
            <form>
              <label>收件人姓名</label>
              <input type="text" v-model="user.username" class="form-control" disabled/>
              <label>联系方式</label>
              <input type="text" v-model="user.phone" class="form-control"/>
              <label>收货地址</label>
              <input v-model="user.address" class="form-control"/>
              <button v-on:click.prevent="put" class="bianji">确认编辑</button>
            </form>
            <div v-if="submitted">信息编辑成功！</div>
          </div>
        <!--订单-->
        <div class="col-sm-12 col-md-6" >
          <div class="orderForm">
            <h2>已购商品</h2>
            <table class="table">
              <thead class="thead-default">
              <tr>
                <th>书名</th>
                <th>单价</th>
                <th>数量</th>
                <th>店铺</th>
                <th>总价</th>
                <th>评价</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="book in orders">
                <td>{{book.title}}</td>
                <td>￥{{book.price}}</td>
                <td>{{book.number}}本</td>
                <td>{{book.bookStore}}</td>
                <td>￥{{book.price * book.number}}</td>
                <td><router-link :to="'/comment/'+book.id"><button class="btn btn-sm btn-danger" >评价</button></router-link></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
</template>

<script>
    import  axios from 'axios'
    export default {
        name: "Consumer",
        data(){
          return{
            orders:[ //已购商品订单
              {id:1,title:"你不知道的js",price:98,number:1,bookStore:"新华书店"},
              {id:2,title:"css代码段",price:55,number:1,bookStore:"新华书店"},
              {id:3,title:"Vue2.0实战",price:87,number:1,bookStore:"新华书店"},
              {id:4,title:"js高级程序设计",price:98,number:1,bookStore:"新华书店"},
              {id:5,title:"图解http",price:66,number:1,bookStore:"新华书店"}
              ],
            user:this.$store.state.currentUser,//当前登录用户
            submitted:null,
          }
        },
      methods:{
          put(){
              //修改用户的个人信息
              axios.get('/change/?userid='+this.user.userid+'&phone='+this.user.phone+'&address='+this.user.address)
                .then(res=> {
                  if(res.json().changed===true)
                      this.submitted=true;
                  else
                    alert("信息修改失败")
                })
                .catch(err=>{
                  alert("信息修改失败")
                })

          },

      },
      created(){
          this.submitted = false;
          //获取已购商品订单信息
          // axios.get('/bought/?userid='+this.user.userid)
          //   .then(res=>{
          //     return res.json()
          //   })
          //   .then(data=>{
          //     this.orders = data
          //   })
      }
    }
</script>

<style scoped>
.consumer *{
  box-sizing: border-box;
}
.consumer label{
  display: block;
  margin:10px 0 10px;
  font-weight: bold;
}
.consumer .bianji{
  display: block;
  margin:20px 0;
  color:#fff;
  padding:5px;
  border-radius:4px;
  cursor: pointer;
  background: darkgreen;
}
</style>
