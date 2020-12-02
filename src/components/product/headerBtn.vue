<template>
    <div class="counter-headerBtn">
        <a href="#/index"><img src="../../../public/assets/images/product/product-topbtn2.png" alt=""><span>日历</span></a>
        <a href="#/term"><img src="../../../public/assets/images/product/product-topbtn1.png" alt=""><span>添加</span></a>
    </div>
</template>

<script>
    export default{
        name:"headerBtn"
    }
</script>

<style scoped>
    .counter-headerBtn{
        height:0.3rem;
        font-size: 0.16rem;
        padding-left:2.3rem;
        box-sizing: border-box;
        padding-top:0.1rem;
    }
    .counter-headerBtn>a{
        position: relative;
        display: inline-block;
        width:0.7rem;
    }
    .counter-headerBtn>a>img{
        display: inline-block;
        width:0.2rem;
        height:0.2rem;
    }
    .counter-headerBtn>a>span{
        display: inline-block;
        font-size: 0.16rem;
        width:0.5rem;
        position: absolute;
        left:0.25rem;
        top:0rem;
        color:red;
    }
</style>