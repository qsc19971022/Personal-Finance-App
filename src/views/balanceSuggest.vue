<template>
    <div class="sug">
        <img @click="gob" src="../../public/assets/images/balance/0191121155037.png">
        <p>1分钟了解余额多</p>
        <img class="tig" src="../../public/assets/images/balance/0191121155125.png">
        <p class="yup">转入余额多，就是申购货币基金，它可以投资于同业存款</p>
        <p class="yup">、存单、短期国债等金融产品，从而获得收益</p>
        <img class="tig" src="../../public/assets/images/balance/0191121155215.png">
        <p class="yup">日常开销放在余额多，每天多点小惊喜</p>
        <img class="tig" src="../../public/assets/images/balance/0191121161320.png">
        <img class="tig" src="../../public/assets/images/balance/0191121161515.png">
        <p class="yup">线下实体店，线上淘宝购物、水电煤缴费、还信用卡等</p>
        <p class="yup">都能用余额多里的钱。你还可用余额多购买更多理财。</p>
        <img class="tig" src="../../public/assets/images/balance/0191121161914.png">
        <p class="yup">余额多转出到本人银行最快 2 小时到账，不收费。若转账</p>
        <p class="yup">到卡时选择 “余额多”，或转出到余额后提现，则需遵守</p>
        <p class="yup">钱夕夕余额提现的相关规则</p>
        <img class="tig" src="../../public/assets/images/balance/0191121162652.png">
        <img class="tig" src="../../public/assets/images/balance/0191121163131.png">
    </div>
</template>

<script>
export default {
    name:"balance-suggest",
    methods:{
        gob(){
            this.$router.push("/balance")
        }
    }
}
</script>

<style scoped>
.sug{
    font-size: 0.14rem;
}
.sug>img:nth-child(1){
    position: fixed;
    top: 0.2rem;
    left: 0.1rem;
    width: 0.2rem;
}
.sug>p:nth-child(2){
    padding-top: 0.2rem;
    margin-left: 0.4rem;
    font-size: 0.16rem;
}
.tig{
    width: 100%;
}
.yup{
    color: rgb(105, 105, 105);
    margin-left: 0.13rem;
}
</style>