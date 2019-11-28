<template>
    <div>
        <div class="index-header">
            <a href="#" class="index-header-login" ref="login">登录</a>
            <a href="#" class="index-header-exit" ref="exit" @click="exit">退出</a>
            <input type="search" id="index-header-search" placeholder="搜功能  搜产品" @click="search">
            <a href="#" class="index-header-wx"></a>
            <a href="#/luck" class="index-header-add"></a>
        </div>
        <index-banner></index-banner>
        <index-top v-if="navInfo" :data="navInfo.indexNews"></index-top>
        <index-nav v-if="navInfo" :data="navInfo.data"></index-nav>
        <div class="index-date">
            <div class="index-date-week">
                <div class="index-date-week-left">
                    <p>{{this.day}}</p>
                    <p>{{this.week}}</p>
                </div>
                <div class="index-date-week-right">
                    <p>亲爱的朋友</p>
                    <p>今天可以做的事，就不要拖到明天哟</p>
                </div>
            </div>
        </div>
        <div class="index-club">
            <div class="index-club-left">
                <p>小夕俱乐部</p>
                <p>全新权益快来体验</p>
            </div>
            <div class="index-club-right">
                <a href="#">点击进入</a>
            </div>
        </div>
        <div class="index-money">
            <a href="#" class="index-money-left"></a>
            <a href="#" class="index-money-right"></a>
        </div>
    </div>
</template>

<script>
    import banner from "../components/index/banner";
    import DodoTop from "../components/index/DodoTop";
    import indexApi from "../apis/indexApi";
    import indexNav from "../components/index/indexNav";
    export default {
        name: "index",
        components:{
            'index-banner':banner,
            'index-top':DodoTop,
            'index-nav':indexNav
        },
        data(){
            return {
                navInfo:[],
                day:0,
                week:'',
                ls:""
            }
        },
        methods:{
            _initNavData(){
                indexApi.getIndexinfoByUserId(data=>{
                    this.navInfo = data;
                    console.log(data.indexItem)
                })
            },
            exit(){
            this.ls.removeItem("user");
                location.reload();
            },
            search(){
                location.href = "#/search"
            },
            news(){
                fetch("http://49.234.85.212:8080/ico/img/").then(res=>{
                res.json().then(cb=>{
                    console.log(cb);
                });
            })
    }
        },
        created() {
            this.news();
            this._initNavData();
            let data = new Date();
            let day = data.getDate();
            this.day = day;
            let week = data.getDay();
            switch(week) {
                case 1:
                    week = '星期一';
                    break;
                case 2:
                    week = '星期二';
                    break;
                case 3:
                    week = '星期三';
                    break;
                case 4:
                    week = '星期四';
                    break;
                case 5:
                    week = '星期五';
                    break;
                case 6:
                    week = '星期六';
                    break;
                case 0:
                    week = '星期日';
                    break;
            }
            this.week = week;
        },
        mounted() {
            let ls = window.localStorage;
            this.ls = ls;
            let user = this.ls.getItem("user");
            let login = this.$refs.login;
            let exit = this.$refs.exit;
            if(user){
                login.style.display = "none";
                exit.style.display = "block";
            }else {
                login.style.display = "block";
                exit.style.display = "none";
            }
        }
    }
</script>

<style scoped>
    .index-header{
        width: 100%;
        height: 0.5rem;
        background-color: rgba(0,0,0,0.9);
        opacity: 0.5;
        /*box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #2b2b2b inset;*/
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        box-sizing: border-box;
    }
    .index-header>a{
        background-size: 0.2rem 0.2rem;
        background-repeat: no-repeat;
        display: block;
    }
    .index-header-login{
        display: block;
        width: 15%;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.16rem;
        background-image: url("../../public/assets/images/index/user.png");
        color: white;
        background-position: 0 center;
        box-sizing: border-box;
        padding-left: 0.24rem;
    }
    .index-header .index-header-exit{
        width: 15%;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.16rem;
        background-image: url("../../public/assets/images/index/user.png");
        color: white;
        background-position: 0 center;
        box-sizing: border-box;
        padding-left: 0.24rem;
        display: none;
    }
    #index-header-search{
        display: block;
        width: 60%;
        height: 0.3rem;
        line-height: 0.3rem;
        outline: none;
        border: none;
        background-color: rgba(255,255,255,0.5);
        border-radius: 0.5rem;
        padding-left: 0.4rem;
        background-image: url("../../public/assets/images/index/search.png");
        background-size: 0.2rem 0.2rem;
        background-repeat: no-repeat;
        background-position: 0.1rem center;
        box-sizing: border-box;
        color: white;
    }
    input:-moz-placeholder,
    textarea:-moz-placeholder {
        color: #fff;
        font-size: 0.15rem;
    }
    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #fff;
        font-size: 0.15rem;
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #fff ;
        font-size: 0.15rem;
    }
    .index-header-wx{
        width: 7%;
        height: 0.3rem;
        line-height: 0.3rem;
        background-image: url("../../public/assets/images/index/wx.png");
        margin-top: 0.08rem;
    }
    .index-header-add{
        width: 7%;
        height: 0.3rem;
        line-height: 0.3rem;
        background-image: url("../../public/assets/images/index/add.png");
        margin-top: 0.06rem;
    }
    .index-date{
        width: 100%;
        height: 1.3rem;
        background-image: url("../../public/assets/images/index/index-bg.png");
        background-repeat: repeat-x;
    }
    .index-date-week{
        width: 92%;
        height: 0.9rem;
        margin: 0 auto;
        background-image: url("../../public/assets/images/index/index-week.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: 0.2rem;
        display: flex;
        align-items: center;
        color: white;
        font-size: 0.14rem;
        box-sizing: border-box;
        padding: 0.2rem 0;
    }
    .index-date-week-left{
        width: 20%;
        text-align: center;
        border-right: 1px solid gray;
    }
    .index-date-week-left>p:nth-child(1){
        font-size: 0.24rem;
        font-weight: 700;
    }
    .index-date-week-right{
        box-sizing: border-box;
        padding-left: 0.2rem;
    }
    .index-club{
        width: 92%;
        margin: 0 auto;
        height: 0.9rem;
        background-image: url("../../public/assets/images/index/club.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .index-club-left{
        width: 64%;
        text-align: left;
        box-sizing: border-box;
        padding-left: 0.1rem;
    }
    .index-club-left>p:nth-child(1){
        font-size: 0.16rem;
        font-weight: 700;
        color: black;
        font-family: 华文宋体;
        line-height: 0.2rem;
    }
    .index-club-left>p:nth-child(2){
        font-size: 0.14rem;
        font-weight: bold;
        line-height: 0.2rem;
        color: gray;
        font-family: 华文宋体;
    }
    .index-club-right{
        width: 34%;
        text-align: center;
    }
    .index-club-right>a{
        display: block;
        width: 1rem;
        height: 0.3rem;
        line-height: 0.28rem;
        border: 1px solid gray;
        border-radius: 0.2rem;
        font-size: 0.14rem;
        color: gray;
    }
    .index-money{
        width: 92%;
        margin: 0.1rem auto 0.6rem auto;
        height: 0.9rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .index-money-left{
        display: block;
        height: 0.9rem;
        width: 47%;
        background-image: url("../../public/assets/images/index/mymoney1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .index-money-right{
        width: 45%;
        display: block;
        height: 0.9rem;
        background-image: url("../../public/assets/images/index/mymoney2.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
     }
</style>