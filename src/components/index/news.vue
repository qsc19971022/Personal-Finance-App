<template>
    <div class="index-news" >
        <div class="index-top-title"><img :src="data.img" alt=""></div>
        <div class="index-top-news">
            <p>{{data.new1}}</p>
            <p>{{data.new2}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news",
        props:["data"]
    }
</script>

<style scoped>
    .index-news{
        height: 0.8rem;
        display: flex;
        align-items: center;
    }
    .index-top-title{
        width: 18%;
    }
    .index-top-title>img{
        width: 0.6rem;
        height: 0.5rem;
    }
    .index-top-news{
        width: 80%;
    }
    .index-top-news>p{
        font-size: 0.15rem;
        padding-bottom: 0.03rem;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>