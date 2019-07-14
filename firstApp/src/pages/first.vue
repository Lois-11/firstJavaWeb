<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .first{
    border: 1px solid #696969;
    background: #a3a3a3;
    position: relative;
    border-radius: 4px;
    overflow-scrolling: auto;
  }
  .new-first{
    border-radius: 10px;
  }
  .first-footer-center{
    text-align: center;
    background-color: #a3a3a3;
  }

</style>
<template>
  <div class="first">
    <div align="center" :style="{margin: '88px 400px 0', background: '#a3a3a3', minHeight: '460px'}">
      <div align="center" :style="{ background: '#fff', height: '350px',width:'350px',padding:'10px'}" class="new-first">
        <Row style="margin-top: 30px;margin-left: 0px;margin-bottom: 5px">
          <img src="../images/logo2.jpg">
        </Row>
        <Row>
          <!-- <Col span="24"></Col> -->
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <!-- <Col span="11" offset="1"> -->
            <router-link to="/login"><Button shape="circle" icon="ios-contact">登录</Button></router-link>
          <!-- </Col> -->
          <!-- <Col span="11" offset="1"> -->
            <router-link to="/new"><Button shape="circle" icon="md-add">注册</Button></router-link>
          <!-- </Col> -->
        </Row>
      </div>
    </div>
    <Footer class="first-footer-center">2019/7 &copy; 贾雨欣、李羿欣出品</Footer>
  </div>
</template>

<script>
  export default {
    data() {
      return{

      }
    },
    methods:{

    },
    mounted() {
      console.log('mounted') //eslint-disable-line
    }
  }
</script>

