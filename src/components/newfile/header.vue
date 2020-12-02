<template>
    <div class="newfile-header">
        <a href="javascript:history.go(-2)"></a>
        <p>设置头像</p>
    </div>
</template>

<script>
    export default {
        name: "newfile-header"
    }
</script>

<style scoped>
    .newfile-header{
        width: 100%;
        height: 0.5rem;
        background-color: white;
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
    }
    .newfile-header>a{
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
    .newfile-header>p{
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.5rem;
    }
</style>