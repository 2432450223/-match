<template>
  <div class="home">
    <h1>用户自定义({{text}})</h1>
    <vue-xlsx-table @on-select-file="handleSelectedFile"> 上传xlsx文件转可视化图表 </vue-xlsx-table>
    <div class="indexBox">
      <ChartLine style="width:100%;height:100%;" class="chart" ref="chart_line_one"/>
    </div>
    <div class="back" @click="back()"></div>
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
      text:'',
    }
  },
  methods: {
    handleSelectedFile (convertedData) {
      if(this.$router.currentRoute.query.type == 'one'){
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
        let name = '班级缺勤率'
        console.log(xTitle);
        this.$refs.chart_line_one.type = 3
        this.$refs.chart_line_one.initChart(name,xData,yDataO,yDataT,yDataTh,yDataF,headerT)
      }
      if(this.$router.currentRoute.query.type == 'two'){
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
        let name = '公司营收财报'
        console.log('11111111111111111111111111111'+name,xData,yDataO,yDataT,yDataTh,yDataF,headerT);
        console.log(xTitle);
        this.$refs.chart_line_one.type = 2
        this.$refs.chart_line_one.initChart(name,xData,yDataO,yDataT,yDataTh,yDataF,headerT)
        console.log(name,xData,yDataO,yDataT,yDataTh,yDataF,headerT);
      }
      if(this.$router.currentRoute.query.type == 'three'){
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
        let name = '多功能兼容'
        console.log(xTitle);
        this.$refs.chart_line_one.type = 4
        this.$refs.chart_line_one.initChart(name,xData,yDataO,yDataT,yDataTh,yDataF,headerT)
      }

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
    },
    back(){
      this.$router.push({
        path:"/userTp"
      })
    }
  },
  mounted(){
    if(this.$router.currentRoute.query.type == 'one'){
      this.text = '班级到课率'
    }
    if(this.$router.currentRoute.query.type == 'two'){
      this.text = '公司营收财报'
    }
    if(this.$router.currentRoute.query.type == 'three'){
      this.text = '多功能兼容图'
    }
  }
  
}
</script>

<style lang="scss" scoped>
.home{
  width:100vw;
  height:100vh;
  background: url(../../img/气球人.png);
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
  .back{
    width: 15vw;
    height: 15vh;
    position: absolute;
    background-image: url(../../img/返回键.png);
    background-size: 100% 100%;
    bottom: 50vh;
    &:hover{
      cursor: pointer;
      background-image: url(../../img/返回键点击效果.png);
    }
  }
}
</style>
