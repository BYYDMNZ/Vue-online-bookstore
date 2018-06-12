<template>
    <div class="home">
      <div class="bookLogo">
        <img src="../assets/book.png"/>
      </div>
      <div class="container">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="找图书、找分类" v-model="searchString"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="search">搜索</button>
          </div>
        </div>
        <books></books>
      </div>
      <div class="btnBox">
        <button class="btn btn-outline-secondary btn-sm" type="button" @click="prevPage">上一页</button>
        {{page}}
        <button class="btn btn-outline-secondary btn-sm" type="button" @click="nextPage">下一页</button>
      </div>
      <div class="ad">
        <img src="../assets/ad.jpg">
      </div>
      <app-footer></app-footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import Footer from './Footer'
    import Books from './Books'
    export default {
      name: "Home",
      components: {Books,appFooter:Footer},
      data() {
        return {
          page: 1,
          searchString: null
        }
      },
      methods: {
        prevPage() {
          if (this.page <= 1) {
          } else {
            this.page--
            if(this.searchString === null) {
              //   axios.get("/bookstore/book/books?page="+this.page)
              //     .then(res=>{
              //       return res.data
              //     })
              //     .then(data=>{
              //       this.$store.commit("setBookItems",data.book)
              //     })
              // }
              console.log("上一页无查询")
            }else{
              //   axios.get("/searchBook/?search="+this.searchString+"&page="+this.page)
              //     .then(res=>{
              //       return res.data
              //     })
              //     .then(data=>{
              //       this.$store.commit("setBookItems",data.book)
              //     })
              // }
              console.log("上一页有查询")
            }
          }
        },
        nextPage() {
          this.page++
          if(this.searchString === null) {
            //   axios.get("/bookstore/book/books?page="+this.page)
            //     .then(res=>{
            //       return res.data
            //     })
            //     .then(data=>{
            //       this.$store.commit("setBookItems",data.book)
            //     })
            // }
            console.log("下一页无查询")
          }else{
            //   axios.get("/searchBook/?search="+this.searchString+"&page="+this.page)
            //     .then(res=>{
            //       return res.data
            //     })
            //     .then(data=>{
            //       this.$store.commit("setBookItems",data.book)
            //     })
            // }
            console.log("下一页有查询")
          }
        },
        search() {
          console.log(this.searchString)
          //   axios.get("/searchBook/?search="+this.searchString.trim()+"&page="+this.page)
          //     .then(res=>{
          //       return res.data
          //     })
          //     .then(data=>{
          //       this.$store.commit("setBookItems",data.book)
          //     })
          // }
          console.log("第"+this.page+"页查询")
        },
        created() {
          // axios.get("/books")
          //   .then(res=>{
          //     console.log(res.json());
          //     return res.json()
          //   })
          //   .then(data=>{
          //     this.$store.commit("setBookItems",data.book)
          //   })

        }
      }
    }
</script>

<style scoped>
  .home{

  }
.bookLogo{
  margin:5px 0px;
  width:100%;
  height: 200px;
}
.bookLogo img{
  width: 100%;
  height: 100%;
}
.btnBox{
    text-align: center;
  }
.btnBox button{
  margin: 20px;
}
.ad{
  position: fixed;
  right: 0;
  top: 50%;
  width: 100px;
  height: 100px;
}
.ad img{
  width: 100%;
  height: 100%;
}
</style>
