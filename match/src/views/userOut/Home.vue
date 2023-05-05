<template>
  <div id="app">
    <h1>用户自定义(柱形图)</h1>
    <vue-xlsx-table @on-select-file="handleSelectedFile"> 上传xlsx文件转json </vue-xlsx-table>
    <ChartLine ref="chart_line_one"/>
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
      // console.log('title',this.title);
      let xTitle = this.title[0]
      let yTitle = this.title[1]
      // console.log(xTitle,yTitle);
      // console.log(this.getValuesByKey(convertedData.body,xTitle));
      let xData = this.getValuesByKey(convertedData.body,xTitle)
      let yData = this.getValuesByKey(convertedData.body,yTitle)
      let name = '张雪'
      this.$refs.chart_line_one.initChart(name,xData,yData)
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