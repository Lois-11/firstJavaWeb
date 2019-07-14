<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .newaccount{
    border: 1px solid #696969;
    background: #a3a3a3;
    position: relative;
    border-radius: 4px;
    overflow-scrolling: auto;
  }
  .new-newaccount{
    border-radius: 10px;
  }
  .pangguan-footer-center{
    text-align: center;
    background-color: #a3a3a3;
  }

</style>
<template>
  <div class="newaccount">
    <div align="center" :style="{margin: '88px 400px 0', background: '#a3a3a3', minHeight: '460px'}">
      <div align="center" :v-model="user" :style="{ background: '#fff', height: '400px',width:'300px',padding:'10px'}" class="new-newaccount">
        <Row style="margin-top: 40px">
          <Col span="5" offset="2">
            <h2>昵称</h2>
          </Col>
          <Col span="15" >
            <Input prefix="ios-contact" placeholder="起一个好听的名字哦~" style="width: auto"  v-model="myname" />
          </Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="5" offset="2">
            <h2>性别</h2>
          </Col>
          <Col span="15" >
            <RadioGroup v-model="gender">
              <Radio label="male">
                <Icon type="md-male"></Icon>
                <span>是男孩子啦</span>
              </Radio>
              <Radio label="female">
                <Icon type="md-female"></Icon>
                <span>是女孩子呦</span>
              </Radio>
            </RadioGroup>
          </Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="5" offset="2">
            <h2>手机号</h2>
          </Col>
          <Col span="15" >
            <Input prefix="ios-phone-portrait" placeholder="留下你的手机号好不好~" style="width: auto"  v-model="tel" />
          </Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="5" offset="2">
            <h2>密码</h2>
          </Col>
          <Col span="15" >
            <Input type="password" prefix="md-key" placeholder="输入密码~" v-model="mykey" />
          </Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="7" offset="0">
            <h2>确认密码</h2>
          </Col>
          <Col span="15">
          <Input type="password" prefix="md-key" placeholder="再确认一遍哦~"  v-model="rekey" />
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
            <router-link to="/board"><Button shape="circle" icon="md-arrow-round-up" v-on:click="zhuce()">注册</Button></router-link>
          </Col>
        </Row>
      </div>
    </div>
    <Footer class="pangguan-footer-center">2019/7 &copy; 贾雨欣、李羿欣出品</Footer>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        user:{
          myname:'',
          mykey:'',
          rekey:'',
          gender:'',
          tel:''
        }
      }
    },
    methods:{
      zhuce(user){
        this.$router.push({name:'board',params:{tel:user.tel}})
        if(this.mykey!=this.rekey){
          alert('两次密码不一致!');
        }
        this.$http.post('mixServlet',{
          'methodof':'regist',
          "name":user.myname,
          "tel":user.tel,
          "password":user.mykey,
          "gender":user.gender
        },{timeout:2500})
          .then((res)=>{
            console.log(res);
            if(res.statuscode==200){
              console.log('success')
            }
          })
          .catch(function(error){
            console.log(error);
          })
      }

    }
  }
</script>

