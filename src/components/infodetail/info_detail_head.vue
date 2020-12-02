<template>
    <div class="info_detail_head">
        <a href="#/info"><img src="../../../public/assets/images/info/Screenshot_20191121_092208_com_03.png" ></a>
        资讯详情 <p>!</p>
    </div>
</template>

<script>
    export default {
        name: "info_detail_head"
    }
</script>

<style scoped>
.info_detail_head{
    width: 100%;
    background:linear-gradient(120deg,white,linen);
    font-size: 0.18rem;
    height: 0.5rem;
    display: flex;
    padding:0.1rem;
    color: #333333;
    letter-spacing: 0.05rem;
    font-weight: 600;
    justify-content: space-between;
    border-bottom: 0.01rem solid gainsboro;
}
.info_detail_head>a>img{
    width: 0.1rem;
    margin-top: 0.05rem;
    height: 0.2rem;
}
.info_detail_head>p{
    width: 0.2rem;
    font-size: 0.17rem;
    padding:0 0.06rem;
    height: 0.2rem;
    font-weight: 500;
    margin-top: 0.05rem;
    color: gray;
    line-height: 0.2rem;
    border-radius: 50%;
    border: 0.01rem solid black;
}
</style>
