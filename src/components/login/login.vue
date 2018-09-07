<template>
  <div class="hello">
    <Header></Header>
    <div class="content">
      <h1>neirong</h1>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './commen/header'
import Footer from './commen/footer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Header,
    Footer
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 200px;
}
</style>
