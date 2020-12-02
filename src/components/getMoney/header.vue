<!--
 * @Author: your name
 * @Date: 2019-11-23 11:10:34
 * @LastEditTime: 2020-03-09 14:36:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/components/turnIn/header.vue
 -->
<template>
    <div class="tit">
        <img @click="gob" src="../../../public/assets/images/balance/0191121155037.png">
        <p>提现</p>
    </div>
</template>

<script>
export default {
    name:"balance-turn-in-header",
    methods:{
        gob(){
            window.history.back(-1); 
        }
    }
}
</script>

<style scoped>
.tit{
    font-size: 0.16rem;
    display: flex;
    border-bottom: 0.01rem solid rgb(244, 244, 244);
    padding-bottom: 0.1rem;
    position: fixed;
    width: 100%;
    background-color: white;
}
.tit>img:nth-child(1){
    width: 0.35rem;
    padding-top: 0.2rem;
    padding-left: 0.15rem;
}
.tit>p:nth-child(2){
    padding-top: 0.2rem;
    padding-left: 0.15rem;
}
</style>