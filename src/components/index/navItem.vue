<template>
    <div class="index-nav-item" @click.prevent="jump">
        <a href="#">
            <img :src="data.pic">
            <p>{{data.name}}</p>
        </a>
    </div>
</template>

<script>
    import Vue from "vue";
    import { Dialog } from 'vant';
    Vue.use(Dialog)
    export default {
        name: "navItem",
        props:["data","nid"],
        methods:{
            jump(){
                if(localStorage.getItem("user")){
                if(this.nid==9){
                    location.href = "#/topUp";
                        let ls = localStorage;
                        let ls_user = ls.getItem("user");
                        console.log(ls_user);
                        fetch('http://10.35.167.36:8080/phone/?phone='+13259775913,{
                            method:"GET",
                        }).then(res=>res.json().then(cb=>{
                                ls.setItem("phone",cb.phone);
                            })
                        )
                }else if(this.nid ==11){
                    location.href = '#/robot'
                }else if(this.nid ==0){
                    location.href = '#/my_account'
                }else if(this.nid ==1){
                    location.href = '#/Invite_friends'
                }else if(this.nid ==2){
                    location.href = '#/BindingCard'
                }else if(this.nid ==3){
                    location.href = '#/gift'
                }else if(this.nid ==4){
                    location.href = '#/term'
                }else if(this.nid ==5){
                    location.href = '#/bankSelection'
                } else if(this.nid ==6){
                    location.href = '#/balance'
                }else if(this.nid ==7){
                    location.href = '#/cashbook'
                }else if(this.nid ==8){
                    location.href = '#/counter'
                }else if(this.nid ==10){
                    location.href = '#/vipactivities'
                }
            }else{
                    Dialog.alert({
                        message: '请先登录'
                    }).then(() => {
                        location.href = "#/login";
                    });
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
.index-nav-item{
    width: 25%;
    height: 0.6rem;
    margin: 0.1rem 0;
}
.index-nav-item>a{
    display: block;
}
.index-nav-item>a>img{
    margin-left: 0.32rem;
    width: 0.3rem;
    height: 0.3rem;
}
.index-nav-item>a>p{
    text-align: center;
    font-size: 0.13rem;
    margin-top: 0.04rem;
    font-weight: 500;
    color: black;
}
</style>