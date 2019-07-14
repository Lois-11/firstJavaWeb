<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .board-footer-center{
    text-align: center;
    background-color: #a3a3a3;
  }
  .lay{
    background-color: #a3a3a3;
  }


</style>
<template>
  <div class="self">
    <Layout class="lay">
      <topper></topper>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '540px'}" align="center">
        <router-link to="/board"> <Button @click="backToBoard()" style="color: black;margin-top: 20px;margin-bottom: 5px;">返回</Button></router-link>
        <div  style="width: 20%;margin-top: 60px;border: 1px solid black;border-radius: 10px">
          <h3 style="margin: 10px">昵称:{{nickname}}</h3>
          <h3 style="margin: 10px">性别：{{gender}}</h3>
          <h3 style="margin: 10px">电话:{{tel}}</h3>
          <h3 style="margin: 10px">密码：{{password}}</h3>
          <Button @click="zhuxiao()" type="dashed" style="color: black;margin-top: 5px;margin-bottom: 10px">注销</Button>
        </div>
        <div v-for="item in a" >
          <h2 style="margin-top: 20px">你参与过的故事</h2>
          <pastSty  :data="item.name"></pastSty>
        </div>
      </Content>
      <Footer class="board-footer-center">2019/7 &copy; 贾雨欣、李羿欣出品</Footer>
    </Layout>
  </div>
</template>
<script>
  import topper from "../components/top.vue"
  import pastSty from "../components/pastSty.vue"
  export default {
    data()
    {
      return{
        b:{
          nickname:'',
          gender:'',
          tel:'',
        },
         a: [{name: ''}]
      }
    },
    mounted(){
      this.$http.get('/board',{
        params:{
          'methodof':'getinfo',
          tel:this.$route.params.tel
        }
      })
        .then((res)=>{
          this.b=res.data.contacts;
          console.log(this.contacts)
        })
        .catch(function(error){
          console.log(error);
        })
    },
    components:{
      topper,pastSty
    },
    methods:{
      zhuxiao(){
        this.$http.post('mixServlet',{
          'methodof':'delete',
          tel:this.$route.params.tel
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
      }
    }
  }
</script>

