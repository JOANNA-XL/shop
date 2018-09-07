<template>
  <footer class="footer">
      
    <span>
       Copyright&nbsp;&copy;&nbsp;{{author}} - 2016 All rights reserved
    </span>
  </footer>
</template>

<script>
  export default {
    name: 'footerDiv',
    data () {
      return {
        selected:''
      }
    },
    computed: {
      author () {
        return this.$store.state.author
      }
    }
  }
</script>
<style scoped>
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 0.06rem solid #ccc;
    width: 100%;
    font-size: 14px;
    padding: 0.6rem 0;
    text-align: center;
    color: #888888;
    background-color: #f0f0f0;
}

</style>
