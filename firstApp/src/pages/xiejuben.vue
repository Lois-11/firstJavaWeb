<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }

  .xiejuben{
    border: 1px solid #696969;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-scrolling: auto;
  }

  .xiejuben-content{
    width: 600px;
    border-radius: 10px;
  }

  .xiejuben-footer-center{
    text-align: center;
    background-color: #a3a3a3;
  }
  .lay{
    background-color: #a3a3a3;
  }
  .liaotiankuang{
    border: 1px solid #dcdee2;
    height: 400px;
    overflow-y:auto;
    overflow-x: hidden;
  }
  .fanhui{
    border: 1px solid #929498;
    color: #929498;
    float: left;
  }
</style>
<template>
  <div class="xiejuben">
    <Layout class="lay">
      <topper></topper>
      <Content :style="{margin: '88px 400px 0', background: '#fff', minHeight: '540px'}" class="xiejuben-content">
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="5" offset="2">
            <h2>{{title}}</h2>
          </Col>
        </Row>
        <Row style="margin-top: 5px;margin-bottom: 5px">
          <Col span="20" offset="2">
            <div v-for="(item, index) in a" :key="index" class="liaotiankuang">
             <dialoger :data="item"></dialoger>
            </div>
          </Col>
        </Row>
        <Row style="margin-top: 5px;margin-bottom: 5px">
          <Col span="3" offset="2">
            <router-link to="/board"><Button :size="buttonSize" ghost icon="md-return-left"  type="primary" class="fanhui" @click="backToBoard">返回</Button></router-link>
          </Col>
          <Col span="17">
            <Input icon="md-arrow-round-up" v-model="value0" placeholder="输入对话~" @click="inputDialog()" />
          </Col>
        </Row>
      </Content>
      <Footer class="xiejuben-footer-center">2019/7 &copy; 贾雨欣、李羿欣出品</Footer>
    </Layout>
  </div>
</template>

<script>
  import topper from "../components/top.vue"
  import dialoger from "../components/dialog.vue"
  export default {
    components: {topper,dialoger},
    data () {
      return {
        title:"this.$route.params.styName",
        value0:'',
        a: [{role: '',content:''}]
      }
    },
    mounted(){
      this.$http.get('board',{
        params:{
          'methodof':'gettalk',
          tel:this.$route.params.tel,
          styName:this.$route.params.styName
        }
      })
        .then((res)=>{
          this.a=res.data;
          console.log(this.a)
        })
        .catch(function(error){
          console.log(error);
        })
    },
    methods:{
      inputDialog(value0){
       this.$http.post('',{
          'methodof':'addtalk',
          'content':value0,
          'tel':this.$route.params.tel,
          'role':this.$route.params.myRole
        },{timeout:2500})
          .then((res)=>{
            console.log(res)
            if(res.statuscode==200){
              console.log('success')
            }
          })
          .catch(function(error){
            console.log(error);
          })
          window.location.reload();刷新
      },
      backToBoard(){
        this.$router.push({name:'board',params:{tel:this.$route.params.tel}})
      }
    }
  }
</script>


