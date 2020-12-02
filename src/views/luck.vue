<template>
    <div class="luck">
        <div class="luck-header">
            <a href="javascript:history.go(-2)"></a>
            <p>财运查询</p>
        </div>
        <div class="luck-cond">
            <input type="text" placeholder="年">
            <input type="text" placeholder="月">
            <input type="text" placeholder="日">
            <button class="luck-search">查询运势</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "luck"
    }
</script>

<style scoped>
    .luck{
        width: 100%;
        height: 100%;
        background-color: rgb(244,244,244);
    }
    .luck-header{
        width: 100%;
        height: 0.5rem;
        background-color: rgb(248,56,103);
        color: white;
        font-size: 0.15rem;
    }
    .luck-header>a{
        display: block;
        line-height: 0.5rem;
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        background-image: url("../../public/assets/images/index/return.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 0.24rem 0.24rem;
    }
    .luck-header>p{
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.5rem;
    }
    .luck-cond{
        width: 100%;
        height: 1.4rem;
        background-color: white;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        padding-top: 0.2rem;
        flex-wrap: wrap;
    }
    .luck-cond>input{
        display: block;
        width: 30%;
        height: 0.5rem;
        background-color: rgb(244,244,244);
        outline: none;
        box-sizing: border-box;
        padding-left: 0.2rem;
        font-size: 0.15rem;
        text-align: center;
    }
    .luck-search{
        width: 32%;
        height: 0.42rem;
        outline: none;
        border: none;
        background-color: #F83867;
        color: white;
    }
</style>