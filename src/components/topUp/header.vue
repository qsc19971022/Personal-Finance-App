<template>
    <div class="topUp-header">
        <a href="#/index"></a>
        <p>手机充值</p>
    </div>
</template>

<script>
    export default {
        name: "topUp-header"
    }
</script>

<style scoped>
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
        background-image: url("../../../public/assets/images/index/return.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 0.24rem 0.24rem;
    }
    .topUp-header>p{
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.5rem;
    }
</style>