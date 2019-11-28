<template>
    <div class="invest">
        <invest-header></invest-header>
        <div class="invest-title">
            <p>钱小夕安全感系数调查</p>
            <p>感谢你对钱夕夕的支持，为了帮助钱夕夕不断完善优化自己，请把你的心声告诉我们。</p>
        </div>
        <p class="invest-problem-title">1.你或你身边的朋友是否有过在钱夕夕被骗的经历?</p>
        <div class="invest-problem-body1">
            <p>A、我曾经被骗过</p>
            <p>B、听说朋友被骗过</p>
            <p>C、在网上看到别人被骗过</p>
            <p>D、没有被骗过</p>
        </div>
        <p class="invest-problem-title">2.你认为钱洗洗的安全程度是怎么样的</p>
        <div class="invest-problem-body2">
            <p>A、非常高</p>
            <p>B、高</p>
            <p>C、一般</p>
            <p>D、危险</p>
        </div>
        <p class="invest-problem-title">3.你认同以下观点吗？在钱夕夕被骗，您一定能得到有效的保障。</p>
        <div class="invest-problem-body3">
            <p>A、非常认同</p>
            <p>B、认同</p>
            <p>C、还行吧</p>
            <p>D、不认同</p>
        </div>
        <p class="invest-problem-title">4.你一般会在钱夕夕存多少钱。</p>
        <div class="invest-problem-body4">
            <p>A、100元不到</p>
            <p>B、100-1000元</p>
            <p>C、1000-2000元</p>
            <p>D、2000元以上</p>
        </div>
        <button class="invest-commit" @click="sendInfo">提交问卷</button>
    </div>
</template>

<script>
    import header from "../components/investigation/header";
    import $ from "jquery";
    import Vue from 'vue';
    import { Popup,Dialog } from 'vant';
    Vue.use(Popup,Dialog)
    export default {
        name: "investigation",
        components:{
            'invest-header':header
        },
        methods:{
            sendInfo(){
                let str1 = $(".invest-problem-body1>.invest-active").html().substring(0,1);
                let str2 = $(".invest-problem-body2>.invest-active").html().substring(0,1);
                let str3 = $(".invest-problem-body3>.invest-active").html().substring(0,1);
                let str4 = $(".invest-problem-body4>.invest-active").html().substring(0,1);
                let options = str1 +''+ str2 +str3 +str4;
                let length1 = $(".invest-problem-body1>.invest-active").length;
                let length2 = $(".invest-problem-body2>.invest-active").length;
                let length3 = $(".invest-problem-body3>.invest-active").length;
                let length4 = $(".invest-problem-body4>.invest-active").length;
                let allLength = +length1 + length2 + length3 + length4
                let user = localStorage.getItem("user");
                if (allLength == 4){
                    fetch('http://49.234.85.212:8080/question/naire/',{
                        method:"POST",
                        headers:{'Content-Type':'application/json;charset=UTF-8'},
                        body:JSON.stringify({
                            user_phone:user,
                            options:options
                        })
                    }).then(res=>res.json().then(cb=>{
                            if(cb.status == 1){
                                Dialog.alert({
                                    message: '问卷提交完成'
                                }).then(() => {
                                    location.href = "robot";
                                });
                            }
                        })
                    )
                }else{
                    Dialog.alert({
                        message: '请选择选项哟'
                    }).then(() => {
                        //close
                    });
                }

            }
        },
        mounted() {
            $(".invest-problem-body1>p").click(function(){
                $(this).addClass("invest-active").siblings().removeClass("invest-active");
            });
            $(".invest-problem-body2>p").click(function(){
                $(this).addClass("invest-active").siblings().removeClass("invest-active");
            });
            $(".invest-problem-body3>p").click(function(){
                $(this).addClass("invest-active").siblings().removeClass("invest-active");
            });
            $(".invest-problem-body4>p").click(function(){
                $(this).addClass("invest-active").siblings().removeClass("invest-active");
            });
        }
    }
</script>

<style scoped>
    .invest{
        width: 100%;
        height: 100%;
        background-color: rgb(244,244,244);
        overflow: auto;
    }
    .invest-title{
        width: 100%;
        height: 1.2rem;
        background-color: white;
        margin-top: 0.5rem;
    }
    .invest-title>p:nth-child(1){
        box-sizing: border-box;
        padding-left: 0.2rem;
        font-size: 0.18rem;
        font-weight: 700;
        color: rgb(254,201,2);
        padding-top: 0.16rem;
    }
    .invest-title>p:nth-child(2){
        box-sizing: border-box;
        padding: 0.2rem;
        font-size: 0.13rem;
        font-weight: 500;
        color: rgb(88 ,88,88);
    }
    .invest-problem-title{
        box-sizing: border-box;
        padding: 0.16rem;
        margin: 0.12rem 0;
        font-size: 0.18rem;
    }
    .invest-problem-body1,.invest-problem-body2,.invest-problem-body3,.invest-problem-body4{
        width: 100%;
        height: auto;
        background-color: white;
    }
    .invest-problem-body1>p,.invest-problem-body2>p,.invest-problem-body3>p,.invest-problem-body4>p{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.15rem;
        border-bottom: 1px dashed rgb(230,230,230) ;
        box-sizing: border-box;
        padding-left: 0.62rem;
    }
    .invest-commit{
        display: block;
        width: 70%;
        height: 0.46rem;
        background-color: rgb(254,201,1);
        outline: none;
        border: none;
        margin: 0.2rem auto;
    }
    .invest-active{
        background-image: url("../../public/assets/images/index/active.png");
        background-repeat: no-repeat;
        background-position: 0.2rem center;
        background-size: 0.24rem 0.24rem;
    }
</style>