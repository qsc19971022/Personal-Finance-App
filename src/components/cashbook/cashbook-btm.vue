<template>
        <div class="cashbook-btm">
            <p class="cashbook-btm-p1"><span>{{da.day}}</span>日-<span>星期{{da.week}}</span><i class="cashbook-btm-i1">支出:<span>{{da.zc}}</span> 收入:<span>{{da.sr}}</span></i></p>
            <div class="cashbook-divs1" v-for="(sho,j) in da.shop" :j="j" :key="j" :sho="sho">
                <img src="../../../public/assets/images/product/zff.png" alt=""><span>{{sho.behavior}}</span><span>{{sho.trade_money}}</span>
            </div>
<!--           <p class="cashbook-btm-p1" v-for="(da,i) in da1[0]" :key="i" :da="da"><span>{{da.day}}</span>日-<span>星期{{da.week}}</span><i class="cashbook-btm-i1">支出:<span>{{da.trade_money}}</span> 收入:<span>{{da.behavior}}</span></i></p>-->
<!--            <div class="cashbook-divs1" v-for="(das,j) in da1[2]" :key="j">-->
<!--                <img src="../../../public/assets/images/product/zff.png" alt=""><span>{{das.behavior}}</span><span>{{das.trade_money}}</span>-->
<!--            </div>-->
<!--            <p class="cashbook-btm-p1" ><span>28</span>日-<span>星期4</span><i class="cashbook-btm-i1">支出:<span>5636</span> 收入:<span>6556</span></i></p>-->
<!--            <div class="cashbook-divs1">-->
<!--                <img src="../../../public/assets/images/product/zff.png" alt=""><span>话费充值</span><span>+632.2</span>-->
<!--            </div>-->
        </div>
</template>

<script>
    export default{
        name:"cashbook",
        props:["da"]
    }

</script>

<style scoped>
    .cashbook-btm{
        font-size:0.14rem;
        padding:0.05rem 0.1rem;
        border-bottom: rgb(154,154,154) solid 0.005rem;
    }
    .cashbook-btm-p1{
        color:rgb(154,154,154);
    }
    .cashbook-btm-i1{
        display: inline-block;
        padding-left: 1.48rem;
    }
   .cashbook-divs1{
       color:rgb(50,50,50);
       display: flex;
       justify-content: space-between;
       padding:0.1rem 0.06rem;
   }
    .cashbook-divs1>img{
        width:0.4rem;
        height:0.4rem;
    }
    .cashbook-divs1>span{
        display: inline-block;
        height:0.4rem;
        line-height: 0.4rem;
    }
    .cashbook-divs1>span:nth-of-type(1){
        width:2.3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .cashbook-divs1>span:nth-of-type(2){
       color:rgb(154,154,154);
    }
</style>