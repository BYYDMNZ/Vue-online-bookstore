<template>
    <div class="bookDetail">
        <Alert v-show="alerted" @closedTheAlert="closeAlert" :txt="txt"></Alert>
        <router-view></router-view>
        <div class="container">
          <div class="row mt-5">
            <div class="col-md-4 box">
              <img :src="book.imgUrl" class="imgClass"/>
            </div>
            <div class="col-md-8 book">
              <div class="name">{{book.title}}<span class="publisher">{{book.publisher}} {{book.publishDate}}</span></div>

              <p class="author">{{book.author}}</p>
              <p class="pands">折扣价：
                <span class="price">￥{{book.price}}</span>
                <span class="salesVolume">销量: {{book.salesVolume}}</span>
                <span class="stock">库存: {{book.stock}}</span>
              </p>
              <p class="bookstore">{{book.bookStore}}</p>
              <p class="fromAddress">发货地: {{book.fromAddress}}</p>
              <h6>简介：</h6>
              <p class="brief">{{book.intro}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8 button">
              <button type="button" class="btn  btn-info btn-sm" style="margin-right: 20px" @click="addToCart">加入购物车</button>
              <button type="button" class="btn btn-danger btn-sm" @click="buy">立即购买</button>
            </div>
          </div>
          <hr/>
          <!--评论区-->
          <div class="comments">
            <h5 style="font-weight: bold">热门买家评论</h5>
            <div class="comment" v-for="comment in comments">
              <p><img src="./../assets/icon.png"/><span style="font-size: 13px;margin-left: 8px">{{comment.username}}</span></p>
              <p><span class="start">{{comment.start}}星</span><span class="date">{{comment.date}}</span></p>
              <p class="brief">{{comment.intro}}</p>
              <span class="help">有帮助</span><span class="help">没用</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Alert from "./Alert";
    export default {
      name: "BookDetail",
      components: {Alert},
      data: function () {
        return {
          //弹窗
          alerted:false,
          txt:"加入购物车成功",
          //数据
          bookId: this.$route.params.id,
          book:{},
          comments:[]
          // book: {
          //   id: 2,
          //   type: "童话小说",
          //   imgUrl: "https://images-cn.ssl-images-amazon.com/images/I/51z40QXC7SL._SX258_BO1,204,203,200_.jpg",
          //   title: "肚子里有个火车站",
          //   author: "安娜.鲁斯曼",
          //   price: 69.30,
          //   bookStore: "叶倩的店",
          //   fromAddress: "广东广州天河区",
          //   publisher: "中国邮电出版社",
          //   publishDate: "2015-01-21",
          //   salesVolume: 20000,
          //   stock: 3000,
          //   intro: "《肚子里有个火车站》茱莉娅吃得太多、太快，所以她的肚子里出事了!饭菜一大块一大块地掉进肚子火车站里，堆得像小山一样高。这可害惨了肚子里的小精灵们，他们冒着被砸晕的危险拼命干活，想把这些食物统统装上火车，送到弯弯曲曲的隧道里去。可是没想到，还有更大的暴风雪在等着他们。他们游行示威、罢工抗议……肚子火车站里一片混乱。小精灵们能渡过这个难关吗？这本独具创意的图画书会带领读者参观肚子火车站，以一种极其有趣的方式使我们了解自己的消化系统，从而帮助我们养成健康的饮食习惯。"
          // },
          // comments:[
          //   {username:"叶倩",start:5,intro:"宝宝很喜欢，不错哦",date:"2018-06-05"},
          //   {username:"叶倩",start:5,intro:"宝宝很喜欢，不错哦",date:"2018-06-05"},
          //   {username:"叶倩",start:5,intro:"宝宝很喜欢，不错哦",date:"2018-06-05"},
          //   {username:"叶倩",start:5,intro:"宝宝很喜欢，不错哦",date:"2018-06-05"},
          //   {username:"叶倩",start:5,intro:"宝宝很喜欢，不错哦",date:"2018-06-05"},
          // ],
        }
      },
      created() {
           axios.get("/book/one?bookId="+this.bookId)
             .then((res)=>{
              // console.log(res.data)
               return res.data
             })
             .then(data=>{
                this.book = data.obj
             })
             .catch(err=>{
               console.log(err)
             })
            axios.get("/commet/comments?bookid="+this.bookId)
              .then((res)=>{
                console.log(res.data)
                return res.data
              })
              .then(data=>{
                this.comments=data.obj
              })
           document.documentElement.scrollTop = 0;
           // console.log(this.currentUser)
      },
      methods:{
        addToCart(){
          if(this.currentUser===null){
            alert("请先登录")
            this.$router.push({name:'login'})
          }else {
            var data = {
              userid: this.currentUser.userid,
              bookid: this.bookId,
            }
            //console.log(data);
            axios.post('/addtocart', data)
              .then((res)=>{
                this.alerted = true
              })
              .catch()
          }
        },
        buy(){
          if(this.currentUser===null){
            alert("请先登录")
            this.$router.push({name:'login'})
          }else {
            this.$store.commit("setCurrentBook", this.book)//数据同步到store
            this.$router.push({name:'immediatelybuy'})
          }
        },
        closeAlert(){
          this.alerted = false
        }
      },
      computed:{
        currentUser(){
          return this.$store.state.currentUser
        }
      }
    }
</script>

<style scoped>
.book .name{
  font-size: 20px;
  font-weight: bold;
}
  .book .author{
    font-size: 14px;
    color:darkblue;
    margin-top: 5px;
    cursor: pointer;
  }
 .box .imgClass{
  width: 250px;
   height: 300px;

  }
.book .publisher{
  font-size: 14px;
  color:#222;
  margin-left: 5px;
}
  .book .pands{
    font-size: 14px;
    color:darkred;
    font-weight: bold;
  }
  .book .price{
    display: inline-block;
    width: 80px;
    height: 20px;
    border: 1px solid chocolate;
    border-radius: 8px;
    text-align: center;
    line-height: 20px;
    color: crimson;
    font-weight: bold;
  }
  .book .pands .stock,  .book .pands .salesVolume{
    color: #222;
    font-weight: normal;
    font-size:12px;
    margin-left: 20px;
  }
  .book .bookstore{
    font-size: 15px;
    color:darkmagenta;
    cursor: pointer;
  }
  .book .fromAddress{
    font-size: 15px;
  }
  .comment{
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px dashed #666;
  }
  .comment p{
    margin: 0;
    padding: 0;
  }
  .comment .date{
    font-size: 14px;
    color:#666;
  }
  .comment .brief{
    margin-top: 3px;
    font-size: 15px;
  }
  .comment .help{
    margin: 10px 10px 0px 0px;
    display: inline-block;
    border: 1px solid #666;
    text-align: center;
    line-height: 20px;
    background: #eee;
    width: 90px;
    height: 20px;
    font-size: 12px;
    border-radius: 2px;
    cursor: pointer;
  }
.comment .help:hover{
  background: palevioletred;
}
.comment .start{
  font-size: 14px;
  margin-right: 20px;
  margin-left: 5px;
  color:firebrick;
}
</style>
