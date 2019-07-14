<style scoped>
  .logo{
    width: 122px;
    height: 52px;
    background: #5b6270;
    background-image: url("../images/logo2.jpg");
    background-size: 122px 52px;
    background-repeat: no-repeat;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 5px;
    left: 80px;
  }
  .topper{
    background-color: black;
    z-index: 1000;
  }
  .topperMenu{
    background-color: black;
  }
</style>
<template>
  <Header :style="{position: 'fixed', width: '100%' }" class="topper" align="center">
    <Menu mode="horizontal" theme="dark" active-name="1" class="topperMenu">
      <div class="logo"></div>
      <router-link to="/self"><Button icon="ios-person" ghost style="float: right;margin-top: 10px;margin-right: 200px" @click="toSelf()">个人中心</Button></router-link>
    </Menu>
  </Header>

</template>
<script>
  export default {
    name:'topper',
    toSelf(){
      this.$router.push({name:'self',params:{tel:this.$route.params.tel}})
    }
  }
</script>
