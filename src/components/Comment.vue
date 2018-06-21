<template>
    <div class="container wrap">
      <Alert v-show="alerted" @closedTheAlert="closeAlert" :txt="txt"></Alert>
      <router-view></router-view>
      <p style="border-bottom: 1px solid #eee">动态评分平台</p>
        <div class="box row">
          <div class="book col-sm-12 col-md-6">
            <img :src="book.imgUrl" />
            <span class="title">{{book.title}}</span>
            <span class="author">{{book.author}}</span>
            <span class="date">{{book.date}}   下单</span>
          </div>
          <div class="comment col-sm-12 col-md-6">
            <form @submit.prevent="onSubmit">
              <p class="score">请打分:5分为最高分</p>
              <select v-model="start" class="form-control" style="margin-bottom: 10px">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
              <textarea class="form-control" rows="8" placeholder="请输入你的评价" v-model="brief"></textarea>
              <button class="btn btn-sm btn-success button" type="submit">提交</button>
            </form>
          </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Alert from "./Alert";
    export default {
        name: "Comment",
        components: {Alert},
        data(){
          return{
            //弹窗
            alerted:false,
            txt:"评论成功",
            //数据
            commentid:0,
            bookId:this.$route.params.id,
            currentUser:this.$store.state.currentUser,
            start:5,
            brief:null,
            // book:{
            //   imgUrl: "https://images-cn.ssl-images-amazon.com/images/I/51z40QXC7SL._SX258_BO1,204,203,200_.jpg",
            //   title: "肚子里有个火车站",
            //   author: "安娜.鲁斯曼",
            //   date:"2018-06-05"
            // }
            book:{}
          }
        },
      methods:{
        onSubmit(){
          var data = {
            commentid: this.commentid,//新增的评论的id默认为0
            userid:this.currentUser.userid,
            bookid:this.bookId,
            date:new Date().getTime(),
            start:this.start,
            comment:this.brief
          }
          console.log(data)
          // axios.post('/commet/update',data)
          //   .then()
          //   .catch()
          this.alerted = true
        },
        closeAlert(){
          this.alerted = false
        }
      },
      created(){
          axios.get('/comet/insert?userid='+this.currentUser.userid+'&bookid='+this.bookId)
            .then((res)=>{
              console.log(res.data)
            })
        // console.log(this.currentUser.userid+" "+this.bookId)

      }
    }
</script>

<style scoped>
.wrap{
  border: 1px solid #eee;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
}
.title{
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 40px;
}
  .author{
    position: absolute;
    left: 50%;
    top: 100px;
    color:darkblue;
  }
  .date{
    position: absolute;
    left: 50%;
    top: 280px;
    font-size: 12px;
  }
  .score{
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: firebrick;
  }
  .button{
    position: absolute;
    right: 15px;
    bottom: 0px;
  }
</style>
