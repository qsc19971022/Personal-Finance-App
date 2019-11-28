<template>
    <div class="investigation-header">
        <a href="javascript:history.go(-2)"></a>
        <p>安全系数调查</p>
    </div>
</template>

<script>
    export default {
        name: "investigation-header"
    }
</script>

<style scoped>
    .investigation-header{
        width: 100%;
        height: 0.5rem;
        background-color: white;
        border-bottom: 2px solid rgb(220,220,220);
        position: fixed;
        top: 0;
        left: 0;
    }
    .investigation-header>a{
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
    .investigation-header>p{
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.5rem;
    }
</style>