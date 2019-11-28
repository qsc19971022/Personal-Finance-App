<template>
    <div class="robot">
        <robot-header></robot-header>
        <div class="robot-notice">
            <h5 class="robot-title">钱小夕  智能助理</h5>
            <div class="robot-logo"></div>
            <div class="robot-list">
                <a href="#">
                    <h5 class="robot-list-title">公告</h5>
                    <p class="robot-list-new">规则公告</p>
                </a>
                <a href="#/invest">
                    <h5 class="robot-list-title">调研</h5>
                    <p class="robot-list-new">安全调研</p>
                </a>
            </div>
            <div class="robot-chat" ref="chat">
                <div class="robot-chat-prompt"><p>Hi, <span class="robot-user">太阳以西</span>,我是钱小夕很高为你服务</p></div>
            </div>
        </div>
        <div class="robot-footer">
            <input type="text" placeholder="输入你的问题试试" class="robot-footer-info" v-model="info" >
            <p class="robot-chat-send" @click="send"></p>
        </div>
    </div>
</template>

<script>
    import header from "../components/robot/header";
    import $ from 'jquery'
    export default {
        name: "robot",
        data(){
            return {
                info:''
            }
        },
        components:{
            'robot-header':header,
        },
        methods: {
           send(){
                let sendInfo = `<div style="text-align: right"><div style="border-radius: 0.3rem 0.1rem 0.3rem 0.3rem;display: inline-block; background-color: rgb(255,227,138);margin-top: 0.2rem;font-size: 0.15rem;
        text-align: right; box-sizing: border-box;padding: 0.2rem 0.12rem;">${this.info}</div></div>`;
                $(".robot-chat").append(sendInfo);
                let oInfo = this.info;
               this.info = '';
                $.ajax({
                   type: "get",
                   url: 'https://api.jisuapi.com/iqa/query?appkey=06d97dfdd1fd0bb5&question='+oInfo,
                   dataType: "jsonp",
                   jsonp: "callback",
                   success: function(data) {
                       console.log(data);
                       let getRes = data.result.content;
                       let getInfo = `<div style="text-align: left"><div style="border-radius: 0.1rem 0.3rem 0.3rem 0.3rem;display: inline-block; background-color: white;margin-top: 0.2rem;font-size: 0.15rem;
        text-align: left; box-sizing: border-box;padding: 0.2rem 0.12rem;">${getRes}</div></div>`;
                       $(".robot-chat").append(getInfo);
                   }
                });
            }
        }
    }
</script>

<style scoped>
    .robot{
        width: 100%;
        height: 100%;
        background-color: rgb(244,244,244);
        overflow: auto;
    }
    .robot-notice{
        width: 96%;
        height: 1.6rem;
        background-color: white;
        margin: 0.9rem auto 0.1rem auto;
        border-radius: 0.12rem;
        position: relative;
    }
    .robot-title{
        text-align: center;
        font-size: 0.18rem;
        font-family: 华文仿宋;
        padding-top: 0.3rem;
        color: rgb(75,75,75);
    }
    .robot-logo{
        width: 0.4rem;
        height: 0.4rem;
        background-image: url("../../public/assets/images/index/logo1.png");
        background-size: 0.4rem 0.4rem;
        background-repeat: no-repeat;
        border-radius: 50%;
        position: absolute;
        top: -0.2rem;
        left: 46%;
    }
    .robot-list{
        display: flex;
        justify-content: space-around;
        margin-top: 0.14rem;
    }
    .robot-list>a{
        display: block;
        color: black;
        width: 0.6rem;
        height: 0.8rem;
        background-repeat: no-repeat;
        background-size: 0.24rem 0.24rem;
        background-position: center 0.04rem;
    }
    .robot-list>a:nth-child(1){
        background-image: url("../../public/assets/images/index/gonggao.png");
    }
    .robot-list>a:nth-child(2){
        background-image: url("../../public/assets/images/index/diaoyan.png");
    }
    .robot-list-title{
        text-align: center;
        font-size: 0.14rem;
        margin-top: 0.32rem;
        font-family: 华文仿宋;
        color: rgb(75,75,75);
    }
    .robot-list-new{
        text-align: center;
        font-size: 0.12rem;
        color: rgb(75,75,75);
        margin-top: 0.06rem;
    }
    .robot-chat{
        width: 96%;
        margin: 0 auto 0.6rem auto;
    }
    .robot-chat-prompt{
        width: 86%;
        border-radius: 0.1rem 0.3rem 0.3rem 0.3rem;
        background-color: white;
        margin-top: 0.2rem;
        margin-left: -0.08rem;
        font-size: 0.15rem;
        text-align: left;
        box-sizing: border-box;
        padding-left: 0.2rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }
    .robot-chat-sendInfo{
        width: auto;
        border-radius: 0.3rem 0.1rem 0.3rem 0.3rem;
        background-color: white;
        margin-top: 0.2rem;
        margin-right: -0.08rem;
        font-size: 0.15rem;
        text-align: right;
        box-sizing: border-box;
        padding-right: 0.2rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }
    .robot-footer{
        width: 100%;
        height: 0.6rem;
        background-color: rgb(238,239,241);
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
    }
    .robot-footer-info{
        width: 84%;
        height: 0.4rem;
        margin-top: 0.1rem;
        background-color: white;
        border-radius: 0.3rem;
        box-sizing: border-box;
        padding-left: 0.2rem;
    }
    .robot-chat-send{
        width: 10%;
        height: 0.4rem;
        margin-top: 0.1rem;
        background-image: url("../../public/assets/images/index/send.png");
        background-repeat: no-repeat;
        background-size: 0.36rem 0.36rem;
        background-position: center center;
    }
</style>