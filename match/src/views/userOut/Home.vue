<template>
  <div class="home">
    <h1>用户自定义(柱形图)</h1>
    <vue-xlsx-table @on-select-file="handleSelectedFile"> 上传xlsx文件转可视化图表 </vue-xlsx-table>
    <div class="indexBox">
      <ChartLine style="width:100%;height:100%;" class="chart" ref="chart_line_one"/>
    </div>
  </div>
</template>

<script>
import ChartLine from '../../components/ChartLint'
console.log(ChartLine)

export default {
  name: 'app',
  components: {
    ChartLine,
  },
  data(){
    return{
      type:'',
      title:[],
    }
  },
  methods: {
    handleSelectedFile (convertedData) {
      console.log(convertedData)
      this.title = convertedData.header
      let headerT = convertedData.header.slice(0)
      headerT.shift()
      // console.log('title',this.title);
      let xTitle = this.title[0]
      let yTitle = this.title[1]
      let yTitleT = this.title[2]
      let yTitleTh = this.title[3]
      let yTitleF = this.title[4]
      // console.log(xTitle,yTitle);
      // console.log(this.getValuesByKey(convertedData.body,xTitle));
      let xData = this.getValuesByKey(convertedData.body,xTitle)
      let yDataO = this.getValuesByKey(convertedData.body,yTitle)
      let yDataT = this.getValuesByKey(convertedData.body,yTitleT)
      let yDataTh = this.getValuesByKey(convertedData.body,yTitleTh)
      let yDataF = this.getValuesByKey(convertedData.body,yTitleF)
      let name = '班级统计'
      console.log(xTitle);
      this.$refs.chart_line_one.type = 4
      this.$refs.chart_line_one.initChart(name,xData,yDataO,yDataT,yDataTh,yDataF,headerT)
    },
    //数据处理
    getValuesByKey(array, key) {
      var values = []; // 创建一个空数组用于存放值
      for (var i = 0; i < array.length; i++) { // 遍历数组中的每个对象
        var obj = array[i]; // 获取当前对象
        if (Object.prototype.hasOwnProperty.call(obj,key)) { // 判断对象是否有指定的key
          var value = obj[key]; // 获取对象的值
          values.push(value); // 把值添加到数组中
        }
      }
      return values; // 返回包含所有值的数组
    }
  }
  
}
</script>

<style lang="scss" scoped>
.home{
  width:100vw;
  height:100vh;
  background: url(../../img/背景.png);
  background-size: 100% 100%;
  .indexBox{
    width: 70vw;
    height: 55vh;
    background: rgba(255,255,255,.8);
    position: absolute;
    transform: translate(-50%,-50%);
    left:50%;
    top:50%;
    line-height: 50vh;
    color: white;
    font-size: 5vw;
    .chart{
      width: 60vw;
      height: 50vh;
    }
  }
}
</style>
