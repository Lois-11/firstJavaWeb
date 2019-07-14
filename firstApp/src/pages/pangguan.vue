<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .pangguan{
    border: 1px solid #696969;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-scrolling: auto;
  }
  .pangguan-content{
    width: 600px;
    border-radius: 10px;
  }
  .pangguan-footer-center{
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

  .woyaojiaru{
    border:1px solid #929498;
  }
  .dianzan{
    border: 1px solid red;
    color: red;
  }
  .fanhui{
    border: 1px solid #929498;
    color: #929498;
    float: left;
  }
</style>
<template>
  <div class="pangguan">
    <Layout class="lay">
      <topper></topper>
      <Content :style="{margin: '88px 400px 0', background: '#fff', minHeight: '540px'}" class="pangguan-content">
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
            <div align="right">
              <router-link to="/board"><Button :size="buttonSize" ghost icon="md-return-left"  type="primary" class="fanhui" @click="backToBoard()">返回</Button></router-link>
              &nbsp;
              <Button :size="buttonSize" ghost icon="md-thumbs-up"  type="primary" class="dianzan" @click="counter(count)" v-model="count">点赞({{count}})</Button>
              &nbsp;
              <router-link to="/xuanjuese"><Button :size="buttonSize" ghost icon="ios-create-outline" type="primary" class="woyaojiaru" @click="getRole()">我要加入</Button></router-link>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer class="pangguan-footer-center">2019/7 &copy; 贾雨欣、李羿欣出品</Footer>
    </Layout>
  </div>
</template>

<script>
  import topper from "../components/top.vue"
  import dialoger from "../components/dialog.vue"
  export default {
    data () {
      return {
        title:'styName',
        value0:'',
        a: [{role: '',content:'',count:''}]
      }
    },
    components:{
      topper,dialoger
    },
    mounted(){
      this.$http.get('board',{
        params:{
          methodof:'pangguan',
          tel:this.$route.params.tel,
          styName:this.$route.params.styName
        }
      })
        .then((res)=>{
          this.a.role=res.data.role;
          this.a.centent=res.data.content;
          this.a.count=res.data.count;
          console.log(this.contacts)
        })
        .catch(function(error){
          console.log(error);
        })
    },
    methods:{
      counter(count){
        count++;
        this.$http.post('JavaWebWork/mixServlet',{
          "methodof":'addthumb',
          'tel':this.$route.params.tel,
          'styName':this.$route.params.styName
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
      },
      backToBoard(){
        this.$router.push({name:'board',params:{tel:this.$route.params.tel}})
      },
      getRole(){
        this.$router.push({name:'xuanjuese',params:{tel:this.$route.params.tel}})
      }
    }
  }
</script>


