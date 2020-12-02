<template>
    <div class="topUp">
      <div class="topUp-header">
        <a href="#/index"></a>
        <p>手机充值</p>
        </div>
        <input type="text" class="topUp-num" placeholder="请输入充值号码"  @blur="query" v-model="tel">
        <p class="topUp-place">号码归属地:<span class="place-item"></span>运营商:<span class="topUp-company"></span></p>
        <p class="topUp-title">充话费</p>
        <div class="phone-list">
            <div>
                <p> <span>30</span>元</p>
            </div>
            <div>
                <p> <span>50</span>元</p>
            </div>
            <div>
                <p> <span>100</span>元</p>
            </div>
            <div>
                <p> <span>150</span>元</p>
            </div>
            <div>
                <p> <span>200</span>元</p>
            </div>
        </div>
        <div class="phone-total">
            <p>支付金额: <span class="topUp-price">0.00</span>元</p>
            <p>话费充值红包 <span>暂无</span></p>
        </div>
        <a href="#" class="topUp-commit" @click="phone">立即充值</a>
        <van-popup v-model="show" position="bottom" closeable :style="{ height: '50%',backgroundColor:'rgb(249,249,249)'}" >
            <p class="topUp-commit-header">确定付款</p>
            <p class="topUp-commit-price"><span>￥</span>{{this.money}}</p>
            <p class="topUp-commit-info">订单信息:<span>{{this.tel+","+this.company}}</span></p>
            <p class="topUp-commit-way" @click="checkWay">付款方式:<span ref="yue">余额</span></p>
            <div :key="i" v-for="(u,i) in data">
                <div class="topUp-commit-item" @click="checked(i)">
                    <img ref="pic" :src="u.bank_logo">
                    <p ref="title">{{u.bank}}</p>
                </div>
            </div>
            <div style="width: 100%;text-align: center"><button class="topUp-commit-pay" @click="pay">付款</button></div>
        </van-popup>
        <van-popup v-model="show1" class="popup-pwd" position="bottom" :style="{ height: '42%',backgroundColor:'rgb(249,249,249)'}"><van-password-input
                :value="value"
                info="密码为 6 位数字"
                :focused="showKeyboard"
                @focus="showKeyboard = true"
                :error-info = 'info'
                ref="tip"
        />
            <van-number-keyboard
                    :show="showKeyboard"
                    theme="custom"
                    extra-key="."
                    close-button-text="完成"
                    @input="onInput"
                    @delete="onDelete"
            />
        </van-popup>
    </div>
</template>

<script>
    import $ from 'jquery';
    import Vue from 'vue';
    import { Popup,Dialog,PasswordInput, NumberKeyboard } from 'vant';
    Vue.use(Popup,Dialog).use(PasswordInput).use(NumberKeyboard);
    export default {
        name: "top-up",
        data(){
          return {
              tel:'',
              money:'',
              province:'',
              city:'',
              company:'',
              show:false,
              show1:false,
              data:'',
              wayName:'余额',
              value: '',
              showKeyboard: true,
              info:'密码为6位数字'
          }
        },
        methods:{
            query(){
                $.ajax({
                    type: "get",
                    url: 'https://api.jisuapi.com/shouji/query?appkey=06d97dfdd1fd0bb5&shouji='+this.tel,
                    dataType: "jsonp",
                    jsonp: "callback",
                    success: function(data) {
                        console.log(data);
                        this.province = data.result.province;
                        this.city = data.result.city;
                        let company = data.result.company;
                        let bigPlace = this.province + this.city;
                        $(".place-item").html(bigPlace)
                        $(".topUp-company").html(company);
                    }
                });
        },
            phone(){
                let flag = $(".phone-active").length;
                if(flag == 1){
                    this.company = $(".place-item").html();
                    this.show = "true";
                    let price = $(".phone-active>p>span").html();
                    $(".topUp-price").html(parseInt(price).toFixed(2));
                    let money = parseInt(price).toFixed(2);
                    this.money = money;
                    let ls = localStorage;
                    let ls_user = ls.getItem("user");
                    console.log(ls_user);
                }else{
                    Dialog.alert({
                        message: '请选择充值金额'
                    }).then(() => {
                        //close
                    });
                }
            },
            checkWay(){
                let user = localStorage.getItem("user");
                $(".topUp-commit-item").css({display:"block"});
                fetch("http://test.woftsun.com:3000/bank/get?user="+user).then(res=>{
                    res.json().then(cb=>{
                        this.data = cb;
                        let id = cb.length;
                      for(let i = 0; i<=id-1; i++){
                            cb[i].bank_id = cb[i].bank_id.slice(-4);
                            cb[i].bank = cb[i].bank + '(' + cb[i].bank_id + ')';
                     }
                    });
                })
            },
            checked(i){
                console.log(i)
                this.wayName = this.data[i].bank;
                this.$refs.yue.innerHTML =this.wayName;
                $(".topUp-commit-item").css({display:"none"});

            },
            pay(){
                this.show1 = true;
                this.show = false;
            },
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            },
    },
        watch:{
            value(n){
                let oLength = n.length;
                if(oLength == 6){
                    fetch('http://test.woftsun.com:3000/user/compare/',{
                        method:"POST",
                        headers:{'Content-Type':'application/json;charset=UTF-8'},
                        body:JSON.stringify({
                            user:localStorage.getItem("user"),
                            paypwd:this.value,
                        })
                    }).then(res=>res.json().then(cb=>{
                            console.log(cb.status);
                            if (cb.status == 0){
                                fetch('http://test.woftsun.com:3000/user/pay/',{
                                    method:"POST",
                                    headers:{'Content-Type':'application/json;charset=UTF-8'},
                                    body:JSON.stringify({
                                        user:localStorage.getItem("user"),
                                        phone:this.tel,
                                        money:parseInt(this.money),
                                        way:this.wayName
                                    })
                                }).then(res=>res.json().then(cb=>{
                                        console.log(cb);
                                        Dialog.alert({
                                            message: cb.msg
                                        }).then(() => {
                                            //location.href = 'javascript:history.go(-2)'
                                            this.$router.replace('topUp');
                                            this.show1 = false;
                                        });
                                    })
                                );
                            }else{
                                this.info = '支付密码输入错误'
                            }

                        })
                    );
                }else {
                    this.info = '请继续输入密码'
                }
    }
        },
        mounted(){
            this.tel = localStorage.getItem("user");
            $(".phone-list>div").click(function () {
                $(this).addClass("phone-active").siblings().removeClass("phone-active");
                let price = $(".phone-active>p>span").html();
                $(".topUp-price").html(parseInt(price).toFixed(2));
            });
            console.log($(".van-password-input__security"))
        },
        components:{
            [Popup.name]:Popup
        },
    }
</script>

<style scoped>
    .topUp{
        width: 100%;
        height: 100%;
        /*background-color: rgb(244,244,244);*/
    }
     .topUp-header{
        width: 100%;
        height: 0.5rem;
        background-color: white;
        position: relative;
        border-bottom: 2px solid rgb(220,220,220);
    }
    .topUp-header>a{
        display: block;
        line-height: 0.5rem;
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        background-image: url("../../public/assets/images/index/return.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 0.24rem 0.24rem;
    }
    .topUp-header>p{
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.5rem;
    }
    .topUp-num{
        width: 100%;
        height: 0.6rem;
        margin: 0.12rem auto;
        font-size: 0.3rem;
        font-weight: 700;
        box-sizing: border-box;
        padding-left: 0.24rem;
        border: 1px solid rgb(222,222,222);
    }
    .topUp-place{
        box-sizing: border-box;
        padding-left: 0.24rem;
        font-size: 0.13rem;
        color: gray;
    }
    .place-item{
        margin-right: 0.8rem;
    }
    .topUp-company{
        box-sizing: border-box;
        font-size: 0.13rem;
        color: gray;
    }
    .topUp-title{
        font-size: 0.20rem;
        box-sizing: border-box;
        padding-left: 0.24rem;
        margin-top: 0.16rem;
    }
    .phone-list{
        width: 94%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
    .phone-list>div{
        width: 30%;
        height: 0.8rem;
        border: 1px solid gray;
        margin: 0.1rem 0.05rem;
        border-radius: 0.1rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.15rem;
        font-weight: 600;
        color: gray;
    }
    .phone-list .phone-active{
        color: red;
        border: 2px solid red;
    }
    .phone-total{
        width: 100%;
        height: 1.4rem;
        background-color: rgb(244,244,244);
        box-sizing: border-box;
        padding: 0.23rem 0;
    }
    .phone-total>p{
        background-color: white;
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.18rem;
        font-weight: 600;
        font-family: 华文楷书;
        box-sizing: border-box;
        padding-left: 0.24rem;
    }
    .phone-total>p:nth-child(2){
        font-size: 0.16rem;
        font-weight: 500;
        font-family: 华文仿宋;
    }
    .phone-total>p:nth-child(2)>span{
        margin-left: 1.7rem;
    }
    .topUp-price{
        color: red;
    }
    .topUp-commit{
        display:block ;
        width: 70%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        margin: 0.2rem auto 0 auto;
        font-size: 0.16rem;
        background-color: rgb(248,207,55);
        color: black;
        font-weight: 500;
        border-radius: 0.1rem;
    }
    .topUp-commit-header{
        width: 100%;
        height: 0.5rem ;
        line-height: 0.5rem;
        font-size: 0.15rem;
        text-align: center;
        border-bottom: 1px solid rgb(241,241,241);
    }
    .topUp-commit-price{
        margin-top: 0.3rem;
        text-align: center;
        font-size: 0.42rem;
        font-weight: 600;
    }
    .topUp-commit-price>span{
        font-size: 0.2rem;
        font-weight: 600;
    }
    .topUp-commit-info,.topUp-commit-way{
        height: 0.4rem;
        line-height: 0.4rem;
        border-bottom: 1px solid rgb(241,241,241);
        box-sizing: border-box;
        padding: 0 0.24rem;
        font-size: 0.16rem;
        font-weight: 600;
        margin-top: 0.1rem;
        color: #4b4b4b;
        font-family: 新宋体;
    }
    .topUp-commit-info>span{
        display: inline-block;
        width: 74%;
        text-align: right;
        box-sizing: border-box;
        padding-left: 0.2rem;
    }
    .topUp-commit-way>span{
        display: inline-block;
        width: 74%;
        text-align: right;
        box-sizing: border-box;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        background-image: url("../../public/assets/images/index/right.png");
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 0.24rem 0.24rem;
    }
    .topUp-commit-pay{
        width: 40%;
        height: 0.4rem;
        background-color: #00B7FF;
        outline: none;
        border: none;
        text-align: center;
        line-height: 0.4rem;
        color: white;
        font-size: 0.16rem;
        margin: 0.2rem auto;
    }
    .topUp-commit-item{
        height: 0.4rem;
        border-bottom: 1px solid rgb(241,241,241);
        box-sizing: border-box;
        padding: 0 0.24rem;
        font-size: 0.16rem;
        font-weight: 600;
        margin-top: 0.1rem;
        color: #4b4b4b;
        font-family: 新宋体;
    }
    .topUp-commit-item>p{
        display: inline-block;
        height: 0.4rem;
        width: 70%;
        text-align: left;
        box-sizing: border-box;
        padding-left: 0.2rem;
        /*padding-bottom: 0.1rem;*/
        position: relative;
        top: -0.17rem;
        left: 0.4rem;
    }
    .topUp-commit-item>img{
        display: inline-block;
        width: 0.38rem;
        height: 0.38rem;
        line-height: 0.38rem;
        margin-left: 0.16rem;
    }
    .popup-pwd{
        box-sizing: border-box;
        padding-top: 0.3rem;
    }
</style>