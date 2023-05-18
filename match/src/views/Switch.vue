<template>
  <div class="home">
    <!-- <div class="top">
      <div class="title">万数可视(demo)</div>
      <div class="titleTwo">联系我们</div>
    </div> -->
    <div class="indexBox">
      <div class="btn" @click="go('one')">展示面板</div>
      <div class="btn" @click="go('two')">用户自定义导出</div>
      <div class="btn" @click="go('three')">用户自定义展示</div>
    </div>
    <div class="bottom">

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
  background: url(../img/背景.png);
  background-size: 100% 100%;
  // .top{
  //   width: 100%;
  //   height: 7vh;
  //   position: absolute;
  //   top: 0;
  //   background: rgba(0, 191, 255,.5);
  //   // text-align: left;
  //   line-height: 7vh;
  //   .title{
  //     font-size: 2vw;
  //     position: absolute;
  //     left: 3vw;
  //   }
  //   .titleTwo{
  //     font-size: 1vw;
  //     position: absolute;
  //     right: 3vw;
  //     cursor: pointer;
  //     &:hover{
  //       color: red;
  //     }
  //   }
  // }
  .indexBox{
    width: 40vw;
    height: 7vh;
    // background: rgba(0,0,0,.5);
    position: absolute;
    transform: translate(-50%,-50%);
    left:50%;
    top: 7%;
    line-height: 7vh;
    display: flex;
    .btn{
      display: inline-block;
      flex: 1;
      margin-left: 2vw;
      cursor: pointer;
      &:hover{
        background: linear-gradient(rgb(132,124,239),rgb(224,126,179)) !important;
      }
      // color: white;
    }
    .btn:nth-child(1){
      background: rgb(234,107,162);
    }
    .btn:nth-child(2){
      background: rgb(115,232,235);
    }
    .btn:nth-child(3){
      background: rgb(191,238,187);
    }
  }
  // .bottom{
  //   width: 100vw;
  //   height: 100vh;
  //   position: absolute;
  //   background-image: url(../img/箭头.png);
  //   background-size: 100% 100%;
  // }
}
</style>
