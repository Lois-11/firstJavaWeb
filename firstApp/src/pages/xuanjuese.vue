<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .xuanjuese{
    border: 1px solid #696969;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-scrolling: auto;
  }

  .xuanjuese-content{
    width: 600px;
    border-radius: 10px;
  }

  .xuanjuese-footer-center{
    text-align: center;
    background-color: #a3a3a3;
  }
  .lay{
    background-color: #a3a3a3;
  }
</style>
<template>
  <div class="xuanjuese">
    <Layout class="lay">
      <topper></topper>
      <Content :style="{margin: '88px 400px 0', background: '#fff', minHeight: '540px'}" class="xuanjuese-content">
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="3" offset="1">
            <h2>设定：</h2>
          </Col>
          <Col span="19">
            <div style="height: 250px;border: 1px solid #929498;border-radius: 5px;font-size: medium">{{sheding}}</div>
          </Col>
        </Row>
        <Row style="margin-top: 20px;margin-bottom: 5px">
          <Col span="11" offset="1">
            <h2>请选择您的角色：</h2>
          </Col>
          <Col span="11">
            <Select v-model="myRole" clearable style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </Col>
        </Row>
        <Row style="margin-top: 40px;margin-bottom: 5px">
          <Col span="13" offset="3">
            <router-link to="/pangguan"><Button shape="circle" icon="md-arrow-round-back" @click="backToPangGuan">返回</Button></router-link>
          </Col>
          <Col span="7">
            <router-link to="/xiejuben"><Button shape="circle" icon="md-arrow-round-up" @click="intoDialog">进入对戏</Button></router-link>
          </Col>
        </Row>
      </Content>
      <Footer class="xuanjuese-footer-center">2019/7 &copy; 贾雨欣、李羿欣出品</Footer>
    </Layout>
  </div>
</template>

<script>
  import topper from "../components/top.vue"
  export default {
    data () {
      return {
        sheding:'',
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
        myRole: ''
      }
    },
    components:{
      topper
    },
    mounted(){
      this.$http.get('board',{
        params:{
          'methodof':'selectrole',
          tel:this.$route.params.tel,
          styName:this.$route.params.styName
        }
      })
        .then((res)=>{
          this.sheding=res.data;
          console.log(this.a)
        })
        .catch(function(error){
          console.log(error);
        })
    },
    methods:{
      backToPangGuan(){
        this.$router.push({name:'pangguan',params:{tel:this.$route.params.tel}})
      },
      intoDialog(){
        this.$router.push({name:'xiejuben',params:{tel:this.$route.params.tel,myRole:this.myRole}})
      }
    }
  }
</script>