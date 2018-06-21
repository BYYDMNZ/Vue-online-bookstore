<template>
  <vue-chart type="line" :data="chartData"></vue-chart>
</template>

<script>
    export default {
        name: "ChartForShop",
        props:['seasonsMoney'],
        data(){
          return{}
        },
        computed:{
          chartData(){
            return {
              labels: ["第一季度", "第二季度", "第三季度", "第四季度"],
              datasets: [{
                label: '季度店铺营业额(单位 元)',
                data: [this.seasonsMoney[0],this.seasonsMoney[1],this.seasonsMoney[2],this.seasonsMoney[3]],
                borderWidth: 1
              }]
            }
          },
        },
    }
</script>

<style scoped>

</style>
