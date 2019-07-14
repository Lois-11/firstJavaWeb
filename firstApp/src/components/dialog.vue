<style scoped>
  .dialoger{
    width: 100%;
    margin-top: 10px;
    float: left;
  }
  .dialoger span{
    border: 1px solid #a2a2a2;
    padding: 10px;
    border-radius: 10px;
    max-width: 50%;
    overflow: visible;
    line-height: 20px;
    display: inline-block;
    float: left;
  }
  #imagesrc{
    height: 50px;
    width: 50px;
    overflow: hidden;
    border-radius: 100%;
    position: relative;
    float: left;
    margin-right: 5px;
  }
</style>
<template>
<!--  //注意头像问题src="../images/wei_touxiang.jpg"-->
  <div class="dialoger">
    <img  id="imagesrc" :src="'../images/touxiang' + data.role + '.jpg'">
    <span>{{data.content}}</span>
  </div>
</template>

<script>
  export default {
    name:'dialoger',
    data(){
      return{
      }
    },
    props: ['data'],
    mounted() {
    }
  }
</script>



