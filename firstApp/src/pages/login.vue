<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .login{
    border: 1px solid #696969;
    background: #a3a3a3;
    position: relative;
    border-radius: 4px;
    overflow-scrolling: auto;
  }
  .login-login{
    border-radius: 10px;
  }
  .pangguan-footer-center{
    text-align: center;
    background-color: #a3a3a3;
  }

</style>
<template>
  <div class="login">
    <div align="center" :style="{margin: '88px 400px 0', background: '#a3a3a3', minHeight: '460px'}">
      <div ref="userInfo" align="center" :style="{ background: '#fff', height: '300px',width:'300px',padding:'10px'}" class="login-login">
        <Row style="margin-top: 60px;margin-bottom: 5px">
          <Col span="5" offset="2">
            <h2>手机号</h2>
          </Col>
          <Col span="15" >
            <Input v-model="userInfo.tel" prefix="ios-contact" placeholder="输入手机号哦~" style="width: auto" />
          </Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="5" offset="2">
            <h2>密码</h2>
          </Col>
          <Col span="15" >
            <Input type="password" v-model="userInfo.mypassword" prefix="md-key" placeholder="输入密码~" style="width: auto" />
          </Col>
        </Row>
        <Row>
          <Col span="24"></Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="11" offset="1">
            <router-link to="/"><Button shape="circle" icon="md-arrow-round-back">返回</Button></router-link>
          </Col>
          <Col span="11" offset="1">
            <router-link to="/board"><Button shape="circle" icon="md-arrow-round-up" @click="login(userInfo)">登录</Button></router-link>
          </Col>
        </Row>
      </div>
    </div>
    <Footer class="pangguan-footer-center">2019/7 &copy; 贾雨欣、李羿欣出品</Footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userInfo:{
          tel:'',
          mypassword:''
        }
      }
    },
    methods:{
      login(userInfo){
        this.$router.push({name:'board',params:{tel: userInfo.tel}})
        this.$http.post('JavaWebWork/mixvlet',{
          "methodof":'login',
          "tel":userInfo.tel,
          "password":userInfo.mypassword,
        },{timeout:2500})
          .then((res)=>{
            console.log(res)
            if(res.statuscode==200){
              console.log('success')
            } else{
            error.message="err"
            }
          })
          .catch(function(error){
            console.log(error);
          })
      }
    }
  }
</script>


