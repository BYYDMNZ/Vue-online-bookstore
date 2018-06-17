<template>
  <div class="manager">
    <div class="row mt-5">
      <div class="col-md-6 ">
        <vue-chart type="bar" :data="chartData1"></vue-chart>
      </div>
      <div class="col-md-6">
        <vue-chart type="line" :data="chartData2"></vue-chart>
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
      computed:{
        userid(){
          return this.$store.state.currentUser.userid
        }
      },
      data() {
        return {
          chartData1: {
            labels: ["叶倩的店", "保营的店", "思慧的店", "颖苗的店", "习大大的店", "华农书店"],
            datasets: [{
              label: '精英店铺排行榜 (营业额)',
              data: [12000,11000,10000,8653,7898,7398],
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
          chartData2: {
            labels: ["第一季度", "第二季度", "第三季度", "第四季度"],
            datasets: [{
              label: '网站季度营业额 (单位 元)',
              data: [19372,12000,18653,19372],
              backgroundColor: 'rgba(255, 206, 86, 0.6)',
              borderColor:'rgba(0, 0, 0, 0.2)',
              borderWidth: 1
            }]
          },
        }
      },
      created(){
        console.log(this.userid);
        // axios.get('/statisticForManager/?userid='+this.userid)
        //   .then()
      }
    }
</script>

<style scoped>

</style>
