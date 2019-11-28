<template>
  <div class="log-body">
      <img src="../../../public/assets/images/login/logo2.png">
      <div id="ipt">
          <span class="iconfont icon-shouji"></span>
          <input type="number" placeholder="请输入手机号" class="tel" v-model="telephone" @change="ckNumber">
          <span ref="n1" class="pan"></span>
          <hr>
          <span class="iconfont icon-mima"></span>
          <input type="password" placeholder="请输入密码" class="pas" v-model="pass" @change="ckPass">
          <span ref="n2" class="pan"></span>
      </div>
      <button class="btn" @click="checkIn">登录</button>
  </div>
</template>

<script>
import Login from '../../apis/login'
export default {
    name:"login-body",
    data(){
        return{
            telephone:"",
            pass:"",
            flagName:false,
            flagPass:false
        }
    },
    methods:{
        ckNumber(){
            var reg = /^1\d{10}$/;
            if(reg.test(this.telephone)){
                this.flagName = true
                this.$refs.n1.innerHTML = ""
            }else{
                this.flagName = false
                this.$refs.n1.innerHTML = "号码格式错误"
            }
        },
        ckPass(){
            var regPass = /^.{6,}$/;
            if(regPass.test(this.pass)){
                this.flagPass = true
                this.$refs.n2.innerHTML = ""
            }else{
                this.flagPass = false
                this.$refs.n2.innerHTML = "不能少于6位"
            }
        },
        checkIn(){
            if(this.flagName && this.flagPass){
                Login.checkUserLogin(this.telephone,this.pass,(data)=>{
                    window.console.log(data)
                })
                if(localStorage.getItem("route") == "set"){
                    this.$router.push("/index")
                    localStorage.removeItem("route")
                }else{
                    this.$router.go(-1)
                }
            }
        }
    }
}
</script>

<style scoped>
.log-body{
    font-size: 0.16rem;
    position: relative;
    padding-top: 0.2rem;
}
.log-body>img:nth-child(1){
    width: 0.55rem;
    height: 0.55rem;
    position: absolute;
    left: 42%;
    top: -0.25rem;
}
#ipt{
    background-color: white;
    width: 92%;
    height: 1.3rem;
    margin-left: 4%;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    border-radius: 0.1rem;
}
.tel{
    height: 0.5rem;
    font-size: 100%;
    padding-left: 0.5rem;
    width: 2.1rem;
}
.pas{
    height: 0.5rem;
    font-size: 100%;
    padding-left: 0.5rem;
    width: 2.1rem;
}
#ipt hr{
    background-color:rgb(244, 244, 244);height:1px;border:none;
}
.btn{
    width: 90%;
    margin-left: 5%;
    text-align: center;
    height: 0.45rem;
    background-color: rgb(255, 150, 0);
    border: none;
    outline: none;
    color: white;
    font-size: 0.16rem;
    margin-top: 0.3rem;
}
.icon-shouji{
    font-size: 0.22rem;
    margin-left: 0.1rem;
}
.icon-mima{
    font-size: 0.18rem;
    margin-left: 0.14rem;
}
.pan{
    color: red;
    font-size: 0.12rem;
}
</style>