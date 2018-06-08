<template>
  <div>
    <div class="shopkeeper row">
        <div class="col-sm-12 col-md-6">
          <form @submit.prevent="onSubmit">
            <h3 class="text-muted my-5">上架图书</h3>
            <div class="form-group row">
              <label class="col-sm-3" >图片链接</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" v-model="book.imgUrl" placeholder="https://images-cn.ssl-images-amazon.com/images/I/51ODL-Z7aSL._SX258_BO1,204,203,200_.jpg"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">书名</label>
              <div class="col-sm-9">
                <input class="form-control" v-model="book.title" placeholder="我的第一套拉鲁斯百变互动小百科(套装共3册)"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">分类</label>
              <div class="col-sm-9">
                <input  class="form-control" v-model="book.type" placeholder="少儿百科"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">价格</label>
              <div class="col-sm-9">
                <input  class="form-control" v-model="book.price" placeholder="331.80"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">作者</label>
              <div class="col-sm-9">
                <input class="form-control" v-model="book.author" placeholder="索菲·德穆兰海姆"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">出版社</label>
              <div class="col-sm-9">
                <input  class="form-control" v-model="book.publisher" placeholder="中信出版社"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">出版日期</label>
              <div class="col-sm-9">
                <input class="form-control" v-model="book.publishDate" placeholder="2018-05-01"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">库存量</label>
              <div class="col-sm-9">
                <input  class="form-control" v-model="book.salesVolume" placeholder="2000"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">销量</label>
              <div class="col-sm-9">
                <input  class="form-control" v-model="book.stock" placeholder="30000"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3">简介</label>
              <div class="col-sm-9">
                <textarea rows="5" class="form-control" v-model="book.intro" placeholder="我的第一套拉鲁斯百变互动小百科》是一套低幼认知百科立体互动书，适合2—6岁孩子阅读使用。该系列出自享誉全球的法国百年科普名社拉鲁斯，包含《这是为什么？》《这是怎么回事？》《它们从哪里来？》3册。深入浅出的百科知识、立体直观的互动形式，都能让小读者大开眼界。以儿童的方式提出、思考并解答问题，符合该年龄段认知水平，是儿童开始了解身边世界的“低幼版十万个为什么”。"></textarea>
              </div>
            </div>
            <div class="form-group row">
              <button class="btn btn-success btn-block" type="submit" >添加</button>
            </div>
          </form>
        </div>
      <div class="col-sm-12 col-md-6">
        <h3 class="text-muted my-5">下架图书</h3>
        <ul>
          <li v-for="book in booksInAStore">
              <img class="bookImg" :src="book.imgUrl" width="100px" height="100px"/>
              <div class="book">
                <p style="font-weight: bold">{{book.title}}</p>
                <p style="font-size: 12px;color: darkred">￥{{book.price}}</p>
                <button type="button" class="btn btn-danger btn-sm deleted" @click="deleteBook(book.id)">X</button>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Shopkeeper",
        data(){
          return{
            book:{},
            booksInAStore:[
              {id:1,imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",title:"恶意",price:20},
              {id:2,imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",title:"恶意",price:20},
              {id:3,imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",title:"恶意",price:20},
              {id:4,imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",title:"恶意",price:20},
              {id:5,imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",title:"恶意",price:20},
              {id:6,imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",title:"恶意",price:20},
              {id:7,imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",title:"恶意",price:20},
              {id:8,imgUrl:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",title:"恶意",price:20}
            ]
          }
        },
        computed:{
          currentUser(){
            return this.$store.state.currentUser
          }
        },
        methods: {
          onSubmit() {
            //上架图书
            var book = {
              imgUrl: this.book.imgUrl,
              title: this.book.title,
              type: this.book.type,
              price: this.book.price,
              author: this.book.author,
              publisher: this.book.publisher,
              publishDate: this.book.publishDate,
              stock: this.book.stock,
              salesVolume: this.book.salesVolume,
              intro: this.book.intro,
              bookStoreId: this.currentUser.userid
            }
            //this.booksInAStore.push(book)
            //console.log(book)
            axios.post('/upBook', book)
              .then(()=>{
                //刷新页面
              })
              .catch()
          },
          deleteBook(id) {
            var data = {
              bookid: id,
              bookStore: this.currentUser.userid
            }
            axios.post('/downBook', data)
              .then(()=>{
                //刷新页面
              })
              .catch()
          },
        },
      created(){
          // axios.get('/booksinstore/?'+this.currentUser.userid)
          //   .then(res=>{return res.json()})
          //   .then(date=>{this.booksInAStore=data})
      }
    }
</script>

<style scoped>
  ul{
    display: flex;
    flex-wrap:wrap;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  li{
    flex-grow: 1;
    flex-basis:80px;
    margin: 10px;
    padding: 2px;
    cursor: pointer;
    border: 1px solid #eee;
    position: relative;
  }
  .book p{
    margin: 0;
    padding: 0;
  }
  .book .deleted{
    position: absolute;
    right: 0px;
    top: 0px;
    width: 25px;
    height: 25px;
  }
</style>
