<template>
  <div id="app">
    
    <div class="preloader-wrap flex align-center justify-center">
			<div class="preloader flex"><div class="dash uno"></div><div class="dash dos"></div><div class="dash tres"></div><div class="dash cuatro"></div></div>
		</div>
    
		<Header />

    <router-view/>

    <Footer />

  </div>
</template>

<style lang="scss">

</style>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  
  export default{
    name: 'app',
    components: {
      Header,
      Footer
    },
    watch:{
        $route (){
            window.$router = true;
        }
    } 
  }
</script>
