<template>
    <div class="setP">
        <p>设置密码</p>
        <input type="password" placeholder="输入密码" v-model="pass" class="tell" @change="ckp">
        <input type="password" placeholder="确认密码" v-model="mkpass" class="tell" @change="ckm">
        <p>密码长度6-32位，须包含数字、字母、符号至少2种或以上元素</p>
        <button class="btn" @click="makeSure">确认提交</button>
        <span id="pan1" ref="n1"></span><span id="pan2" ref="n2"></span>
    </div>
</template>

<script>
import Set from '../apis/setPass'
export default {
    name:"set-pass",
    data(){
        return{
            pass:"",
            mkpass:"",
            flagPass:false,
            flagmkPass:false
        }
    },
    methods:{
        ckp(){
            var regPass = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,32}$/;
            if(regPass.test(this.pass)){
                this.flagPass = true
                this.$refs.n1.innerHTML = ""
            }else{
                this.flagPass = false;
                this.$refs.n1.innerHTML = "密码格式错误"
            }
        },
        ckm(){
            if(this.pass == this.mkpass){
                this.flagmkPass = true
                this.$refs.n2.innerHTML = ""
            }else{
                this.flagmkPass = false;
                this.$refs.n2.innerHTML = "两次密码不一致"
            }
        },
        makeSure(){
            if(this.flagPass && this.flagmkPass){
                let tel = localStorage.getItem("tel")
                let flag = localStorage.getItem("flag")
                Set.checkUserSet(tel,this.pass,flag,(data)=>{
                    window.console.log(data)
                    window.console.log(tel,flag)
                })
                localStorage.removeItem("tel")
                localStorage.removeItem("flag")
                localStorage.setItem("route","set")
                this.$router.push("/login")
            }
        }
    }
}
</script>

<style scoped>
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
.setP>p:nth-child(4){
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
    top: 1.7rem;
    left: 2.7rem;
}
</style>