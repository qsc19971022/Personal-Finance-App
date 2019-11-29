<template>
    <div class="afoot-top" v-if="data">
        <p class="afoot-top-con">我的账户<span><img src="../../../public/assets/images/info/logo.png">小夕理财资金存管</span></p>
        <div class="account-money">
            <div class="account-money-top">
                <h3 class="account-total">账户总资产(元)<span class="ac-show" :class="{ac_open:!flag}" @click="Openeye"></span></h3>
                <h1 v-if="flag">{{data.u_account_money}}</h1>
                <h1 v-else>****</h1>
                <a href="#/"><img src="../../../public/assets/images/info/Screenshot_20191118_221356_com.xzck_03.png"></a>
            </div>
            <div class="account-money-foot">
                <div>
                    <h4>已赚收益(元)</h4>
                    <h4 v-if="flag">{{data.income}}</h4>
                    <h4 v-else>****</h4>
                </div>
                <div>
                    <h4>账户余额(元)</h4>
                    <h4 v-if="flag">{{data.user_money}}</h4>
                    <h4 v-else>****</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "acc-foot-top",
        props:["data"],
        data(){
            return{
                totalMoney:'0.00',
                balance:'0.00',
                Profit:'0.00',
                flag:true
            }
        },
        methods:{
            Openeye(){
                if (this.flag==true){
                    this.flag=false;
                }else {
                    this.flag=true;
                }
            }
        }
    }
</script>

<style scoped>
.account-money-foot{
    display: flex;
    justify-content: space-around;
    font-weight: 500;
    color: rgb(111,111,111);
}
.afoot-top{
    border-top-right-radius: 0.15rem;
    border-top-left-radius: 0.15rem;
    width: 100%;
    margin: 0.1rem auto;
    border-bottom: 0.01rem solid gainsboro;
    font-size: 0.14rem;
}
.ac-show{
    width: 0.2rem;
    height: 0.12rem;
    display: inline-block;
    margin-left: 0.1rem;
    background-image: url("../../../public/assets/images/info/Screenshot_20191118_221341_com.xzck_07.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.ac_open{
    background-image: url("../../../public/assets/images/info/closeeye_03.png");
}
.afoot-top>p{
    color: rgb(253,253,253);
    border-top-right-radius: 0.15rem;
    border-top-left-radius: 0.15rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size:0.16rem;
    width: 100%;
    padding: 0 0.1rem;
    display: flex;
    background-color: rgb(239,104,59);
    justify-content: space-between;
}
.afoot-top>p>span{
    display: flex;
    font-size:0.12rem;
}
.afoot-top-con>span>img{
    width: 0.3rem;
    height: 0.3rem;
    margin-top: 0.1rem;
}
.account-money-top{
    text-align: center;
}
.account-money{
    padding: 0.1rem;
    position: relative;
}
    .account-money-foot h4 {
        width: 1rem;
        font-weight: 500;
        color: #333333;
        font-size: 0.16rem;
        text-align: center;
    }
    .account-money-top>h1{
        width: 2rem;
        margin:0.05rem auto 0.5rem;
        color: red;
        font-weight: 500;
    }
    .account-money-top>h3{
        color: #333333;
        font-size: 0.18rem;
        font-weight: 500;
    }
.account-money-top>a>img{
    position: absolute;
    top: 0.3rem;
    width: 0.1rem;
    right: 0.1rem;
    height: 0.18rem;
}
</style>
