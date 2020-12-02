<template>
    <div class="baf">
        <p>新人专享</p>
        <div class="bgf">
            <div class="sgf" @click="gonew">
                <div>
                    <p>新人见面礼</p>
                    <p>收益奖励当钱花</p>
                </div>
                <div>
                    <img src="../../../public/assets/images/balance/0191121102513.png">
                </div>
            </div>
            <div class="sgf" @click="goSug">
                <div>
                    <p>了解余额多</p>
                    <p>超1亿用户之选</p>
                </div>
                <div>
                    <img src="../../../public/assets/images/balance/0191121102534.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"balance-footer",
    methods:{
        goSug(){
            this.$router.push("/sug")
        },
        gonew(){
            this.$router.push("/gift")
        }
    }
}
</script>

<style scoped>
.baf{
    font-size: 0.16rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    padding-top: 0.3rem;
}
.bgf{
    display: flex;
    margin-top: 0.2rem;
}
.sgf{
    display: flex;
    width: 45%;
    height: 0.6rem;
    padding-left: 0.1rem;
}
.sgf p:nth-child(1){
    font-size: 0.13rem;
    margin-top: 0.1rem;
    color: rgb(255, 85, 0);
    font-weight: 600;
}
.sgf p:nth-child(2){
    font-size: 0.12rem;
}
.sgf img{
    width: 0.4rem;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
}
.bgf>div:nth-child(1){
    background-color: rgb(255, 243, 243)
}
.bgf>div:nth-child(2){
    background-color: rgb(254, 236, 248);
    margin-left: 0.2rem;
}
</style>