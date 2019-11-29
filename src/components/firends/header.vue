<template>
    <div>
        <div class="Invite">
            <span @click="go"></span>
            <p>邀请好友</p>
    </div>
        <div class="bg">
            <div class="world">
            <img src="../../../public/assets/images/my/1.png" alt="logo">
            </div>
            <span>5枚<p>夕夕币拿到手</p></span>
            </div>
    </div>
</template>

<script>
    export default {
        name: "vheader",
        methods:{
            go(){
                history.back()
            }
        }
    }
</script>

<style scoped>
.Invite{
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 0.6rem;
    background-image: url("../../../public/assets/images/my/title_bar_bg.png");
    background-size: 100% 100%;
}
.Invite span{
    width:0.3rem;
    height: 0.3rem;
    position: absolute;
    left: 0.01rem;
    top: 0.15rem;
    background-image: url("../../../public/assets/images/my/arrow_back.png");
    background-size: 100% 100%;
}
    .Invite p{
        color: white;
        text-align: center;
        line-height: 0.6rem;
        display: block;
        font-size: 0.18rem;
    }
    .bg{
        font-size: 0;
        display: block;
        width: 100%;
        height: 1rem;
        background-image: url("../../../public/assets/images/my/draw_rule_background.png");
        background-size: 3.75rem 4.55rem;
        position: relative;
        background-repeat: no-repeat;
    }
.world{
    width:1rem;
    display: block;
    position: absolute;
    left: 1.24rem;
    top: 0.1rem;
}
.world  img{
    display: block;
    width: 1.3rem;
    height: 0.3rem;
}
    .bg span{
        font-size: 0.2rem;
        display: block;
        position: absolute;
        left: 1.32rem;
        top: 0.58rem;
        color: rgb(252,80,70);
    }
    .bg p{
        font-size: 0.15rem;
        display: block;
        position: absolute;
        top: 0.1rem;
        left: 0.38rem;
        width: 1.31rem;
        color: rgb(241,138,69);

    }
</style>