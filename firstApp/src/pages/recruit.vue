<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .recruit{
    border: 1px solid #696969;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-scrolling: auto;
  }

  .recruit-content{
    width: 600px;
    border-radius: 10px;
  }

  .recruit-footer-center{
    text-align: center;
    background-color: #a3a3a3;
  }
  .lay{
    background-color: #a3a3a3;
  }
</style>
<template>
  <div class="recruit">
    <Layout class="lay">
      <topper></topper>
      <Content v-model="sty" :style="{margin: '88px 400px 0', background: '#fff', minHeight: '540px'}" class="recruit-content">
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="5" offset="1">
            <h2>故事名字：</h2>
          </Col>
          <Col span="17">
            <Input v-model="sty.styName" type="textarea" :rows="1" placeholder="请给故事起个好听的名字~" />
          </Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="3" offset="1">
            <h2>设定：</h2>
          </Col>
          <Col span="19">
            <Input v-model="sty.stySetting" type="textarea" :rows="15" placeholder="请编写故事发生背景~" />
          </Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="11" offset="1">
            <h2>请选择您要添加的角色：</h2>
          </Col>
          <Col span="11">
              <Select v-model="sty.styRoles" multiple style="width:260px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
          </Col>
        </Row>
        <Row style="margin-top: 40px;margin-bottom: 5px">
          <Col span="13" offset="3">
            <router-link to="/board"><Button shape="circle" icon="md-arrow-round-back" @click="backToBoard()">返回</Button></router-link>
          </Col>
          <Col span="7">
            <router-link to="/board"><Button shape="circle" icon="md-arrow-round-up" @click="submitSty()">上传剧本 开始招募</Button></router-link>
          </Col>
        </Row>
      </Content>
      <Footer class="recruit-footer-center">2019/7 &copy; 贾雨欣、李羿欣出品</Footer>
    </Layout>
  </div>
</template>

<script>
  import topper from "../components/top.vue"
  export default {
    data () {
      return {
        sty:[{
          styName:'',
          stySetting:'',
          styRoles:[]
        }],
        cityList: [
          {
            value: '1',
            label: '魏无羡'
          },
          {
            value: '2',
            label: '蓝忘机'
          },
          {
            value: '3',
            label: '江澄'
          },
          {
            value: '4',
            label: '蓝思追'
          },
          {
            value: '5',
            label: '金光瑶'
          },
          {
            value: '6',
            label: '金凌'
          },
          {
            value: '7',
            label: '蓝曦臣'
          },
          {
            value: '8',
            label: '温宁'
          },
          {
            value: '9',
            label: '蓝景仪'
          },
          {
            value: '10',
            label: '江厌离'
          },
          {
            value: '11',
            label: '金子轩'
          },
          {
            value: '12',
            label: '温情'
          },
          {
            value: '13',
            label: '聂怀桑'
          },
          {
            value: '14',
            label: '聂明玦'
          }
        ],
      }
    },
    components:{
      topper
    },
    methods:{
      backToBoard(){
        //返回board
        this.$router.push({name:'board',params:{tel:this.$route.params.tel}})
      },
      submitSty(){
        //上传剧本
        this.$router.push({name:'board',params:{tel:this.$route.params.tel}})
        this.$http.post('mixServlet',{
          'methodof':'addstory',
          'tel':this.$route.params.tel,
          'styName':sty.styName,
          'stySetting':sty.stySetting,
          'styRoles':sty.styRoles
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
      }
    }
  }
</script>


