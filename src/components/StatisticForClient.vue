<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6">
      <h3>你的购物情况</h3>
        <vue-chart type="radar" :data="chartData" class="radar"></vue-chart>
      </div>
    <div class="col-sm-12 col-md-6">
      <h3>猜你喜欢</h3>
      <books></books>
    </div>
    </div>
  </div>
</template>

<script>
    import Books from './Books'
    export default {
        name: "StatisticForClient",
      components:{Books},
      data() {
        return {
          chartData: {
            labels: ["经典名著", "计算机与互联网", "娱乐休闲", "科普读物", "生活图书", "外语学习"],
            datasets: [{
              label: '购买数量',
              data: [2200, 1339, 2284, 1647, 956, 2998],
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
          options: {
            title: {
              display: true,
              text: "购买本书",
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'right',
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50, right: 0, bottom: 0, top: 0
              }
            }
          }
        }
      }
    }
</script>

<style scoped>
.radar{
  margin-top: 30px;
}
</style>
