<template>
  <div id="app">
    <navbar>
      <div class="zone" @click="isShow=!isShow"></div>
      <div class="search"></div>
    </navbar>
    <router-view></router-view>
    <sidebar :myshow="isShow" @event="isShow=false"></sidebar>
  </div>
</template>

<script>
import navbar from './components/common/navbar.vue'
import sidebar from './components/common/sidebar.vue'
import scientific from './components/scientific.vue'
export default {
  name: 'App',
  data(){
    return{
      isShow:false
    }
  },
  components:{
    sidebar,
    navbar
  }
}
</script>

<style>
  *{padding:0;margin:0}
  html,body{font-size:14px;width:100%;height:100%;font-family:'微软雅黑';}
  .color{background:#eee;color:#000}
  section{position:relative;top:50px;}
  .l{float:left;}
  .r{float:right;}
  a{text-decoration:none}

</style>
