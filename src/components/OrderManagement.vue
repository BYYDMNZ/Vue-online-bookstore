<template>
  <div class="row">
     <div class="col-sm-12 col-md-12">
       <h2>所有订单</h2>
       <ul>
         <li v-for="order in orders">
            <div class="order">
              <p class="orderNumber">{{order.orderNumber}}</p>
              <p>
                <span class="client">购买者: {{order.client}}</span>
                <span class="date">{{order.date}}</span>
                <span class="isDeal">{{order.isDeal===0?'未处理':'已处理'}}</span>
              </p>
              <p>
                <span class="bookMessage"> {{order.books.title}}-{{order.books.num}}本 </span>
              </p>
              <div v-show="order.url" class="kuaididan">
                <p>快递单 : {{order.url}}</p>
              </div>
              <button v-show="order.isDeal===0" type="btn" class="btn btn-sm btn-outline-success" @click="dealOrder(order.orderNumber)">处理订单</button>
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
            // orders:[
            //   {orderNumber:"BH-0001",client:"叶倩",date:"2018-06-13",isDeal:false,books:[{title:"书本1",num:2},{title:"书本2",num:1}]},
            //   {orderNumber:"BH-0001",client:"保营",date:"2018-06-12",isDeal:false,books:[{title:"书本2",num:2},{title:"书本2",num:1}]},
            //   {orderNumber:"BH-0001",client:"多多",date:"2018-06-12",isDeal:false,books:[{title:"书本3",num:2},{title:"书本2",num:1},{title:"书本7",num:5}]},
            //   {orderNumber:"BH-0001",client:"颖苗",date:"2018-06-11",isDeal:false,books:[{title:"书本4",num:2},{title:"书本2",num:1}]},
            //   {orderNumber:"BH-0001",client:"美男子",date:"2018-06-01",isDeal:false,books:[{title:"书本1",num:2}]},
            // ]
            orders:[],
          }
        },
      methods:{
          dealOrder(num){
            //console.log(num);
            axios.get('/orderForm/dealOrder?orderNumber='+ num)
              .then(res=>{
                 for(let i=0;i<this.orders.length;i++){
                   if(num === this.orders[i].orderNumber) {
                       this.orders[i].isDeal = 1
                       this.orders[i].url = res.data.obj
                   }
                 }
                console.log(res)
              })
              .catch()
          },
      },
      created(){
        //获取该店铺的顾客订单信息
        axios.get('/orderForm/orders?userid='+this.user.userid)
          .then(res=>{
            console.log(res.data)
            return res.data
          })
          .then(data=>{
            this.orders = data.obj
          })
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
  .kuaididan{
    font-size: 12px;
    color:#666;
    margin-left: 20%;
  }
  button{
    margin-left: 86%;
  }
  p{
    padding: 0;
    margin: 4px 5px 2px;
  }
  .bookMessage{
    font-size: 14px;
    margin-left: 20px;
    color:crimson;
  }
</style>
