<template>
    <div class="log-header">
    <img @click="goback" src="../../../public/assets/images/balance/arrow_back.png">
    </div>
</template>

<script>
export default {
    name:"register-header",
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.log-header{
    font-size: 0.22rem;
    background-image: url("../../../public/assets/images/login/20191119114329.jpg");
    background-size: 100% 100%;
    height: 1.8rem;
}
.log-header>img:nth-child(1){
    width: 0.5rem;
    padding-left: 0.15rem;
    padding-top: 0.2rem;
}
</style>