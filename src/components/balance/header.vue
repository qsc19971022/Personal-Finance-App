<template>
    <div class="bal">
        <img src="../../../public/assets/images/balance/0191121102229.png">
        <h1>余 额 多</h1>
        <p>会 赚 钱 的 零 钱 包</p>
        <div class="con">
            <div class="con1">
                <img src="../../../public/assets/images/balance/0191121102351.png">
                <p class="hsp">账户有保障</p>
            </div>
            <div class="con1">
                <img src="../../../public/assets/images/balance/0191121102421.png">
                <p class="hsp">想用随时花</p>
            </div>
            <div class="con1">
                <img src="../../../public/assets/images/balance/0191121102443.png">
                <p class="hsp">收益天天算</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"balance-header"
}
</script>

<style scoped>
.bal{
    font-size: 0.16rem;
    background-color: rgb(255, 102, 0)
}
.bal>img:nth-child(1){
    width: 0.18rem;
    position: absolute;
    top: 0.3rem;
    left: 0.1rem;
}
.bal>h1:nth-child(2){
    padding-top: 0.55rem;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 0.26rem;
}
.bal>p:nth-child(3){
    font-size: 0.12rem;
    text-align: center;
    color: rgb(255, 205, 168)
}
.hsp{
    font-size: 0.13rem;
    color: rgb(255, 205, 168);
    line-height: 0.2rem;
    margin-left: 0.06rem;
}
.con1 img{
    width: 0.18rem;
}
.con1{
    display: flex;
}
.con{
    display: flex;
    justify-content: space-around;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}
</style>