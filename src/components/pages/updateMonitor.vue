<!--created by wanghan-->
<template>
  <div>
    <div>

      <line-chart :trendData="trendData"></line-chart>
    </div>
  </div>
</template>

<script type="text/javascript">
  import lineChart from "./lineChart";

  export default {
    name: '',
    components: {
      lineChart
    },
    data() {
      return {
        trendData:[820, 932, 901, 934, 1290, 1330, 1320]
      }
    },
    computed: {
    },
    watch:{
    },
    created() {
    },
    methods: {
    }
  }

</script>

<style scoped>

</style>
