<template>
    <div class="robot-footer">
        <input type="text" placeholder="输入你的问题试试" class="robot-footer-info" >
        <p class="robot-chat-send"></p>
    </div>
</template>

<script>
    export default {
        name: "robot-footer"
    }
</script>

<style scoped>
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
        background-image: url("../../../public/assets/images/index/send.png");
        background-repeat: no-repeat;
        background-size: 0.36rem 0.36rem;
        background-position: center center;
    }
</style>