<template>
    <div class="termh">
        <img @click="goback" src="../../../public/assets/images/balance/arrow_back.png">
        <p>期限理财</p>
        <p>期限产品专区</p>
        <p>精选期限风格产品，理财更省心</p>
    </div>
</template>

<script>
export default {
    name:"term-money-header",
    methods:{
        goback(){
            this.$router.push("/index")
        }
    }
}
</script>

<style scoped>
.termh{
    width: 100%;
    height: 2rem;
    background-image: url("../../../public/assets/images/balance/fw658.png");
    background-size: 100% 100%;
    font-size: 0.14rem;
    position: relative;
}
.termh>img:nth-child(1){
    width: 0.3rem;
    position: absolute;
    top: 0.15rem;
    left: .015rem;
}
.termh>p:nth-child(2){
    color: white;
    padding-top: 0.2rem;
    padding-left: 0.4rem;
}
.termh>p:nth-child(3){
    color: white;
    font-size: 0.22rem;
    font-weight: 600;
    padding-top: 0.8rem;
    padding-left: 0.2rem;
}
.termh>p:nth-child(4){
    color: white;
    font-size: 0.14rem;
    padding-top: 0.05rem;
    padding-left: 0.2rem;
}
</style>