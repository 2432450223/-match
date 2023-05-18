<template>  
  <div id="echart-line" :style=" {width: '90vw', height: '80vh'} "></div>   
</template>

<script>

import * as echarts from 'echarts'

export default {

  data(){
    return{
      type:1,
      getchart:'',
    }
  },
  methods:{
    dataSave(){

    },
    initChart(name,xData,yData,yDataT,yDataTh,yDataF,header,unit) {
      // if (getchart != undefined){
      //   this.getchart.dispose()
      // }
      // console.log(getchart);
      let getchart = echarts.init(document.getElementById('echart-line'));
      let data = []
      xData.forEach((element,index) => {
        console.log(element);
        data.push({ value: yData[index], name: xData[index] })
        console.log(data);
      });

      console.log(name);
      if(this.type == 1){
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          title: {
            text: name,
            left: 'left',
          },
          xAxis: [
            {
              type: 'category',
              data: xData,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: unit,
              type: 'bar',
              barWidth: '60%',
              data: yData
            }
          ]
        };
      }else if(this.type == 2){
        option = {
          xAxis: {
            type: 'category',
            data: xData,
            show:true
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              // name: unit,
              data: yData,
              type: 'line'
            }
          ],
          title: {
            text: name,
            left: 'center',
          },
        };
      }else if(this.type == 3){
        option = {
          title: {
            text: name,
            left: 'center',
          },
          // yAxis: {
          //   show: false,
          //   type:'value',
          // },
          xAxis: {
            type: 'category',
            show: false,
          },
          tooltip: {
            trigger: 'item'
          },
          textStyle:{
            color:'auto',
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: unit,
              type: 'pie',
              radius: '50%',
              data: data , 
              // [
              //   { value: yData[0], name: xData[0] },
              //   { value: yData[1], name: xData[1] },
              //   { value: yData[2], name: xData[2] },
              //   { value: yData[3], name: xData[3] },
              //   // { value: 735, name: 'Direct' },
              //   // { value: 580, name: 'Email' },
              //   // { value: 484, name: 'Union Ads' },
              //   // { value: 300, name: 'Video Ads' }
              // ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(225, 225, 225, 0.5)'
                }
              },
              label : {
                normal : {
                  formatter: '{b}:{c}: ({d}%)',
                  textStyle : {
                    fontWeight : 'normal',
                    fontSize : 15
                  }
                }
              },
            }
          ],
        };
      }else if(this.type == 4){
        option = {
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
            data: xData,
            show: true,
          },
          yAxis: {},
          legend: {
            data: header
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              mark: { show: true },
              // dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar', 'stack'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: header[0],
              type: 'bar',
              data: yData
            },
            {
              name: header[1],
              type: 'bar',
              data: yDataT
            },
            {
              name: header[2],
              type: 'bar',
              data: yDataTh
            },
            {
              name: header[3],
              type: 'bar',
              data: yDataF
            }
          ],
          grid: { //调整图表上下左右位置
            top:'20%',
            left: '3%',
            right: '8%',
            bottom: '20%',
            containLabel: true
          },
          title: {
            text: name,
            left: 'left',
          },
        };
      }

      getchart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        getchart.resize();
      });
    },
    // show(name,xData,yData,unit){
    //   let getchart = echarts.init(document.getElementById('echart-line'));
    //   getchart.setOption(option);
    //   //随着屏幕大小调节图表
    //   window.addEventListener("resize", () => {
    //     getchart.resize();
    //   });
    // }
  }

}
</script>
