<template>
  <div class="container all">
    <div class="card mb-4 box-shadow mt-2">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">店铺总营业额</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">￥{{totalMoney}} <small class="text-muted">/RMB</small></h1>
      </div>
    </div>
    <div class="card mb-4 box-shadow">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">畅销书排行版</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">前3 <small class="text-muted">/ 倒序（高-低）</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li v-for="book in books">{{book.title}}--{{book.num}}</li>
        </ul>
      </div>
    </div>
    <div class="box">
       <vue-chart type="line" :data="chartData"></vue-chart>
    </div>
  </div>
</template>

<script>
  import VueChart from 'vue-chart-js'
  import axios from 'axios'
    export default {
      name: "StatisticForShopkeeper",
      components: {
        VueChart
      },
      data() {
        return {
          chartData: {
            labels: ["第一季度", "第二季度", "第三季度", "第四季度"],
            datasets: [{
              label: '季度店铺营业额(单位 元)',
              data: [2200,1339,2284,1647],
              borderWidth: 1
            }]
          },
          options:{
            title:{
              display:true,
              text:"季度图书营业额",
              fontSize:25
            },
            legend:{
              display:true,
              position:'right',
              labels:{
                fontColor:"#000"
              }
            },
            layout:{
              padding:{
                left:50,right:0,bottom:0,top:0
              }
            }
          },
          totalMoney:20000,
          books:[
            {title:"书本1",num:2000},
            {title:"书本2",num:1000},
            {title:"书本3",num:900},
          ]
        }
      },
      created(){
        // axios.get('/statisticForShopkeeper/?userid='+id)
        //   .then()

      },
      computed:{
        id(){
          return this.$store.state.currentUser.userid
        }
      }
    }
</script>

<style scoped>
.all .box{
  width: 800px;
  height: 400px;
  margin: 20px auto;
}
</style>
