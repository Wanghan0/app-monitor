<!--created by wanghan-->
<template>
  <div>
    <div :id="name" style="width: 100%;height: 280px"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props:['trendData','name'],
    name: '',
    components: {
    },
    data() {
      return {
        trendChart:null,
        option:{
          grid:{top:'5%',left:'15%',right:'15%'},
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel:{show:false}
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }]
        }
      }
    },
    computed: {
    },
    watch:{
      'trendData':{
        handler:function (val) {
          this.initData();
          this.draw()
        },
        deep:true,
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.initData();
        this.trendChart=this.$echarts.init(document.getElementById(this.name));
        this.draw()
      })
    },
    created() {
    },
    methods: {
      initData(){
        this.option.series[0].data=this.trendData;
      },
      draw(){
        this.trendChart.setOption(this.option);
      },
    }
  }

</script>

<style scoped>

</style>
