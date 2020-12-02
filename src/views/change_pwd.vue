<template>
    <div class="setP">
        <p>设置密码</p>
        <span class="black" @click="go"></span>
        <input type="password" placeholder="输入旧密码" v-model="oldpwd" class="tell" @change="ckp">
        <input type="password" placeholder="输入新密码" v-model="mkpass" class="tell" @change="ckp2">
        <input type="password" placeholder="确认新密码" v-model="pass" class="tell" @blur="ckm">
        <p>密码长度6-32位，须包含数字、字母、符号至少2种或以上元素</p>
        <button class="btn" @click="makeSure">确认提交</button>
        <span id="pan1" ref="n1"></span><span id="pan3" ref="n3"></span><span id="pan2" ref="n2"></span>
    </div>
</template>

<script>
    import Set from '../apis/setPwd'
    export default {
        name:"set-pass",
        data(){
            return{
                pass:"",
                mkpass:"",
                flagPass:false,
                flagmkPass:false,
                flagsPass:false,
                oldpwd:""
            }
        },
        methods:{
            ckp(){
                var regPass = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,32}$/;
                if(regPass.test(this.oldpwd)){
                    this.flagPass = true
                    this.$refs.n1.innerHTML = ""
                }else{
                    this.flagPass = false;
                    this.$refs.n1.innerHTML = "密码格式错误"
                }
            },
            ckp2(){
                var regPass = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,32}$/;
                if(regPass.test(this.mkpass)){
                    this.flagmkPass = true
                    this.$refs.n3.innerHTML = ""
                }else{
                    this.flagmkPass = false;
                    this.$refs.n3.innerHTML = "密码格式错误"
                }
            },
            ckm(){
                if(this.pass == this.mkpass){
                    this.flagsPass = true
                    this.$refs.n2.innerHTML = ""
                }else{
                    this.flagsPass = false;
                    this.$refs.n2.innerHTML = "两次密码不一致"
                }
            },
            makeSure(){
                if(this.flagPass && this.flagmkPass && this.flagsPass){
                    let tel = localStorage.getItem("user")
                    Set.checkUserSet(tel,this.oldpwd,this.pass,(data)=>{
                        window.console.log((data));
                        if (data.status==0){
                            alert("密码修改成功")
                            this.$router.push("/login")
                        }else {
                            alert("密码修改失败")
                        }
                    })
                }
            },
            go(){
                this.$router.replace("./setting")
            }
        }
    }
</script>


<style scoped>
    .black{
        width: 0.14rem;
        height: 0.23rem;
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
        background-image: url("../../public/assets/images/my/reslut_back.png");
        background-size: 100% 100%;
    }
    .setP{
        font-size: 0.16rem;
        height: 100%;
        background-color: rgb(244, 244, 244);
        position: relative;
    }
    .setP>p:nth-child(1){
        text-align: center;
        font-size: 0.2rem;
        padding-top: 0.4rem;
        padding-bottom: 0.1rem;
    }
    .tell{
        height: 0.4rem;
        font-size: 100%;
        padding-left: 0.2rem;
        width: 93%;
        margin-left: 3%;
        margin-top: 0.2rem;
    }
    .setP>p:nth-child(6){
        font-size: 0.12rem;
        padding-left: 4%;
        color: rgb(191, 191, 191);
        margin-top: 0.15rem;
    }
    .btn{
        width: 90%;
        margin-left: 5%;
        text-align: center;
        height: 0.45rem;
        background-color: rgb(247, 105, 104);
        border: none;
        outline: none;
        color: white;
        font-size: 0.16rem;
        margin-top: 0.3rem;
    }
    #pan1{
          color: red;
          font-size: 0.12rem;
          position: absolute;
          top: 1.1rem;
          left: 2.7rem;
      }
    #pan2{
        color: red;
        font-size: 0.12rem;
        position: absolute;
        top: 2.3rem;
        left: 2.7rem;
    }
    #pan3{
        color: red;
        font-size: 0.12rem;
        position: absolute;
        top: 1.7rem;
        left: 2.7rem;
    }
</style>