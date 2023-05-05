<template>
  <div class="home">
    <div class="top">
      <div class="title">万数可视(demo)</div>
      <div class="titleTwo">联系我们</div>
    </div>
    <div class="indexBox">
      <el-row>
        <el-button type="primary" @click="go('one')">展示面板</el-button>
        <el-button type="primary" @click="go('two')">用户自定义导出</el-button>
        <el-button type="primary" @click="go('three')">用户自定义展示</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  mounted(){
    // setTimeout(() => {
    //   this.$router.push({
    //     path:"/about",
    //   })
    // }, 5000);
  },
  methods:{
    go(item){
      if(item == 'one'){
        this.$router.push({
          path:"/showHome",
        })
      }
      if(item == 'two'){
        this.$router.push({
          path:"/userOH",
        })
      }
      if(item == 'three'){
        this.$router.push({
          path:"/userSH",
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100vw;
  height:100vh;
  background: url(../img/bg.jpg);
  background-size: 100% 100%;
  .top{
    width: 100%;
    height: 7vh;
    position: absolute;
    top: 0;
    background: rgba(0, 191, 255,.5);
    // text-align: left;
    line-height: 7vh;
    .title{
      font-size: 2vw;
      position: absolute;
      left: 3vw;
    }
    .titleTwo{
      font-size: 1vw;
      position: absolute;
      right: 3vw;
      cursor: pointer;
      &:hover{
        color: red;
      }
    }
  }
  .indexBox{
    width: 60vw;
    height: 50vh;
    background: rgba(0,0,0,.5);
    position: absolute;
    transform: translate(-50%,-50%);
    left:50%;
    top:50%;
    line-height: 50vh;
  }
}
</style>
