<template>
    <div class="product-topimg2">
        <img src="../../../public/assets/images/product/product-1.png" alt="">
        <a href="#"><img src="../../../public/assets/images/product/product_login_btn.png" alt=""></a>
    </div>
</template>

<script>
    export default{
        name:"topimg2"
    }

</script>

<style scoped>
    .product-topimg2{
        background-color: white;
        width:100%;
        height:2rem;
        padding:0.25rem 0;
        box-sizing: border-box;
        position:relative;
    }
    .product-topimg2>img{
        display: block;
        width:3rem;
        height:1.5rem;
        margin:0 auto;
    }
    .product-topimg2>a{
        /*display: block;*/
        /*width:1rem;*/
        /*height:0.35rem;*/
        /*background-color: rgb(255,105,105);*/
        /*border-radius: 0.5rem;*/
        position: absolute;
        left:2rem;
        top:1.2rem;
        /*color:white;*/
        /*font-size:0.16rem;*/
        /*text-align: center;*/
        /*line-height: 0.35rem;*/
        /*font-weight: 200;*/
    }
    .product-topimg2>a>img{
        display: block;
        width:1.2rem;
        height:0.5rem;
    }
</style>