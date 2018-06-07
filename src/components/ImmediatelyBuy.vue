<template>
    <div>
      <Alert v-show="alerted" @closedTheAlert="closeAlert" :txt="txt"></Alert>
      <router-view></router-view>
    <div class="immediatelyBuy container">
        <div class="order">
            <h6 style="font-weight: bold;">确认订单信息</h6>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="book.imgUrl" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title " style="font-weight: bold">{{book.name}}</h5>
              <div class="card-text">
                <p><span>书名: </span> {{book.title}}</p>
                <p><span>店铺: </span> {{book.bookStore}}</p>
                <p><span>单价: </span> ￥{{book.price}}</p>
                <p><span>数量: </span>
                <button class="btn btn-sm btn-outline-primary" @click="subNumber">-</button>{{number}}
                <button class="btn btn-sm btn-outline-primary" @click="addNumber">+</button>
                </p>
                <p><span>应付: ￥</span><span style="color:crimson;font-size: 14px;font-weight: bold;"> {{Math.floor(book.price*number)}}</span><span style="font-size: 12px ;color:#222;margin-left: 20px">已优惠 ￥{{(book.price*number-Math.floor(book.price*number)).toFixed(2)}}</span></p>
                <p><span>收货人: {{currentUser.username}}</span></p>
                <p><span>手机号:{{currentUser.phone}}</span></p>
                <p><span>收货地址: {{currentUser.address}}</span></p>
              </div>
              <button type="button" class="btn btn-success" @click="confirm">确认订单</button>
              <router-link :to="{name:'self'}"><button type="button" class="btn btn-sm btn-outline-danger" style="margin-left: 30px">信息有误</button></router-link>
            </div>
          </div>
        </div>
      <div class="box" v-show="makeSure">
        <div class="box1">
          <button class="close" @click="closeTheBox">X</button>
          <p >需支付金额:<span>￥{{Math.floor(book.price*number)}}</span></p>
          <button type="button" class="btn btn-block btn-warning" @click="pay">支付</button>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    import Alert from "./Alert";
    export default {
        name: "ImmediatelyBuy",
        components: {Alert},
        data(){
          return{
            //弹窗
              alerted:false,
              txt:"支付成功",
            //数据
              number:1,
              book:{},
              currentUser:{},
              makeSure:false,
              // book:{
              //   imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51z40QXC7SL._SX258_BO1,204,203,200_.jpg",
              //   name:"肚子里有个火车站",
              //   price:69.30,
              //   bookstore:"叶倩的店",
              // },
          }
        },
      methods:{
          subNumber(){
            if(this.number>1){
              this.number--;
            }
          },
          addNumber(){
            this.number++;
          },
          confirm(){
              this.makeSure = true
          },
          pay(){
            var order = {
              userid:this.currentUser.userid,
              bookid:this.book.id,
              number:this.number,
              bookStore:this.book.bookStore,
              date:new Date().getTime(),
            }
            console.log(order);
            // axios.post('/confirmOrder',order)
            //   .then((res)=>{
            //     console.log(res)
            //
            //   })
            //   .catch((err)=>{
            //     console.log(err)
            //   })
            document.documentElement.scrollTop = 0
            this.alerted = true
          },
        closeTheBox(){
          this.makeSure = false
        },
        closeAlert(){
          this.alerted = false
          this.makeSure = false
        }
      },
      created(){
          this.currentUser=this.$store.state.currentUser
          this.book=this.$store.state.currentBook
          this.makeSure = false
      },
    }
</script>

<style scoped>
.order{
  position: absolute;
  left: 50%;
  transform: translate(-50%,0);
}
  .box{
    width: 400px;
    height: 200px;
    border: 1px solid #eee;
    background: #eee;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top:65%;
    transform: translate(-50%,0);
  }
  .box1{
    text-align: center;
  }
  .box1 p{
    font-size: 25px;
  }
.close{
  display: inline-block;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
