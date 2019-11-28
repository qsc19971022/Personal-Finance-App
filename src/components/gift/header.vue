<template>
    <div>
    <div class="header_gift">
        <span @click="goto"></span>
        <p>新手礼包</p>
    </div>
    <div class="middele">
        <div class="bg_img">
            <span class="news">新人专享基金等你拿</span>
            <span class="gift"><img src="../../../public/assets/images/xuebank_task.png" alt="logo"></span>
            <span class="gift2"><img src="../../../public/assets/images/z0fde1e788867a6466ff49531b38f57bc.png" alt="logo"></span>
            <img src="../../../public/assets/images/2.png" alt="img">
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "vheader",
        methods:{
            goto(){
                this.$router.replace("./index")
            }
        }
    }
</script>

<style scoped>
.header_gift{
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 0.6rem;
    background-image: url("../../../public/assets/images/title_bar_bg.png");
    background-size: 100% 100%;
}
.header_gift span{
    width:0.3rem;
    height: 0.3rem;
    position: absolute;
    left: 0.01rem;
    top: 0.15rem;
    background-image: url("../../../public/assets/images/arrow_back.png");
    background-size: 100% 100%;
}
    .header_gift p{
        color: white;
        text-align: center;
        line-height: 0.6rem;
        display: block;
        font-size: 0.18rem;
    }
    .middele{
        position: relative;
    }
    .middele span{
        display: block;
        color: rgb(247,49,28);
        font-size: 0.16rem;
        text-align: center;
    }
    .bg_img img{
        width: 100%;
        height: 100%;
    }
    .bg_img{
        background-image: url("../../../public/assets/images/favor_banner.png");
    }
.gift{
    width: 0.27rem;
    height: 0.28rem;
    position: absolute;
    top: 0.03rem;
    left: 0.77rem;
}
    .gift img{
        width: 100%;
        height:100%;
    }
    .gift2 img{
        width: 100%;
        height: 100%;
    }
.gift2{
    width: 0.27rem;
    height: 0.28rem;
    position: absolute;
    left: 3.34rem;
    top: 0.02rem;
    transform: rotate(-40deg);
}
    .news{
        display: block;
       padding-top: 0.1rem;
    }
</style>