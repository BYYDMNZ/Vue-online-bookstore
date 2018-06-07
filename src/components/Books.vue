<template>
  <div class="books">
    <ul>
        <li v-for="book in books">
          <router-link :to="'/bookdetail/'+book.id">
            <img class="bookImg" :src="book.img"/>
            <div>
              <p class="bookTitle" >{{book.name}}</p>
              <span class="money">￥{{book.price}}</span>
              <p class="brief">{{book.brief}}</p>
            </div>
          </router-link>
        </li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "Books",
        computed:{
          getBookItems(){//获取书本信息
           // return this.$store.state.bookItems
          }
        },
        data(){
          return{
            books:[
              {id:1,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:2,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:3,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:4,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:5,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:6,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:7,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:8,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:9,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:10,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:11,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:12,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:13,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:14,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:15,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:16,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:17,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:18,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:19,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20},
              {id:20,img:"https://images-cn.ssl-images-amazon.com/images/I/51B0jgsoEEL._SX258_BO1,204,203,200_.jpg",name:"恶意",brief:"东野圭吾著名小说",price:20}
            ]
          }
        }
    }
</script>

<style scoped>
  .books{
    width: 100%;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color:#222;
  }
  ul{
    display: flex;
    flex-wrap:wrap;
    padding: 0;
    list-style: none;
    text-align: center;
  }
  li{
    flex-grow: 1;
    flex-basis:200px;
    padding: 2px;
    margin: 10px 10px;
    cursor: pointer;
    border: 1px solid #eee;
  }
  li:hover{
    border: 1px solid darkgreen;
  }
  .bookImg{
    width: 150px;
    height: 150px;
  }
  .books .bookTitle{
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
  .books .money{
    font-size: 14px;
    color:crimson;
  }
  .books .brief{
    font-size: 13px;
    color:#424242;
  }
</style>
