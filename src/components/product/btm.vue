<template>
    <div class="counter-btm">
        <moneywoftsun-product-btm-item :key="j" v-for="(btm,j) in data" :data="btm"></moneywoftsun-product-btm-item>
    </div>
</template>

<script>
    import btmItem from "./btm/btmItem";
    export default{
        name:"btm",
        components:{
            "moneywoftsun-product-btm-item":btmItem
        },
        props:["data"]
    }

</script>

<style scoped>
    .counter-btm{
        padding:0.1rem 0;
        box-sizing: border-box;
    }
</style>