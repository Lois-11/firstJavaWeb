<style scoped>
  .first_img
  {
    width: 600px;
    height: 300px;
    border-radius: 10px;
  }
</style>
<template>
  <router-link to="/pangguan" @click="toPangGuan"><Card>
    <p slot="title">{{data}}</p>
    <img src="../images/background.jpg" class="first_img">
  </Card></router-link>
</template>
<script>
  export default {
    props: ['data'],
    mounted(){
      const vm = this
    },
    toPangGuan(){
       this.$router.push({name:'pangguan',params:{tel:this.$route.params.tel,styName:vm.data}})
    }
  }
</script>
