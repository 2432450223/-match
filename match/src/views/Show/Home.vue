<template>
  <div class="home">
    <div class="indexBox">
      <el-row>
        <el-button type="primary" @click="goIndex('one')">海南省各市县人均</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
// import {apiUrlO} from '../../api/url'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  async mounted(){
    // let a = await apiUrlO('http://47.120.37.177:8888/hainan/gdp')
    // console.log(a);
    // let data = a.then(res =>{console.log(res);});
    // console.log(data);
    // this.$axios.get('http://47.120.37.177:8888/hainan/gdp').then(response => {
    //   if (response.data) {
    //     console.log(response.data)
    //   }
    // }).catch(err => {
    //     console.log(err);
    //     alert('请求失败')
    // })
    // setTimeout(() => {
    //   this.$router.push({
    //     path:"/about",
    //   })
    // }, 5000);
    // function test(person) {
    //   person.age = 26
    //   person = {
    //     name: 'yyy',
    //     age: 30
    //   }

    //   return person
    // }
    // const p1 = {
    //   name: 'yck',
    //   age: 25
    // }
    // test(p1)
    // console.log(p1) // -> ?
    // // const p2 = test(p1)
    // // console.log(p2) // -> ?
    // console.log(0.1 + 0.2 !== 0.3);
  },
  methods:{
    goIndex(item){
      if(item == 'one'){
        this.$router.push({
          path:"/showIndex"
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home{
  width:100vw;
  height:100vh;
  background: url(../../img/背景.png);
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
