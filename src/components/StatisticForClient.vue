<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <h3>你的购物情况</h3>
        <vue-chart type="radar" :data="chartData" v-if="show"></vue-chart>
      </div>

    <div class="col-sm-12 col-md-6">
      <h3>猜你喜欢</h3>
      <books></books>
    </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import Books from './Books'
    export default {
      name: "StatisticForClient",
      components:{Books},
      data() {
        return {
          show:false
        }
      },
      computed:{
        user(){
          return this.$store.state.currentUser
        },
        chartData(){
          return {
            labels: ["经典名著", "计算机与互联网", "娱乐休闲", "科普读物","生活图书","外语学习"],
            datasets: [{
              label: '购买量(单位 本)',
              data: [],
              borderWidth: 1
            }]
          }
        },
      },
      methods:{
      },
      created(){
          axios.get('/user/statisticForClient?userid='+this.user.userid)
            .then(res=>{
              //console.log(res.data)
              return res.data
            })
            .then(data=>{
                var arr = []
                arr.push(data.obj.classics)
                arr.push(data.obj.it)
                arr.push(data.obj.relaxation)
                arr.push(data.obj.science)
                arr.push(data.obj.life)
                arr.push(data.obj.language)
                //console.log(arr)
              for(let i=0;i<6;i++){
                this.chartData.datasets[0].data[i] = arr[i]
              }
              //console.log(this.chartData.datasets[0].data)
              this.show = true
              this.$store.commit("setBookItems",data.obj.books)
            })
      }
    }
</script>

<style scoped>
.radar{
  margin-top: 30px;
}
</style>
