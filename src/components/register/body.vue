<template>
  <div class="log-body">
      <img src="../../../public/assets/images/login/logo2.png">
        <div class="ror">
            <p :class="show?'show':'trewq'" @click="updater">注册</p>
            <p :class="show?'trewq':'show'" @click="updatep">忘记密码</p><br>
        </div>
      <div id="ipt">
          <span class="iconfont icon-shouji"></span>
          <input type="number" placeholder="请输入手机号" class="tel" v-model="telephone" @change="ckNumber">
          <span ref="n1" class="pan"></span>
          <hr>
          <input type="text" placeholder="请输入验证码" class="pas" v-model="code">
          <button class="tbtn" @click="getCode" ref="g"><span ref="c" class="sct">{{count}}秒</span>{{Verification}}</button> 
      </div>
      <button class="btn" @click="checkIn">{{content}}</button>

  </div>

</template>

<script>
import { Dialog } from 'vant'
import Reg from '../../apis/reg'
export default {
    name:"register-body",
    components:{
        [Dialog.name]:Dialog
    },
    data(){
        return{
            telephone:"",
            code:"",
            flagName:false,
            show:true,
            content:"注册",
            count:60,
            Verification:"获取验证码"
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
        checkIn(){
            if(this.flagName){
                Reg.checkUserCode(this.telephone,this.code,this.content,this.$route .query.id,(data)=>{
                    if(data.status == 0){
                        this.$router.push("/set")
                        localStorage.setItem("tel",this.telephone)
                        localStorage.setItem("flag",this.content)
                    }else if(data.status == 1){
                        Dialog.alert({
                            message:"手机验证码有误"
                        })
                    }else if(data.status == 2){
                        Dialog.alert({
                            message:"用户已存在"
                        })
                    }
                })

            }
        },
        updater(){
            this.show = true
            this.content = "注册"
        },
        updatep(){
            this.show = false
            this.content = "忘记密码"
        },
        getCode(){
            if(this.flagName){
                Reg.checkUserTel(this.telephone,this.content,(data)=>{
                    if(data.status == 0){
                        this.$refs.g.style.border = "none"
                        this.Verification = "后再获取"
                        this.$refs.c.style.display = "inline"
                        let time = setInterval(()=>{
                            this.count--;
                            if(this.count == 0){
                                clearInterval(time);
                                this.$refs.g.style.border = "";
                                this.$refs.c.style.display = "none";
                                this.Verification = "获取验证码";
                                this.count = 60
                            }
                        },1000)
                    }else{
                        if(this.content == "注册"){
                            Dialog.alert({
                                message:"该用户已被注册"
                            })
                        }else{
                            Dialog.alert({
                                message:"该用户不存在"
                            })
                        }
                    }
                })
            }else{
                Dialog.alert({
                    message:"手机格式错误"
                })
            }
        }
    }
}
</script>

<style scoped>
    .sct{
        color: red;
        display: none;
    }
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
        position: relative;
    }
    .tel{
        height: 0.5rem;
        font-size: 100%;
        padding-left: 0.2rem;
    }
    .pas{
        height: 0.5rem;
        font-size: 100%;
        padding-left: 0.5rem;
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
    .tbtn{
        height: 0.3rem;
        outline: none;
        position: absolute;
        top: 0.77rem;
        left: 65%
    }
    .ror{
        display: flex;
        margin-top: 0.15rem;
        margin-bottom: 0.2rem;
    }
    .ror p:nth-child(1){
        margin-left: 0.8rem;
    }
    .ror p:nth-child(2){
        margin-left: 1.4rem;
    }
    .show{
        color: rgb(255, 57, 74);
        font-weight: 600;
    }
    .pan{
        color: red;
        font-size: 0.12rem;
    }
</style>