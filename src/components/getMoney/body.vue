<template>
    <div class="lln">
        <div class="bank" @click="showPopup">
            <img ref="q" src="../../../public/assets/images/balance/0191122151358.png">
            <div class="bst">
                <p ref="w">账户余额</p>
                <p ref="e">{{data.money}}元</p>
            </div>
            <span>></span>
        </div>
        <p class="zmy">提现金额(元)</p>
        <div class="mon">
            <span>￥</span>
            <input ref="ipt" @input="del" v-model="money" placeholder="请输入提现金额" type="Number">
            <span ref="all" @click="all">全部</span>
            <span ref="z" class="warn">余额可用额度不足</span>
            <span @click="mov" ref="d" class="cle">x</span>
        </div>
        <p class="pln">预计到账时间 <span>{{m}}月{{d}}日</span></p>
        <button ref="b" class="qbtn" @click="makesureInMoney">确认提现</button>
        <p class="mcos">余额提现的资金若需转出至银行卡，请提前转出至余额后提现，提现将收取提现服务费，请对资金进行合理安排</p>
        <van-popup v-model="show" position="bottom" closeable close-icon-position="top-left" class="vap" @close="chs">
            <p class="chos">选择付款方式</p>
            <div class="ffban" @click="bmo">
                <img ref="r" src="../../../public/assets/images/balance/0191122151358.png">
                <p ref="t">账户余额（剩余：￥<span ref="y">{{data.money}}元</span>）</p>
            </div>
            <div :key="i" v-for="(u,i) in data.bank_card">
            <div class="ffban" @click="clse(i)">
                <img ref="qq" :src="u.bank_logo">
                <div class="fbn">
                    <p ref="ww">{{u.bank}}</p>
                    <p ref="ee">银行单笔限额20000.00元</p>
                </div>    
            </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import getMoney from '../../apis/setmoneyApi.js'
import { Popup } from 'vant';
export default {
    name:"balance-turn-in-body",
    props:["data"],
    components:{
        [Popup.name]:Popup
    },
    data(){
        return{
            money:"",
            m:"",
            d:"",
            show:false
        }
    },
    methods:{
        del(){
            if(this.money > 0){
                if(this.$refs.w.innerHTML == "账户余额"){
                    this.$refs.d.style.display = "block"
                    this.$refs.b.style.backgroundColor = "rgb(16,142,233)"
                    this.$refs.b.style.color = "white"
                    if(this.money > this.data.user_account_balance){
                        this.$refs.z.style.display = "block"
                        this.$refs.z.innerHTML = "余额可用额度不足"
                        this.$refs.b.style.backgroundColor = ""
                        this.$refs.b.style.color = ""
                    }else{
                        this.$refs.z.style.display = "none"
                    }
                }else{
                    this.$refs.d.style.display = "block"
                    this.$refs.b.style.backgroundColor = "rgb(16,142,233)"
                    this.$refs.b.style.color = "white"
                    if(this.money > 20000){
                        this.$refs.z.style.display = "block"
                        this.$refs.z.innerHTML = "超出转入限额"
                        this.$refs.b.style.backgroundColor = ""
                        this.$refs.b.style.color = ""
                    }else{
                        this.$refs.z.style.display = "none"
                    }
                }
            }else{
                this.$refs.d.style.display = "none"
                this.$refs.z.style.display = "none"
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
            this.money = this.data.user_account_balance
            this.$refs.d.style.display = "block"
            this.$refs.z.style = "none"
            this.$refs.b.style.backgroundColor = "rgb(16,142,233)"
            this.$refs.b.style.color = "white"      
        },
        clse(i){
            this.show = false
            this.$refs.q.src = this.data.bank_card[i].bank_logo
            this.$refs.w.innerHTML = this.data.bank_card[i].bank
            this.$refs.e.innerHTML = "银行单笔限额20000元"
        },
        bmo(){
            this.show = false
            this.$refs.q.src = this.$refs.r.src
            this.$refs.w.innerHTML = "账户余额"
            this.$refs.e.innerHTML = this.$refs.y.innerHTML
        },
        showPopup(){
            this.show = true
        },
        chs(){
            if(this.$refs.w.innerHTML != "账户余额"){
                this.$refs.all.style.display = "none"
            }else{
                this.$refs.all.style.display = "inline-block"
            }
            this.$refs.d.style.display = "none"
            this.$refs.z.style.display = "none"
            this.$refs.b.style.backgroundColor = ""
            this.$refs.b.style.color = ""
            this.money = ""
        },
        makesureInMoney(){
            if(this.$refs.b.style.color == "white"){
                let user = localStorage.getItem("user")
                getMoney.getmoneyInfo(user,this.money,(data)=>{
                    window.console.log(data)
                    alert("提现成功")
                    //this.$router.push("/balance")
                    window.history.back(-1); 
                })
            }
        }
    },
    created(){
        let date = new Date()
        let _m = date.getMonth()+1
        this.m = _m
        let _d = date.getDate()+4
        this.d = _d
    }
}
</script>

<style scoped>
.lln{
    font-size: 0.16rem;
    padding-top: 0.53rem;
}
.bank{
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    border-bottom: 0.1rem solid rgb(235, 235, 235);
    position: relative;
    background-color: white;
}
.bank>img:nth-child(1){
    width: 0.4rem;
    margin-left: 0.15rem;
}
.bst>p:nth-child(1){
    margin-left: 0.1rem;
}
.bst>p:nth-child(2){
    margin-left: 0.1rem;
    font-size: 0.12rem;
    color: rgb(190, 190, 190)
}
.bank>span:nth-child(3){
    color: rgb(205, 205, 205);
    position: absolute;
    top: 0.1rem;
    left: 3.2rem;
}
.mon{
    font-size: 0.16rem;
    padding-left: 0.15rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    position: relative;
    border-bottom: 0.01rem solid rgb(205, 205, 205);
    background-color: white;
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
.zmy{
    font-size: 0.14rem;
    color: rgb(190, 190, 190);
    padding-left: 0.2rem;
    padding-top: 0.15rem;
    background-color: white;
}
.pln{
    background-color: white;
    font-size: 0.12rem;
    padding-left: 0.15rem;
    padding-right: 0.1rem;
    padding-top: 0.1rem;
    padding-bottom: 0.15rem;
}
.pln span{
    color: red;
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
.fbn>p:nth-child(1){
    margin-left: 0.1rem;
}
.fbn>p:nth-child(2){
    margin-left: 0.1rem;
    font-size: 0.12rem;
    color: rgb(190, 190, 190)
}
</style>