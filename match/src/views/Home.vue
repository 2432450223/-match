<template>
  <div class="home">
    <div class="indexBox">
      <h2>泛珠三角设计大赛</h2>
      <h1>《万数可视》</h1>
      <h3>An attempt to visualize all the data</h3>
    </div>
    <div class="loading"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  mounted(){
    setTimeout(() => {
      this.$router.push({
        path:"/switch",
      })
    }, 5000);
  }
}
</script>

<style lang="scss" scoped>
.home{
  width:100vw;
  height:100vh;
  background: url(../img/bg.jpg);
  background-size: 100% 100%;
  .indexBox{
    position: absolute;
    transform: translate(-50%,-50%);
    left:50%;
    top:50%;
    width: 40vw;
    padding: 5vh;
    height: 50vh;
    background: rgba(255,255,255,.7);
  }
  .loading{
    width: 100vw;
    height: 1vh;
    position: absolute;
    top: 0;
    background: rgb(102, 255, 0);
    animation: myfirst 5s;
  }
}
@keyframes myfirst
{
    from {
      background: red;
      width:0vw;
    }
    to {
      background: rgb(102, 255, 0);
      width:100vw;
    }
}
</style>
