<template>
    <div class="bind-con" v-if="data1">
        <a class="bind-option" v-for="(val,index) in data1" @click="CardId(index)" :style="bgStyle[index]" :key="index">
            <img :src="val.bank_logo">
            <div class="bind-option-con">
                <p>{{val.bank}}</p>{{val.bank_type}}
            </div>
            <p>{{val.bank_id}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "bind-con",
        props:["data1"],
        data(){
            return{
               /* con:[
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                    "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"},
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                        "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"},
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                        "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"},
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                        "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"},
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                        "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"},
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                        "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"}
                    ],*/
                bgStyle:[
                    "background: linear-gradient(blue 60%,deepskyblue);color:white;fontWeight:bold",
                    "background: linear-gradient(black 60%,gray);color:white;fontWeight:bold",
                    "background: linear-gradient(red,black);color:white;fontWeight:bold",
                    "background: linear-gradient(blue,deepskyblue);color:white;fontWeight:bold",
                    "background: linear-gradient(black 60%,gray);color:white;fontWeight:bold",
                    "background: linear-gradient(red,black);color:white;fontWeight:bold",
                    "background: linear-gradient(blue 60%,deepskyblue);color:white;fontWeight:bold",
                    "background: linear-gradient(black 60%,gray);color:white;fontWeight:bold",
                    "background: linear-gradient(red,black);color:white;fontWeight:bold",
                    "background: linear-gradient(blue,deepskyblue);color:white;fontWeight:bold",
                    "background: linear-gradient(black 60%,gray);color:white;fontWeight:bold",
                    "background: linear-gradient(red,black);color:white;fontWeight:bold",
                ]
            }
        },
        methods:{
            changeID(){
                for(let i=0;i<=10;i++){
                    let str=this.data1[i].bank_id;
                    str="**** **** **** "+str.substr(str.length-4);
                    this.data1[i].bank_id=str;
                }
            },
            CardId(index){
                let flag1=this.$route.query.flag;
                console.log(this.$route.query.flag)
                let cardn=localStorage.getItem("bank_list");
                let data1=JSON.parse(cardn)
                let Cardname=data1[index].bank_name;
                localStorage.setItem("bkname",Cardname)
                if(flag1=="充值"){
                    this.$router.push('/setmoney');
                }else{
                    this.$router.push('/getmoney');
                }
            }
        },
        beforeUpdate(){
            this.changeID();
        }
    }
</script>

<style scoped>
.bind-con{
    width: 100%;
    background-image:url("../../../public/assets/images/info/Screenshot_20191121_092208_com_12.png") ;
    background-size: 100%;
    padding-top: 1.6rem;
    margin-top: 0.5rem;
    background-repeat: no-repeat;
}
.bind-option{
        width: 94%;
        height: 1rem;
        color: gray;
        flex-wrap:wrap;
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0.15rem;
        line-height: 0.25rem;
        box-shadow: 0 0.1rem 0.2rem gainsboro;
        font-size: 0.15rem;
        background-color: white;
        border-radius: 0.05rem;
        margin: 0 auto 0.3rem ;
    }
.bind-option-con{
    color: white;
    font-size: 0.14rem;
    width: 2.68rem;
}
    .bind-option-con>p{
        font-size: 0.15rem;
        font-weight: 600;
        color:white;
    }
.bind-option>img{
    height:0.4rem;
    border-radius: 50%;
    margin-top: 0.05rem;
}
.bind-option>p:nth-child(3){
    height: 0.2rem;
    margin-left: 0.55rem;
}
</style>
