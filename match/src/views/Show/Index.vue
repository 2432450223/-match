<template>
  <div class="home">
    <div class="indexBox">
      <ChartLine style="width:100%;height:100%;" ref="chart"/>
    </div>
    <div class="switchBox">
      <el-row>
        <el-button type="primary" @click="type(1)">柱形图</el-button>
        <el-button type="primary" @click="type(2)">线形图</el-button>
        <el-button type="primary" @click="type(3)">饼形图</el-button>
      </el-row>
    </div>
    <div class="back" @click="back()">

    </div>
  </div>
</template>

<script>
import ChartLine from '../../components/ChartLint'
import {apiUrlO} from '../../api/url'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    ChartLine,
  },
  data(){
    return{
      dataList:{
        '文昌':'1000',
        '海口':'2000',
        '琼海':'1500',
        '三亚':'5000',
      },
      unit:'人均收入',
      dataC:[],
      dataOne:[],
      dataTwo:[],
      dataThree:[],
    }
  },
  async mounted(){
    let a = []
    if(this.$router.currentRoute.query.type == 'one'){
      a = await apiUrlO('http://8.130.52.98:8888/hainan/ghy')
      for(let item of a.data){
        if(item.year == 2021){
          this.dataOne.push(item)
        }
      }
      console.log(this.dataOne);
      this.toData(this.$router.currentRoute.query.type)
    }
    if(this.$router.currentRoute.query.type == 'two'){
      a = await apiUrlO('http://8.130.52.98:8888/hainan/gdp')
      for(let item of a.data){
        if(item.year == 2021){
          this.dataOne.push(item)
        }
      }
      console.log(this.dataOne);
      this.toData(this.$router.currentRoute.query.type)
    }
    if(this.$router.currentRoute.query.type == 'three'){
      a = await apiUrlO('http://8.130.52.98:8888/hainan/gx')
      for(let item of a.data){
        if(item.year != null){
          this.dataOne.push(item)
        }
      }
      console.log(this.dataOne);
      this.toData(this.$router.currentRoute.query.type)
    }
    console.log(a);
  },
  methods:{
    toData (type) { 
      if(type == 'one'){
        let name = '海南省各市县人均'
        let xData = []
        let yData = []
        this.dataOne.forEach(element => {
          // console.log(element.市县);
          xData.push(element.towns)
          yData.push(element.citiesPCDI)
        });
        this.dataC = [name,xData,yData,this.unit]
        console.log(this.dataC);
        this.$refs.chart.initChart(name,xData,yData,this.unit)
      }
      if(type == 'two'){
        let name = '海南省各市县就业情况'
        let xData = []
        let yData = []
        this.dataOne.forEach(element => {
          // console.log(element.市县);
          xData.push(element.employed_person)
          yData.push(element.employed_person_numbers)
        });
        this.dataC = [name,xData,yData,this.unit]
        console.log(this.dataC);
        this.$refs.chart.initChart(name,xData,yData,this.unit)
      }
      if(type == 'three'){
        let name = '海南省毕业生人数'
        let xData = []
        let yData = []
        this.dataOne.forEach(element => {
          // console.log(element.市县);
          xData.push(element.year)
          yData.push(element.students)
        });
        this.dataC = [name,xData,yData,this.unit]
        console.log(this.dataC);
        this.$refs.chart.initChart(name,xData,yData,this.unit)
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
    type(type){
      this.$refs.chart.type = type
      this.toData(this.$router.currentRoute.query.type)
      // console.log(type);
      // this.$refs.chart.changeType(this.dataC,type)
    },
    back(){
      this.$router.push({
        path:"/showHome"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100vw;
  height:100vh;
  background: url(../../img/泡泡人.png);
  background-size: 100% 100%;
  .indexBox{
    width: 60vw;
    height: 60vh;
    background: rgba(255,255,255,.7);
    position: absolute;
    transform: translate(-50%,-50%);
    left:50%;
    top:50%;
    line-height: 30vh;
    color: white;
    font-size: 5vw;
  }
  .switchBox{
    top: 5vw;
    position: relative;
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
