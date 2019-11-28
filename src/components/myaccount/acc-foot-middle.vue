<template>
    <div>
        <div class="a-foot-mid" v-for="(val,index) in func" :key="index">
            <p>{{val.title}}</p>
            <div v-for="(val1,index1) in val.con" :key="index1">
                <a href="#"><img :src="val1.pic"><br/>{{val1.desc}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "acc-foot-middle",
        data(){
           return{
               "func":[
                   {"title":"资金操作",
                    "con":[
                        {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090552_com.xzck_31.png","desc":"充值"},
                        {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090552_com.xzck_33.png","desc":"提现"},
                        {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090552_com.xzck_35.png","desc":"我的佣金"},
                        {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090552_com.xzck_38.png","desc":"风险测评"},
                        {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090552_com.xzck_43.png","desc":"出借记录"},
                        {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090552_com.xzck_44.png","desc":"优先出借"},
                        {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090552_com.xzck_45.png","desc":"交易明细"}
                    ]
                   },
                   {"title":"福利兑换",
                       "con":[
                           {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090601_com.xzck_03.png","desc":"我的优惠券"},
                           {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090601_com.xzck_05.png","desc":"体验金"},
                           {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090601_com.xzck_07.png","desc":"礼品卡"},
                       ]
                   },
                   {"title":"账户管理",
                       "con":[
                           {"pic":"http://39.107.245.176/images/info/Screenshot_20191121_090601_com.xzck_12.png","desc":"账户设置"},
                       ]
                   }
               ]
           }
        }
    }
</script>

<style scoped>
.a-foot-mid{
    font-size: 0.15rem;
    border-bottom: 0.01rem solid gainsboro;
}
.a-foot-mid>p{
    color: #333333;
    width: 3rem;
    padding: 0.1rem;
}
.a-foot-mid img{
    width: 0.3rem;
    margin: 0 auto;
    text-align: center;
}
.a-foot-mid>div{
    width: 25%;
    display: inline-block;
    text-align: center;
}
.a-foot-mid a{
    font-size: 0.13rem;
    color: #333333;
    margin-bottom: 0.3rem;
    display: inline-block;
}
</style>
