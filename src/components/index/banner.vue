<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide box1"></div>
            <div class="swiper-slide box2"></div>
            <div class="swiper-slide box3"></div>
            <div class="swiper-slide box4"></div>
            <div class="swiper-slide box5"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import swiper from 'swiper';
    export default {
        name: "banner",
        methods:{
            mySwiper(){
                new swiper('.swiper-container',{
                    loop : true,
                    pagination:{
                        el:'.swiper-pagination',
                        clickable :true,
                    },
                    autoplay:{
                        stopOnLastSlide:true,
                    }
                });
            }
        },
        mounted() {
            this.mySwiper()
        }

    }
</script>

<style scoped>
    @import "../../../node_modules/swiper/css/swiper.min.css";
    .swiper-container {
        width: 100%;
        height: 2rem;
        --swiper-pagination-color: #00ff33;
        --swiper-theme-color: #ff6600;
    }
    .swiper-container>div{
        background-size: 100% 100%;
    }
    .box1 {
        width: 100%;
        height: 2rem;
        background-image: url("http://money.woftsun.com/res/img/cbanner1.jpg");
        background-size: 100% 100%;
    }

    .box2 {
        width: 100%;
        height: 2rem;
        background-image: url("http://money.woftsun.com/res/img/cbanner2.jpg");
        background-size: 100% 100%;
    }

    .box3 {
        width: 100%;
        height: 2rem;
        background-image: url("http://money.woftsun.com/res/img/cbanner3.jpg");
        background-size: 100% 100%;
    }
    .box4{
        width: 100%;
        background-image: url("http://money.woftsun.com/res/img/cbanner4.jpg");
        background-size: 100% 100%;
    }
    .box5{
        width: 100%;
        background-image: url("http://money.woftsun.com/res/img/cbanner5.jpg");
        background-size: 100% 100%;
    }
</style>