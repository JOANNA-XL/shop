<template>
  <header>
			<mt-header title="记事本">
				<!-- <router-link to="/" slot="left">
					<mt-button icon="back">返回</mt-button>
				</router-link> -->
				<mt-button icon="more" slot="right" @click="handleToggleDrawer"></mt-button>
			</mt-header>
  </header>
</template>

<script>

  
  export default {
    name: 'footerDiv',
    data () {
      return {
      //  author:''
      }
    },
    computed: {
    },
    methods: {
    // 　setAuthor: function () {
    // 　　　this.$store.commit('newAuthor',this.author);
    // 　}
    
    }
  }
</script>
<style scoped>
</style>
