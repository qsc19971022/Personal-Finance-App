<template>
    <div>
        <div class="bind-head">
            <a class="bind-prev" href="#/"></a>
            <p class="bind-one">银行卡</p>
            <div class="bind-plugin"><a href="#/robot">
                <img src="../../../public/assets/images/info/Screenshot_20191121_092208_com_05.png"></a>
                <div is-link @click="showPopup">
                    <img src="../../../public/assets/images/info/Screenshot_20191121_092208_com_07.png">
                </div>
            </div>
        </div>
        <van-popup class="van-popup"
                   v-model="show"
                   position="top"
                   :style="{ height: '20%',}"
        >
            <a href="#/login" v-if="token ==''">登录</a>
            <a href="#/">首页</a>
            <a href="#">扫一扫</a>
        </van-popup>
    </div>
</template>

<script>
    import Vue from "vue"
    import {Popup} from "vant"
    Vue.use(Popup)
    export default {
        name: "bing-header",
        components:{
            //[Popup.name]:Popup
        },
        data(){
            return{
                show:false,
                token:localStorage.getItem("token")
            }
        },
        methods:{
            showPopup() {
                console.log(this.token);
                this.show = true;
            }
        }
    }
</script>

<style scoped>
    .van-popup{
        top: 0.5rem;
        margin-left: 2.7rem;
        text-align: center;
        width: 0.9rem;
        border-radius: 0.1rem;
        overflow-y: hidden;
        height: 20%;
        line-height: 0rem;
    }
    .van-popup>a{
        border-bottom: 0.01rem solid gainsboro;
        padding:0.1rem;
        height: 0.3rem;
        margin-top: -0.2rem;
        top: -0.1rem;
        position: relative;
        line-height: 0.1rem;
        display: inline-block;
        width:90%;
        color: black;
        font-size: 0.13rem;
    }
.bind-head{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    height: 0.5rem;
    font-weight: bold;
    padding: 0.15rem 0.1rem 0;
    display: flex;
    font-size: 0.16rem;
    color: rgb(96,115,130);
    justify-content: space-between;
}
.bind-prev{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background-size: 40%;
    background-repeat: no-repeat;
    background-image: url("../../../public/assets/images/info/Screenshot_20191121_092208_com_03.png");
}
.bind-plugin{
    height: 0.3rem;
    width: 0.7rem;
    display: flex;
    justify-content: space-between;
}
.bind-plugin>a>img{
    width: 100%;
    margin-left: 0.05rem;
    height: 100%;
}
.bind-one{
    width: 1.5rem;
    font-size: 0.18rem;
    letter-spacing: 0.03rem;
    text-align: center;
    margin-left: 0.3rem;
}
.bind-plugin>a,
.bind-plugin>div>img{
    width: 0.2rem;
    margin-left: 0.1rem;
    height: 0.2rem;
}
</style>
