<template>
  <div class="board">
    <Layout class="lay">
      <topper>

      </topper>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '540px'}">
        <div style="margin-top: 20px;margin-bottom: 20px" align="center">
          <div v-for="item in a" style="width: 50%;border: 1px solid #caccd0;border-radius: 10px" class="boardEle">
            <boardEle :data="item.name"></boardEle>
          </div>
          <div style="width: 50%;border: 1px solid #caccd0;border-radius: 10px;margin-top: 20px">
            <Card style="height: 80px">
              <router-link to="/recruit">
                <Button type="dashed" icon="ios-add" style="height: 50px;width: 50px" @click="toRecruit"></Button>
              </router-link>
            </Card>
          </div>
        </div>
      </Content
      <Footer class="board-footer-center">2019/71 &copy; 贾雨欣、李羿欣出品</Footer>
    </Layout>
  </div>
</template>
<script>
  import topper from "../components/top.vue"
  import boardEle from "../components/boardEle.vue"

  export default {
    data()
    {
      return{
          a: [{name: ''}]
      }
    },
    components:{
      topper,boardEle
    },
    mounted(){
      console.log('board') //eslint-disable-line
      this.$http.get('/board',{
        params:{
          'methodof':'showstory',
          tel:this.$route.params.tel
        }
      })
        .then((res)=>{
          this.a=res.data;
          console.log(this.data)
        })
        .catch(function(error){
          console.log(error);
        })
    },
    methods:{
      toRecruit(){
        this.$router.push({name:'recruit',params:{tel:this.$route.params.tel}})
      }

    }
  }
</script>

<style scoped>
  html,body {
    width: 100%;
    height: 100%;
  }
  .board{
    border: 1px solid #696969;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow-scrolling: auto;
  }
  .board-footer-center{
    text-align: center;
    background-color: #a3a3a3;
  }
  .lay{
    background-color: #a3a3a3;
  }

</style>