<template>
  <div class="home">
    <h1>应用场景</h1>
    <div class="indexBox">
      <el-row>
        <el-button type="primary" @click="goIndex('one')">班级缺勤率</el-button>
        <el-button type="primary" @click="goIndex('two')">公司营收财报</el-button>
        <el-button type="primary" @click="goIndex('three')">多功能兼容图</el-button>
      </el-row>
    </div>
    <div class="back" @click="back()"></div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      type:'',
      title:[],
    }
  },
  methods: {
    back(){
      this.$router.push({
        path:"/switch"
      })
    },
    goIndex(item){
      this.$router.push({
        path:"/userOH",
        query:{
          type:item,
        }
      })
    },
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
