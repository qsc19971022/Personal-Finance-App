<template>
    <div>
    <router-view></router-view>
    <div class="footer">
            <router-link  to="/index" class="home"  @click="switchTo('/index')">
                <div class="foot-con">
                    <img :src="'/index' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="">
                    <span>首页</span>
                </div>
            </router-link>
            <router-link  to="/product" class="category" @click="switchTo('/product')">
                <div class="foot-con">
                    <img :src="'/product' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="">
                    <span>产品</span>
                </div>
            </router-link>
            <router-link to="/info" class="cart" @click="switchTo('/info')">
                <div class="foot-con">
                    <img :src="'/info' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="">
                    <span>资讯</span>
                </div>
            </router-link>
            <router-link to="/my" class="user"  @click="switchTo('/my')">
                <div class="foot-con">
                    <img :src="'/my' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="">
                    <span>我的</span>
                </div>

            </router-link>
    </div>
    </div>
</template>

<script scoped>
    export default {
        name: "vfooter",
        data() {
            return {
                tabBarImgArr:[   //图片切换
                    {normal: require('../../../public/assets/images/footer/index1.png'), selected: require('../../../public/assets/images/footer/index.png')},
                    {normal: require('../../../public/assets/images/footer/financial1.png'), selected: require('../../../public/assets/images/footer/financial.png')},
                    {normal: require('../../../public/assets/images/footer/consulting1.png'), selected: require('../../../public/assets/images/footer/consulting.png')},
                    {normal: require('../../../public/assets/images/footer/mine1.png'), selected: require('../../../public/assets/images/footer/mine1.png')},
                ]
            }
        },
        methods:{
            switchTo(path){
                // console.log(this.$router)
                this.$router.replace(path)
            }
        }
    }
</script>

<style >
    .footer{
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.52rem;
        background: #fff;
        z-index: 9999;
        box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
        text-align: center;
        width:3.76rem;
        /* font-size: 0.16rem; */
    }
    .footer a{
        display: inline-block;
        margin-top: .06rem;
        text-align: center;
        color: #999;
        flex: 1 1 auto;
        font-size: 0.06rem;
    }
    .foot-con{
        width: 100%;
    }
    .foot-con img{
        display: block;
        width: 0.21rem;
        margin: 0 auto .05rem;
    }
    .footer a.router-link-active {
        color: #d81e06;
    }
</style>