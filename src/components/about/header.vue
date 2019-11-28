<template>
    <div>
    <div class="vheader">
        <span @click="go"></span>
        <p>关于</p>
        <p class="xi"></p>
    </div>
        <div class="background">
            <img src="../../../public/assets/images/logo2.png" alt="logo">
            <span>版本号:1.0.0.0</span>
        </div>
        <div class="about">
            <ul class="about_ul">
                <li @click="showPopup">二维码</li>
                <span class="bg_1"></span>
            </ul>
        </div>
        <div class="about">
            <ul class="about_ul">
                <li @click="check">检测新版本</li>
                <span class="bg_1"></span>
            </ul>
        </div>
        <van-popup  v-model="show">
            <span class="world">扫码分享</span>
            <img src="../../../public/assets/images/1574055954.png" alt="二维码" class="img">
            <span class="firend">邀请好友扫一扫分享给Ta</span>
            <span class="open" @click="open">关闭</span>
        </van-popup>


    </div>

</template>

<script>
    import { Popup } from 'vant';
    import { Toast } from 'vant';
    export default {
        name: "vheader",
        data(){
          return{
              show:false
          }
        },
        components:{
            [Popup.name]:Popup
        },
            methods:{
                check(){
                        Toast.loading({
                            message: '加载中...',
                            forbidClick: true
                        })
                    setTimeout(()=>{
                        Toast('已是最新版本 当前版本号:1.0.0.0');
                    },2000)
                },

                go(){
                    this.$router.replace("./setting")
                },
                showPopup() {
                    this.show = true;
                },
                open(){
                    this.show = false;
                }
            }

    }
</script>

<style scoped>
    .open{
        font-size: 0.16rem;
        display: block;
        border-top: 1px solid black;
        margin: 0 auto;
        width: 2.33rem;
        text-align: center;
        padding-top: 10px;
        box-sizing: border-box;
    }
    .firend{
        font-size:0.16rem ;
        display: block;
        margin: 0 auto;
        width: 1.79rem;
    }
    .img{
        display: block;
        width: 2.5rem;
        height: 2.4rem;
    }
    .world{
        display: block;
        font-size: 0.16rem;
        width: 0.66rem;
        margin: 0 auto;
    }
    .vheader{
        position: relative;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 0.6rem;
        background-image: url("../../../public/assets/images/daily_tip.png");
        background-size: 100% 100%;
    }
    .vheader span{
        width:0.3rem;
        height: 0.3rem;
        position: absolute;
        left: 0.01rem;
        top: 0.15rem;
        background-image: url("../../../public/assets/images/arrow_back.png");
        background-size: 100% 100%;
    }
    .vheader p{
        color: white;
        text-align: center;
        line-height: 0.6rem;
        display: block;
        font-size: 0.18rem;
        padding-left: 1.66rem;
        box-sizing: border-box;
    }
    .background{
        background-image: url("../../../public/assets/images/querysellect_head_bg.png");
        background-size: 100% 100%;
        width: 100%;
        height: 2.5rem;
    }
    .background img{
        padding-top: 0.2rem;
        box-sizing: border-box;
        margin: 0 auto;
        display: block;
        width: 0.75rem;
        height: 0.94rem;
    }
    .background span{
        padding-top: 0.2rem;
        box-sizing: border-box;
        display: block;
        font-size: 0.16rem;
        text-align: center;
    }
    .about{
        border-bottom: 1px solid #e7e7e7;

    }
    .about_ul{
        display: flex;
        justify-content: space-between;
    }
    .about_ul li{
        font-size: 0.16rem;
        display: block;
        margin-left: 0.2rem;
        margin-top: 0.1rem;
    }
</style>