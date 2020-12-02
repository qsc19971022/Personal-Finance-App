<template>
    <div class="index-top">
        <div class="index-top-left"></div>
        <div class="index-top-right">
            <div ref="new">
                <index-news :key="i" :data="n" v-for="(n,i) in data" ></index-news>
            </div>
        </div>
    </div>
</template>

<script>
    import news from "./news";
    export default {
        name: "DodoTop",
        props:["data"],
        components:{
            'index-news':news
        },
        mounted() {
            let oNew = this.$refs.new;
            let oTop = oNew.style.marginTop;
            console.log(oTop);
            setInterval(function () {
                oTop -= 0.8;
                if (oTop <= -2.4){
                    oTop = 0;
                }
                oNew.style.marginTop = oTop + 'rem';
            },2000)
        }
    }
</script>

<style scoped>
    .index-top{
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid rgb(246,246,246);
        display: flex;

    }
    .index-top-left{
        width: 20%;
        background-image: url("../../../public/assets/images/index/top.png");
        background-repeat: no-repeat;
        background-size: 100% 80%;
        background-position: center center;
        box-sizing: border-box;
        border-right: 2px solid rgb(246,246,246);
    }
    .index-top-right{
        width: 80%;
        overflow: hidden;
    }

</style>