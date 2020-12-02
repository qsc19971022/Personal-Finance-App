<template>
    <div class="product-topimg1">
        <img src="../../../public/assets/images/product/product-2.png" alt="">
        <a href="#/term"><img src="../../../public/assets/images/product/product-btn.png" alt=""></a>
    </div>
</template>

<script>
    export default{
        name:"topimg1"
    }

</script>

<style scoped>
    .product-topimg1{
        background-color: white;
        width:100%;
        height:2rem;
        padding:0.25rem 0;
        box-sizing: border-box;
        position:relative;
    }
    .product-topimg1>img{
        display: block;
        width:2.5rem;
        height:1.2rem;
        margin:0 auto;
    }
    .product-topimg1>a{
        /*display: block;*/
        /*width:1rem;*/
        /*height:0.35rem;*/
        /*background-color: red;*/
        /*border-radius: 0.5rem;*/
        position: absolute;
        left:2rem;
        top:1.2rem;
        /*color:white;*/
        /*font-size:0.16rem;*/
        /*text-align: center;*/
        /*line-height: 0.35rem;*/
    }
    .product-topimg1>a>img{
        display: block;
        width:1.2rem;
        height:0.5rem;
    }
</style>