<template>
    <div class="tit">
        <img @click="gob" src="../../../public/assets/images/balance/0191121155037.png">
        <p>转出</p>
    </div>
</template>

<script>
export default {
    name:"balance-turn-out-header",
    methods:{
        gob(){
            this.$router.push("/balance")
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