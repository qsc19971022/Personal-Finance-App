<template>
    <div class="detail">
        <div class="detail-div1">{{data.rate}}<span>%</span></div>
        <p class="detail-p1">年化收益率</p>
        <div class="detail-posi">
            <div class="detail-posi-top">
                <div>
                    <p>{{data.trade}}</p>
                    <p>投资期限(天)</p>
                </div>
                <div>
                    <p>100.00</p>
                    <p>起购金额(元)</p>
                </div>
            </div>
            <p class="detail-xt"></p>
            <p class="detail-p2">剩余金额<span>{{data.pro_balance}}</span>元</p>
            <p class="detail-p3">已有<span>{{data.paid_count}}</span>笔投资记录<span>>></span></p>
        </div>
        <div class="detail-jy">
            <p class="detail-p4"><span></span>交易规则</p>
            <table border="1">
                <tr>
                    <td>剩余时间</td>
                    <td>0天12小时41分07秒</td>
                </tr>
                <tr>
                    <td>起息日期</td>
                    <td>满标审核通过后次日起息</td>
                </tr>
                <tr>
                    <td>加入条件</td>
                    <td>100元,且以100元整数倍递增，单笔上限200000元</td>
                </tr>
                <tr>
                    <td>还款方式</td>
                    <td>一次性付息还款</td>
                </tr>
            </table>
        </div>
        <div class="detail-product">
            <p class="detail-p4"><span></span>产品概要</p>
            <div>
                <p>产品介绍</p><p>分开了撒酒疯开发家的舒服了撒开房方式来的及附属卡决定分开发的看了饭</p>
            </div>
            <div>
                <p>产品特点</p><p><span>{{data.produce}}</span><span>{{data.produce}}</span></p>
            </div>
            <div>
                <p>风险等级</p><p>{{data.risk_level}}</p>
            </div>
            <div>
                <p>适宜人群</p><p>{{data.produce}}</p>
            </div>
            <div>
                <p>安全保障</p><p>车辆抵押</p>
            </div>
            <p class="detail-p5">
                发快递放假啊舒服发生的饭安顺发尽快发的手机卡了粉撒娇的饭发的解放啦说的放假啊时刻提防发生的来看放假啊是快乐的放假啊是
            </p>
        </div>
        <div class="detail-foot">
            <i @click="detaili"></i>
            <span is-link @click="showPopup">立即购买</span>
        </div>
        <van-popup v-model="show">
            <div class="detail-popup">
                <p>请输入要购买的金额:</p>
                <input type="text" placeholder="请输入100的整数" v-model="detailInput" />
                <div>
                    <p @click="detailQuxiao">取消购买</p><p @click="detailQueding">确认购买</p>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import detailInfo from "../../apis/setDetailInfo";
    import Vue from "vue"
    import {Popup} from "vant"
    import {Dialog} from "vant"
    Vue.use(Popup);
    Vue.use(Dialog);
    export default {
        name: "detail-btm",
        data(){
            return{
                show: false,
                detailInput:5200
            }
        },
        props:["data"],
        methods:{
            showPopup() {
                this.show = true;
            },
            detaili(){
                this.$router.push("/counter")
            },
            detailQuxiao() {
                this.show = false;
                this.detailInput=null;
            },
            detailQueding(){
                if(this.detailInput % 100 ==0 && this.detailInput>=100){
                    this.show = false;
                    let name= "新人专享001"
                    let money = this.detailInput;
                    let user = localStorage.getItem("user");
                    detailInfo.getdetails(name,money,user,(data)=>{
                        console.log(name)
                        console.log(data)
                        console.log(money)
                        alert(data.msg)
                    })
                }else{
                    Dialog.alert({
                        message: '数据不符合规范！'
                    }).then(() => {
                        // on close
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .detail-popup{
        color:black;
        width:3rem;
        padding:0.05rem 0rem 0 0rem;
    }
    .detail-popup>p{
        display: inline-block;
        font-size: 0.14rem;
        padding-left: 0.1rem;

    }
    .detail-popup>input{
        display: inline-block;
        border:0.005rem solid rgb(173,173,173);
        height:0.3rem;
        margin:0.1rem 0.1rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .detail-popup>div{
        display: flex;
        justify-content: space-between;
        border-top: 0.005rem solid rgb(173,173,173);
        margin:0.005rem 0;
    }
    .detail-popup>div>p{
        width:50%;
        height:0.4rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .detail-popup>div>p:nth-of-type(1){
        border-right: 0.005rem solid rgb(173,173,173);
    }
    .detail{
        font-size:0.16rem ;
        padding-top: 0.1rem;
        box-sizing: border-box;
        background-color: orange;
        height:1.5rem;
        color:white;
        margin-top: 0.5rem;
        background-image: url("../../../public/assets/images/product/wx.jpg");
        background-position: 0rem 0rem;
        background-size: 3.75rem 1.5rem;
        background-repeat: no-repeat;
    }
    .detail-div1{
        font-size: 0.34rem;
        text-align: center;
        padding:0.05rem 0;

    }
    .detail-p1{
        font-size:0.2rem;
        text-align: center;
    }
    .detail-posi{
        width:3.35rem;
        background-color: white;
        margin:0.1rem auto 0 auto;
        color:black;
        font-size: 0.14rem;
        border-radius: 0.05rem;
    }
    .detail-posi-top{
        display: flex;
        height:0.8rem;
        justify-content: space-between;
        margin:0 auto;
    }
    .detail-posi-top>div{
        width: 50%;
        text-align: center;
        padding-top: 0.2rem;
        color:rgb(168,164,165);
    }
    .detail-posi-top>div>p:nth-of-type(1){
        color:black;
        font-size: 0.2rem;
        font-weight: 600;
    }
    .detail-xt{
        width:3.05rem;
        height:0.1rem;
        background-color: rgb(250,237,219);
        border-radius: 0.08rem;
        margin:0.05rem auto;
    }
    .detail-p2{
        padding-left: 0.15rem;
        margin-bottom: 0.1rem;
        color: rgb(123,119,120);
    }
    .detail-p3{
        text-align: center;
        background-color: rgb(254,244,234);
        padding:0.05rem 0;
    }
    .detail-p3>span{
        color:red;
        font-size: 0.2rem;
        font-weight: 700;
    }
    .detail-jy{
        color:black;
    }
    .detail-p4{
        padding:0.15rem 0 0.15rem 0.35rem;
        position: relative;
    }
    .detail-p4>span{
        display: inline-block;
        width:0.08rem;
        height:0.25rem;
        background-color: red;
        position: absolute;
        left:0.2rem;
        top:0.13rem;
    }
    .detail-jy>table{
        border-collapse: collapse;
        width:3.35rem;
        margin:0 auto;
        background-color: rgb(247,247,247);
    }
    .detail-jy>table td{
        min-width: 0.9rem;
        padding:0.08rem 0.12rem;
        border:solid rgb(217,217,217) 0.005rem;
        font-size: 0.14rem;
    }
    .detail-jy>table>tr>td:nth-of-type(1){
        color:rgb(134,134,134);
        font-size: 0.14rem;
    }
    .detail-product{
        color:black;
        padding-bottom: 0.4rem;
        box-sizing: border-box;
    }
    .detail-product>div{
        display: flex;
        justify-content: space-between;
        padding:0 0.2rem 0.1rem 0.2rem;
    }
    .detail-product>div>p:nth-of-type(1){
        width:0.8rem;
        color:gray;
        font-size: 0.14rem;
    }
    .detail-product>div>p:nth-of-type(2){
        width:2.5rem;
        font-size: 0.14rem;
    }
    .detail-foot{
        background-color: rgb(247,247,247);
        position: fixed;
        bottom: 0rem;
        left:0rem;
        right:0rem;
        height:0.5rem;
        padding: 0.05rem 0.1rem;
        box-sizing: border-box;
        margin:0.05rem 0rem 0 0rem;
        display: flex;
        justify-content: space-between;
    }
    .detail-foot>span{
        display: inline-block;
        width:2.75rem;
        height:0.4rem;
        background-color: rgb(239,99,53);
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.18rem;
        border-radius: 0.05rem;
    }
    .detail-foot i{
        display: inline-block;
        width:0.55rem;
        height:0.4rem;
        border-right: 0.005rem solid gray;
        background-image: url("../../../public/assets/images/product/js.png");
        background-repeat: no-repeat;
        background-size: 0.3rem;
        background-position: center;
    }
    .detail-p5{
        color:gray;
        padding:0.1rem 0.2rem;
        font-size: 0.14rem;
    }
</style>