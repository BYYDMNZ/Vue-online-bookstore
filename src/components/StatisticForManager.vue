<template>
  <div class="manager">
    <div class="row mt-5">
      <div class="col-md-6 ">
        <vue-chart type="bar" :data="chartData1" v-if="show"></vue-chart>
      </div>
      <div class="col-md-6">
        <vue-chart type="line" :data="chartData2" v-if="show"></vue-chart>
      </div>
    </div>

  </div>
</template>

<script>
    import axios from 'axios'
    import VueChart from 'vue-chart-js'
    export default {
      name: "StatisticForManager",
      components: {
        VueChart
      },
      computed:{
        userid(){
          return this.$store.state.currentUser.userid
        },
        chartData1(){
          return {
            labels: [],
            datasets: [{
              label: '精英店铺排行榜 (单位 元)',
              data: [],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          }
        },
        chartData2(){
          return{
            labels: ["第一季度", "第二季度", "第三季度", "第四季度"],
              datasets: [{
              label: '网站季度营业额 (单位 元)',
              data: [],
              backgroundColor: 'rgba(255, 206, 86, 0.6)',
              borderColor:'rgba(0, 0, 0, 0.2)',
              borderWidth: 1
            }]
          }
        },
      },
      data() {
        return {
          show: false,
        }
      },
      created(){
        axios.get('/user/statisticForManager')
          .then(res=>{
            console.log(res.data)
            return res.data
          })
          .then(data=>{
              var list = data.obj.stores
             // console.log(list)
              var storesName =[],money=[]
              list.forEach(item=>{
                storesName.push(item.username)
                money.push(item.money)
              })
              this.chartData1.labels = storesName
              this.chartData1.datasets[0].data = money
              // console.log(this.chartData1.labels)
              // console.log(this.chartData1.datasets.data)
              this.chartData2.datasets[0].data = data.obj.seasonMoney
              this.show = true

          })
      }
    }
</script>

<style scoped>

</style>
