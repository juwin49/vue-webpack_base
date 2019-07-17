<template>
  <div id="app">
    <header>
      <router-link to='/home'>Home</router-link>
      <router-link to='/login'>Login</router-link>
	   <router-link to='/scroll'>scroll</router-link>
    </header>
    <!-- 对应组件的内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        
      }
    }
  }
</script>
<style >
  
</style>