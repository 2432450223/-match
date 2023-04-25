<template>  
  <div id="echart-line" :style=" {width: '90vw', height: '80vh'} "></div>   
</template>

<script>

import * as echarts from 'echarts'

export default {
 
methods:{

  initChart(name,xData,yData) {
      let getchart = echarts.init(document.getElementById('echart-line'));
      console.log(name);
      var  option = {
        color:[
          '#c23531',
          '#2f4554',
          '#61a0a8',
          '#d48265',
          '#91c7ae',
          '#749f83',
          '#ca8622',
          '#bda29a',
          '#6e7074',
          '#546570',
          '#c4ccd3'
        ],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: xData
        },
        yAxis: {},
        series: [
          {
            name:'缺勤人数',
            type: 'bar',
            data: yData
          }
        ],
        grid: { //调整图表上下左右位置
          top:'10%',
          left: '3%',
          right: '8%',
          bottom: '11%',
          containLabel: true
        },
      };

      getchart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        getchart.resize();
    });
  },

}

}
</script>
