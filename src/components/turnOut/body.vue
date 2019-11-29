<template>
    <div class="lla">
        <div class="outin">
            <p @click="blo" :class="blu?'blu':'qwer'">转出到银行卡</p>
            <p @click="blp" :class="blu?'qwer':'blu'">转出到余额</p>
        </div>
        <div v-if="nge">
            <div class="bank" @click="showPopup">
                <img ref="zm" v-if="data.user_bank_cards != 0" :src="data.user_bank_cards[ix].logo">
                <p v-if="data.user_bank_cards !=0" ref="zx">{{data.user_bank_cards[ix].bank_name}}</p>
                <p v-if="data.user_bank_cards == 0" class="noc">您还未绑卡，请点击此处绑定银行卡</p>
                <span>></span>
            </div>
            <div class="mon">
                <span>￥</span>
                <input @input="del" v-model="money" :placeholder="'本次最多可转出'+data.balance_money+'元'" type="Number">
                <span @click="all">全部</span>
                <span ref="z" class="warn">转出金额超限</span>
                <span @click="mov" ref="d" class="cle">x</span>
            </div>
            <div class="stl">
                <p>转出方式</p>
                    <van-radio-group v-model="radio" class="rad">
                        <van-radio name="fast">快速到账</van-radio>
                        <p class="lim">预计<span>2小时</span>内到账，每日限额1万元</p>
                        <van-radio class="rdi" name="normal">普通到账</van-radio>
                        <p class="lim">预计<span>{{m}}月{{d+4}}日</span>(4天后)23:59前到账，无限额，{{m}}月{{d}}日-{{m}}月{{d+3}}日仍有收益</p>
                    </van-radio-group>
            </div>
            <button @click="makesureOutCard" ref="b" class="qbtn">确认转出</button>
            <van-popup v-model="show" position="bottom" closeable close-icon-position="top-left" class="vap">
                <p class="chos">选择银行卡</p>
                <div class="ffban" @click="clse(i)" :key="i" v-for="(u,i) in data.user_bank_cards">
                    <img :src="u.logo">
                    <p>{{u.bank_name}}</p>
                </div>
                <div @click="bcard" class="ffban">
                    <img src="../../../public/assets/images/balance/0191122143000.png">
                    <p>添加银行卡</p>
                </div>
            </van-popup>
        </div>
        <div v-else>
            <div class="mon">
                <span>￥</span>
                <input @input="delr" v-model="moneyr" :placeholder="'本次最多可转出'+data.balance_money+'元'" type="Number">
                <span @click="allr">全部</span>
                <span ref="zz" class="warn">转出金额超限</span>
                <span @click="movr" ref="dd" class="cle">x</span>
            </div>
            <button @click="makesureOut" ref="bb" class="qbtn">确认转出</button>
            <p class="mcos">转出至余额的资金，若提现至银行卡将收取提现服务费，请对资金进行合理安排</p>
        </div>
    </div>
</template>

<script>
import outMoney from '../../apis/turnOut'
import { Radio,RadioGroup,Popup,Dialog } from 'vant';
export default {
    name:"balance-turn-out-body",
    props:["data","ix"],
    components:{
        [Radio.name]:Radio,
        [RadioGroup.name]:RadioGroup,
        [Popup.name]:Popup,
        [Dialog.name]:Dialog
    },
    data(){
        return{
            nge:true,
            blu:true,
            money:"",
            moneyr:"",
            radio:"fast",
            m:"",
            d:"",
            show:false,
        }
    },
    methods:{
        bcard(){
            this.$router.push("/BingCard")
        },
        clse(i){
            this.show = false
            this.$refs.zm.src = this.data.user_bank_cards[i].logo
            this.$refs.zx.innerHTML = this.data.user_bank_cards[i].bank_name
        },
        blo(){
            this.blu = true
            this.nge = true
        },
        blp(){
            this.blu = false
            this.nge = false
        },
        del(){       
            if(this.money > 0){
                this.$refs.d.style.display = "block"
                this.$refs.b.style.backgroundColor = "rgb(16,142,233)"
                this.$refs.b.style.color = "white"
                if(this.money > this.data.balance_money){
                    this.$refs.z.style.display = "block"
                    this.$refs.b.style.backgroundColor = ""
                    this.$refs.b.style.color = ""
                }else{
                    this.$refs.z.style.display = "none"
                }
                if(this.radio == "fast"){
                    if(this.money > 10000){
                        this.$refs.z.style.display = "block"
                        this.$refs.b.style.backgroundColor = ""
                        this.$refs.b.style.color = ""
                    }
                }
            }else{
                this.$refs.d.style.display = "none"
                this.$refs.z.style.display = "none"
                this.$refs.b.style.backgroundColor = ""
                this.$refs.b.style.color = ""
            }
            if(this.card == 0){
                this.$refs.b.style.backgroundColor = ""
                this.$refs.b.style.color = ""
            }
        },
        mov(){
            this.money = ""
            this.$refs.d.style.display = "none"
            this.$refs.z.style.display = "none"
            this.$refs.b.style.backgroundColor = ""
            this.$refs.b.style.color = ""
        },
        all(){
            this.money = this.data.balance_money
            this.$refs.d.style.display = "block"
            this.$refs.b.style.backgroundColor = "rgb(16,142,233)"
            this.$refs.b.style.color = "white"
            this.$refs.z.style = "none"
            if(this.data.balance_money == 0){
                this.$refs.b.style.backgroundColor = ""
                this.$refs.b.style.color = ""
            }
        },
        delr(){
            if(this.moneyr > 0){
                this.$refs.dd.style.display = "block"
                this.$refs.bb.style.backgroundColor = "rgb(16,142,233)"
                this.$refs.bb.style.color = "white"
                if(this.moneyr > this.data.balance_money){
                    this.$refs.zz.style.display = "block"
                    this.$refs.bb.style.backgroundColor = ""
                    this.$refs.bb.style.color = ""
                }else{
                    this.$refs.zz.style.display = "none"
                }
            }else{
                this.$refs.dd.style.display = "none"
                this.$refs.zz.style.display = "none"
                this.$refs.bb.style.backgroundColor = ""
                this.$refs.bb.style.color = ""
            }
        },
        movr(){
            this.moneyr = ""
            this.$refs.dd.style.display = "none"
            this.$refs.zz.style.display = "none"
            this.$refs.bb.style.backgroundColor = ""
            this.$refs.bb.style.color = ""
        },
        allr(){
            this.moneyr = this.data.balance_money
            this.$refs.dd.style.display = "block"
            this.$refs.bb.style.backgroundColor = "rgb(16,142,233)"
            this.$refs.bb.style.color = "white"
            this.$refs.zz.style = "none"
            if(this.data.balance_money == 0){
                this.$refs.bb.style.backgroundColor = ""
                this.$refs.bb.style.color = ""
            }
        },
        showPopup(){
            this.show = true
        },
        makesureOutCard(){
            if(this.$refs.b.style.color == "white"){
                let user = localStorage.getItem("user")
                outMoney.turnOutMoneyCard(user,"转出",this.$refs.zx.innerHTML,this.money,(data)=>{
                    window.console.log(data)
                    alert("已成功转到您的银行卡中")
                    this.$router.push("/balance")
                })
            }
        },
        makesureOut(){
            if(this.$refs.bb.style.color == "white"){
                let user = localStorage.getItem("user")
                outMoney.turnOutMoney(user,"转出",this.moneyr,(data)=>{
                    window.console.log(data)
                    alert("已成功转到您的账户余额")
                    this.$router.push("/balance")
                })
            }
        }
    },
    created(){
        let date = new Date()
        let _m = date.getMonth()+1
        let _d = date.getDate()
        this.m = _m
        this.d = _d
    }
}
</script>

<style scoped>
.lla{
    font-size: 0.16rem;
}
.outin{
    font-size: 0.14rem;
    padding-top: 0.65rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.1rem solid rgb(244, 244, 244)
}
.outin p{
    padding-bottom: 0.1rem;
}
.blu{
    color: rgb(10, 139, 231);
    border-bottom: 0.015rem solid rgb(10, 139, 231);
}
.bank{
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    border-bottom: 0.01rem solid rgb(235, 235, 235)
}
.bank>img:nth-child(1){
    width: 0.4rem;
    margin-left: 0.15rem;
}
.bank>p:nth-child(2){
    margin-left: 0.1rem;
}
.bank>span:nth-child(3){
    margin-left: 1.2rem;
    color: rgb(205, 205, 205)
}
.mon{
    font-size: 0.16rem;
    padding-left: 0.15rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    position: relative;
    border-bottom: 0.1rem solid rgb(244, 244, 244)
}
.mon>span:nth-child(1){
    font-size: 0.3rem;
}
.mon>input:nth-child(2){
    font-size: 0.22rem;
    margin-left: 0.1rem;
}
.mon>span:nth-child(3){
    font-size: 0.14rem;
    color: rgb(10, 139, 231);
    position: absolute;
    top: 0.35rem;
    left: 82%;
}
::-webkit-input-placeholder{
    font-size: 0.14rem;
}
.cle{
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 50%;
    background-color: rgb(205, 205, 205);
    text-align: center;
    line-height: 0.16rem;
    position: absolute;
    top: 0.37rem;
    left: 2.8rem;
    display: none;
}
.warn{
    font-size: 0.12rem;
    color: red;
    margin-left: 0.4rem;
    display: none;
}
.stl{
    font-size: 0.14rem;
}
.stl>p:nth-child(1){
    padding-left: 0.15rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    border-bottom: 0.01rem solid rgb(244, 244, 244)
}
.rad{
    padding-top: 0.15rem;
    padding-left: 0.15rem;
}
.lim{
    padding-top: 0.05rem;
    font-size: 0.12rem;
    padding-left: 0.28rem;
    padding-bottom: 0.2rem;
    border-bottom: 0.01rem solid rgb(244, 244, 244);
}
.lim span{
    color: red;
}
.rdi{
    padding-top: 0.15rem;
}
.qbtn{
    width: 90%;
    border: none;
    outline: none;
    height: 0.4rem;
    font-size: 0.14rem;
    margin-left: 5%;
    margin-top: 0.2rem;
}
.mcos{
    font-size: 0.12rem;
    color: rgb(180, 180, 180);
    padding-left: 0.15rem;
    padding-right: 0.1rem;
    padding-top: 0.1rem;
}
.chos{
    font-size: 0.14rem;
    text-align: center;
    padding-top: 0.15rem;
    border-bottom: 0.01rem solid rgb(205, 205, 205);
    padding-bottom: 0.1rem;
}
.vap{
    padding-bottom: 0.6rem;
}
.ffban{
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem solid rgb(205, 205, 205)
}
.ffban>img:nth-child(1){
    width: 0.4rem;
    margin-left: 0.15rem;
}
.ffban>p:nth-child(2){
    margin-left: 0.1rem;
}
.noc{
    margin-left: 17%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    font-size: 0.14rem;
}
</style>