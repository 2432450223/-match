<template>
  <div class="home">
    <div class="indexBox">
      第三模块
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

  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100vw;
  height:100vh;
  background: url(../../img/bg.jpg);
  background-size: 100% 100%;
  .indexBox{
    width: 60vw;
    height: 50vh;
    background: rgba(0,0,0,.5);
    position: absolute;
    transform: translate(-50%,-50%);
    left:50%;
    top:50%;
    line-height: 50vh;
    color: white;
    font-size: 5vw;
  }
}
</style>
