<template>
  <div>
    <Alert v-show="alerted" @closedTheAlert="closeAlert" :txt="txt"></Alert>
    <router-view></router-view>
  <div class="row" >
      <div class="col-sm-12 col-md-12 cart" style="margin-top: 20px">
        <h2>购物车</h2>
        <button class="btn btn-sm btn-outline-primary" @click="saveBaskets">保存购物车信息</button>
        <span style="color:crimson;font-size:12px">注：离开页面前先保存防止数据丢失哦</span>
        <ul>
          <li v-for="book in baskets">
            <img :src="book.imageUrl" class="imgClass">
            <div class="message">
              <p style="font-size: 16px;font-weight: bold;">{{book.title}}</p>
              <p><span style="font-size: 14px;color:#222;margin-left: 5px">{{book.author}}</span></p>
              <p style="font-size: 15px;color:purple;margin-top: 5px">店铺：{{book.bookStore}}</p>
              <p style="margin-top: 20px">
                <a href="#" style="color: darkred;font-size: 12px;text-decoration:underline" @click.prevent="deleteBook(book.id)">删除</a>
                <span>|</span>
                <a href="#" style="color: grey;font-size: 12px" >移入收藏夹</a>
              </p>
            </div>
            <div class="price">
              ￥{{book.price}}
            </div>
            <div class="number">
              <button type="button" class="btn btn-outline-secondary btn-sm" style="border-radius: 50%" @click="subNumber(book.id)">-</button>
              {{book.number}}
              <button type="button" class="btn btn-outline-secondary btn-sm" style="border-radius: 50%" @click="addNumber(book.id)">+</button>
            </div>
          </li>
        </ul>
        <div class="totalPrice">小计：￥{{totalPrice}}</div>
        <button class="btn btn-danger btn-lg button" @click="confirm">结算</button>
      </div>
    <!--弹窗-->
      <div class="box" v-show="makeSure">
        <div class="box1">
          <button class="close" @click="closeTheBox">X</button>
          <p >需支付金额:<span>￥{{totalPrice}}</span></p>
          <button type="button" class="btn btn-block btn-warning" @click="pay">支付</button>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import Alert from "./Alert";
    export default {
        name: "Cart",
        components: {Alert},
         data(){
        return{
          //弹窗
          alerted:false,
          txt:"支付成功",
          //数据
          makeSure:false,
          components: {Alert},
          // baskets:[//购物车
          //   {id:1,imgUrl:"https://images-cn-4.ssl-images-amazon.com/images/I/51PpPAw86DL._SS100_.jpg",title:"你一定找不到",bookStore:"叶倩的店",price:127,number:1,author:"洛朗·里夏尔"},
          //   {id:2,imgUrl:"https://images-cn-4.ssl-images-amazon.com/images/I/51PpPAw86DL._SS100_.jpg",title:"书本2",bookStore:"叶倩的店",price:127,number:1,author:"洛朗·里夏尔"},
          //   {id:3,imgUrl:"https://images-cn-4.ssl-images-amazon.com/images/I/51PpPAw86DL._SS100_.jpg",title:"书本3",bookStore:"叶倩的店",price:127,number:1,author:"洛朗·里夏尔"},
          //   {id:4,imgUrl:"https://images-cn-4.ssl-images-amazon.com/images/I/51PpPAw86DL._SS100_.jpg",title:"书本4",bookStore:"叶倩的店",price:127,number:1,author:"洛朗·里夏尔"},
          // ],
          baskets:[],
        }
      },
      computed:{
        totalPrice(){
          let price = 0;
          for(let i=0;i<this.baskets.length;i++){
            price+= this.baskets[i].number*this.baskets[i].price
          }
          return price
        },
        user(){
          return this.$store.state.currentUser
        }
      },
      methods:{
        subNumber(id){
          for(let i=0;i<this.baskets.length;i++){
            if(id === this.baskets[i].id){
              if(this.baskets[i].number>1) {
                this.baskets[i].number--;
              }
            }
          }
          //this.saveBaskets()
        },
        addNumber(id){
          for(let i=0;i<this.baskets.length;i++){
            if(id === this.baskets[i].id){
              this.baskets[i].number++;
            }
          }
         // this.saveBaskets()
        },
        deleteBook(id){
          for(let i=0;i<this.baskets.length;i++){
            if(id===this.baskets[i].id){
              this.baskets.splice(i,1);
            }
          }
         // this.saveBaskets()
        },
        saveBaskets(){
            var list={
              baskets:this.baskets,
              userid:this.user.userid
            }
            console.log(list)
            axios.post('/cart/savecart',list)
              .then(res=>{
                console.log(res)
                alert("保存成功")
              })
              .catch(err=>{
                console.log(err)
              })
        },
        confirm(){
          this.makeSure = true
        },
        pay(){
          document.documentElement.scrollTop = 0
          //生成购物车订单
           var books = []
           for(let i=0;i<this.baskets.length;i++){
              var book = this.baskets[i].bookid
              var num = this.baskets[i].number
              books.push({bookid:book,number:num});
           }
           var order = {
              userid:this.user.userid,
              books:books,
              date:new Date().getTime()
           }
           console.log(order)
          axios.post('/cart/buyAll',order)
            .then(()=>{
              //清空购物车
              this.baskets = [];
            })
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
        //获取当前用户的个人信息
        //this.user = this.$store.state.currentUser
        //console.log(this.user)
        //获取购物车信息
        axios.get('/cart/cart?userId='+this.user.userid)
          .then(res=>{
            console.log(res.data)
            return res.data
          })
          .then(data=>{
            this.baskets = data.obj
          })
        this.makeSure = false
      },

    }
</script>

<style scoped>
  .cart ul{
    width:100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .cart ul li{
    width: 100%;
    border:1px solid #eee;
    border-radius: 8px;
    margin: 10px;
    padding: 5px;
  }
  .cart ul li::after{
    content:"";
    display: block;
    clear: both;
  }
  .cart ul li img{
    float: left;
    display: inline-block;
    margin-right: 20px;
    width: 100px;
    height: 150px;
  }
  .cart ul li .message{
    float: left;
  }
  .cart ul li .price{
    float: left;
    margin-top: 30px;
    margin-left: 20%;
    font-size: 18px;
    font-weight: bold;
    color:crimson;
  }
  .cart ul li p{
    margin: 0;
    padding: 0;
  }
  .cart ul li .number{
    float: left;
    margin-top: 30px;
    margin-left: 20%;
  }
  .totalPrice{
    color: crimson;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    right: 100px;
    border: 1px solid #222;
    padding: 10px;
    border-radius: 8px;
  }
  .button{
    position: absolute;
    right: 0px;
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
    top:50%;
    transform: translate(-50%,-50%);
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
