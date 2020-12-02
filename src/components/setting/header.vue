<template>
    <div class="vheader">
        <span @click="goto"></span>
       <p>设置</p>
        <p class="xi" @click="go"></p>
    </div>
</template>

<script>
    export default {
        name: "vheader",
        methods:{
            goto(){
                this.$router.replace("./my")
            },
            go(){
                this.$router.replace("./robot")
            }
        }
    }
</script>

<style scoped>

.vheader{
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 0.6rem;
    background-image: url("../../../public/assets/images/my/5.png");
    background-size: 100% 100%;
}
.vheader span{
    width: 0.14rem;
    height: 0.23rem;
    position: absolute;
    left: 0.1rem;
    top: 0.2rem;
    background-image: url("../../../public/assets/images/my/reslut_back.png");
    background-size: 100% 100%;
}
.vheader p{
    color: black;
    text-align: center;
    line-height: 0.6rem;
    display: block;
    font-size: 0.18rem;
}
    .xi{
        display: block;
        width:0.3rem;
        height: 0.3rem;
        position: absolute;
        left: 3.33rem;
        top: 0.15rem;
        background-image: url("../../../public/assets/images/my/customerservice.png");
        background-size: 100% 100%;
    }
</style>