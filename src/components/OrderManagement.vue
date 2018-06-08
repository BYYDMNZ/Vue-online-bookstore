<template>
  <div class="row">
     <div class="col-sm-12 col-md-12">
       <h2>所有订单</h2>
       <ul>
         <li v-for="order in orders">
            <div class="order">
              <p class="orderNumber">{{order.orderNumber}}</p>
              <p>
                <span class="bookTitle">{{order.bookTitle}}</span>
                <span class="bookNumber">{{order.bookNumber}}</span><span style="font-size: 12px">本</span>
                <span class="bookPrice">{{order.bookPrice}}</span><span style="font-size: 12px">RMB/本</span>
                <span class="totalPrice">￥{{order.bookNumber*order.bookPrice}}</span>
              </p>
              <p>
                <span class="client">{{order.client}}</span>
                <span class="date">{{order.date}}</span>
                <span class="isDeal">{{order.isDeal===false?'未处理':'已处理'}}</span>
              </p>
              <button type="btn" class="btn btn-sm btn-outline-success" @click="dealOrder(order.orderNumber)">处理订单</button>
            </div>
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "OrderManagement",
        computed:{
          user(){
            return this.$store.state.currentUser//当前用户
          }
        },
        data(){
          return{
            orders:[
              {orderNumber:"BH-0001",bookTitle:"计算机网络",bookNumber:2,bookPrice:65,client:"叶倩",date:"2018-06-13",isDeal:false},
              {orderNumber:"BH-0002",bookTitle:"计算机网络",bookNumber:2,bookPrice:65,client:"叶倩",date:"2018-06-13",isDeal:false},
              {orderNumber:"BH-0003",bookTitle:"计算机网络",bookNumber:2,bookPrice:65,client:"叶倩",date:"2018-06-13",isDeal:false},
              {orderNumber:"BH-0004",bookTitle:"计算机网络",bookNumber:2,bookPrice:65,client:"叶倩",date:"2018-06-13",isDeal:false},
              {orderNumber:"BH-0005",bookTitle:"计算机网络",bookNumber:2,bookPrice:65,client:"叶倩",date:"2018-06-13",isDeal:false},
            ]
          }
        },
      methods:{
          dealOrder(num){
            //console.log(num);
            var data = {
              orderNumber:num,
              storeId:this.user.userid
            }
            // axios.post('/dealOrder',data)
            //   .then(res=>{
            //   })
            //   .catch()
          }
      },
      created(){
        //获取该店铺的顾客订单信息
        // axios.get('/orders/?userid='+this.user.userid)
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
  ul{
    list-style: none;
  }
  .order{
    border:1px solid #222;
    padding:5px;
    margin:20px 0;
    border-radius: 8px;
  }
  .order .orderNumber{
    font-weight: bold;
    border-bottom: 1px solid darkslategray;
  }
  .bookTitle{
    font-size: 18px;
    border: 1px dotted salmon;
    border-radius: 10px;
    padding: 5px 5px;
    display: inline-block;
  }
  .bookNumber{
    margin-right: 1px;
    font-size: 18px;
    color:darkblue;
    margin-left: 20%;
  }
  .bookPrice{
    margin-left: 20%;
  }
  .totalPrice{
    margin-left: 20%;
    color:crimson;
    font-weight: bold;
    font-size: 18px;
  }
  .client{
    font-size: 13px;
    margin-left: 20%;
    color:grey;
    text-decoration: underline;
    cursor: pointer;
  }
  .date{
    font-size: 13px;
    margin-left: 20%;
  }
  .isDeal{
    font-size: 13px;
    margin-left: 20%;
  }
  button{
    margin-left: 86%;
  }
  p{
    padding: 0;
    margin: 4px 5px 2px;
  }
</style>
