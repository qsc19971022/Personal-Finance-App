<template>
    <div class="MyCoupon">
        <h4><a href="#/"><img src="../../public/assets/images/info/Screenshot_20191121_092208_com_03.png"></a>我的优惠券<span></span></h4>
        <div class="MyCoupon_doc">
            <span v-for="(val,index) in doc" :class="{active_copdoc:index==number2}" @click="changecou(index)" :key="index">{{val}}</span>
        </div>
        <div>
            <div class="Coupon" v-if="CouponInfo.length!=0">
                <a href="#/vipactivites">领券中心 <span>> </span></a>
                <div class="MyCoupon_con" v-for="(val1,index1) in CouponInfo" :key="index1">
                    <div class="MyCoupon_con_op">
                        <p>￥{{val1.e}}</p>
                        <div class="coupon_title">
                            <p>{{val1.vip_name}}</p>
                            <p>{{val1.expires_time}}</p>
                        </div>
                    </div>
                    <a href="#/product" :class="{chgery:flag}" v-text="infoop"></a>
                </div>
            </div>
            <div class="noCoupon" v-else>
                暂无优惠券 <br/>
                <a href="#/my_account">前往领券中心 ></a>
            </div>
        </div>
    </div>
</template>

<script>
    import MyCouponApi from "../apis/MyCouponApi";

    export default {
        name: "MyCoupon",
        data(){
            return{
                doc:["未使用","已使用","已过期"],
                number2:0,
                flag:false,
                infoop:"立即使用",
                CouponInfo:[
                    {"e":"30","vip_name":"youhuiquan","expires_time":"2019-10-29"},
                    {"e":"30","vip_name":"youhuiquan","expires_time":"2019-10-29"},
                    {"e":"30","vip_name":"youhuiquan","expires_time":"2019-10-29"},
                ],
                info:[]
            }
        },
        methods:{
            async _initPageInfo(){
                let user_phone=localStorage.getItem("user");
                let data=await MyCouponApi.getInfoPage(user_phone);
                //this.CouponInfo=data;
                console.log(data);
                if(data.is_expires==true){
                    alert(data.msg);
                    this.flag=true;
                    this.infoop="已过期";
                }
                console.log(data);
            },
            changecou(index){
                 this.number2=index;
            }
        },
        async mounted() {
            this._initPageInfo();
        },
    }
</script>

<style scoped>
    .coupon_title>p:nth-child(1){
        font-size: 0.16rem;
    }
    .coupon_title>p:nth-child(2){
        font-size: 0.13rem;
        color: #333333;
    }
.MyCoupon{
    font-size: 0.18rem;
}
.MyCoupon_con_op{
    display: flex;
    justify-content: space-between;
}
.Coupon{
    background-color: rgb(240,240,240);
    min-height: 5.71rem;
    width: 100%;
    padding: 0.1rem;
    font-size: 0.16rem;
}
    .MyCoupon_con>.chgery{
        background-color: gray;
    }
.MyCoupon_con{
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 0.3rem;
    border-radius: 0.05rem;
    background-color: white;
    margin: 0.1rem 0;
    color: black;
    padding: 0.1rem;
}
.MyCoupon_con_op>p{
    color: rgb(255,187,0);
    font-weight: bold;
    margin-right: 0.05rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.3rem;
}
.MyCoupon_con>a{
    display: inline-block;
    color: white;
    width: 0.8rem;
    font-size: 0.14rem;
    text-align: center;
    margin-top: 0.15rem;
    height: 0.3rem;
    line-height: 0.3rem;
    background-color: rgb(255,187,0);
    border-radius: 0.1rem;
}
.Coupon>a{
    display: inline-block;
    padding: 0.2rem 0 0.2rem 0.7rem;
    width: 100%;
    font-size: 0.16rem;
    color: black;
    background-color: white;
    background-repeat: no-repeat;
    border-radius: 0.05rem;
    background-position: 0.2rem center;
    background-image: url("../../public/assets/images/info/linbg.jpg");
}
.Coupon>a>span{
    margin-left: 1.8rem;
}
.noCoupon{
    background-image: url("../../public/assets/images/info/bgcoun.jpg");
    background-position: center 1rem;
    padding-top: 1.8rem;
    background-repeat: no-repeat;
    background-color: rgb(240,240,240);
    min-height: 5.71rem;
    width: 100%;
    font-size: 0.16rem;
    text-align: center;
}
.noCoupon>a{
    font-size: 0.15rem;
    display: inline-block;padding: 0.1rem 0.7rem;
    background-color: rgb(244,46,36);
    color: white;
    border-radius: 0.05rem;
    margin-top: 0.5rem;
}
.active_copdoc{
    color: red;
    font-weight: bold;
    border-bottom: 0.02rem solid red;
}
.MyCoupon>h4{
    display: flex;
    font-weight: 500;
    justify-content: space-between;
    font-size: 0.18rem;
    padding: 0.1rem;
    border-bottom: 0.01rem solid gainsboro;
}
.MyCoupon>h4>a>img{
    height: 0.2rem;
    width: 0.1rem;
    margin-top: 0.05rem;
}
    .MyCoupon_doc{
        height: 0.5rem;
        display: flex;
        line-height: 0.5rem;
        justify-content: space-around;
    }
</style>
