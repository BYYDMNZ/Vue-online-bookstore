<template>
  <div class="manager">
    <div class="row">
      <div class="col-md-6">
        <vue-chart type="bar" :data="chartData"></vue-chart>
      </div>
      <div class="col-md-6">
        <vue-chart type="line" :data="chartData"></vue-chart>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <vue-chart type="radar" :data="chartData"></vue-chart>
      </div>
      <div class="col-md-6">
        <vue-chart type="doughnut" :data="chartData"></vue-chart>
      </div>
    </div>
  </div>
</template>

<script>
    import VueChart from 'vue-chart-js'
    export default {
      name: "StatisticForManager",
      components: {
        VueChart
      },
      data() {
        return {
          chartData: {
            labels: ["神话故事", "编程大全", "百科全书", "医疗宝典", "生活指南", "休闲娱乐"],
            datasets: [{
              label: '季度图书销售值',
              data: [2200,1339,2284,1647,956,2998],
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
          },
          options:{
            title:{
              display:true,
              text:"华农书店季度图书销售值",
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
          }
        }
      }
    }
</script>

<style scoped>

</style>
