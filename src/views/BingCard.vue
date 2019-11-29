<template>
<div class="bingC">
    <div class="bingcard_title">绑定银行卡<span @click="gomain"> > </span></div>
    <div  class="from-Card">
        <h3>银行卡号：</h3>
        <input type="text" v-model="bank_id" placeholder="请输入银行卡号"><br/><br/>
        <p>{{ale}}</p>
        <input type="submit" @click="goprev" value="确定">
    </div>
</div>
</template>

<script>
    export default {
        name: "BingCard",
        data(){
          return {
              bank_id:'',
              ale:""
          }
        },
        methods:{
            goprev(){
                fetch('http://49.234.85.212:8080/bank/info/',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        bank_id:this.bank_id,
                        user_phone:"17802926563"
                    })
                }).then(res=>res.json()).then((d)=>{
                        //alert(d.msg);
                        console.log(d);
                        this.ale=d.msg;
                        if (d.status==1){
                            this.$router.go(-1);
                        }
                });
            },
            gomain(){
                this.$router.go(-1);
            },
            /*regId(){
                let regId=/^\d{0,16}$/;
                if (regId.test(this.bank_id)){
                    console.log("1");
                }else{
                    alert("对不起，您的输入格式有误，请重新输入")
                }
            }*/
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .bingC{/*
        background-image: url("../../public/assets/images/info/bg6.jpg");*/
        background-color: rgba(245,245,245,0.5);
        height: 100%;
        background-size: 100% 100%;
        background-position: center 0.6rem;
        color: #333333;
        background-repeat: no-repeat;
    }
.from-Card{
    width: 90%;
    margin: 0 auto;
    background-image: url("../../public/assets/images/info/bg6.jpg");
    background-size: 50% 120%;
    background-repeat: no-repeat;
    background-position: left 0.5rem;
    border: 0.01rem solid gray;
    padding: 0.5rem 0.2rem;
    border-radius: 0.1rem;
    text-align: right;
    margin-top: 2rem;
    font-size: 0.14rem;
}
.from-Card>h3{
    text-align: left;
    margin-bottom: 0.1rem;
    color: #333333;
}
.from-Card>input:nth-child(2) {
    border: 0.001rem solid gray;
    width: 100%;
    color: #333333;
    background-color: rgba(233,233,233,0);
    padding: 0.05rem 0.1rem;
}
    .from-Card>p{
        color: red;
        margin-bottom: 0.3rem;
    }
.from-Card>input:nth-child(6){
    display: inline-block;
    padding: 0.03rem 0.2rem 0.06rem;
    font-size: 0.18rem;
    font-weight: bold;
    background-color: rgba(233,233,233,0);
    color: #333333;
    border: 0.01rem solid gray;
    letter-spacing: 0.05rem;
}

.bingcard_title{
    width: 100%;
    border-bottom: 0.01rem solid gray;
    height: 0.5rem;
    text-align: center;
    font-size: 0.18rem;
    line-height: 0.5rem;
}
.bingcard_title>span{
    position: relative;
    right: -1.2rem;
}
</style>
