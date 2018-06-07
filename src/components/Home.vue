<template>
    <div class="home">
      <div class="bookLogo">
        <img src="../assets/book.png"/>
      </div>
      <div class="container">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="找图书、找分类" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">搜索</button>
          </div>
        </div>
        <books></books>
      </div>
      <div class="btnBox">
        <button class="btn btn-outline-secondary btn-sm" type="button" @click="prevPage">上一页</button>
        <button class="btn btn-outline-secondary btn-sm" type="button" @click="nextPage">下一页</button>
      </div>
      <div class="ad">
        <img src="../assets/ad.jpg">
      </div>
    </div>
</template>

<script>
    import Books from './Books'
    export default {
        name: "Home",
        components:{Books},
        methods:{
          prevPage(){},
          nextPage(){}
        },
        created(){
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
</script>

<style scoped>
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
