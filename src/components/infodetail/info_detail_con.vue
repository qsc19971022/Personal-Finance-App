<template>
<div class="detail_con" v-if="data1">
    <p class="detail_title">{{data1.title}}</p>
    <p class="detail_date">{{data1.date}}</p>
    <p class="detail_abs">{{data1.abstract}}</p>
    <p class="detail_abs">{{data1.detail}}</p>
</div>
</template>

<script>
    export default {
        name: "info_detail_con",
        props:["data1"],
    }
</script>

<style scoped>
.detail_con{
    width: 100%;
    background:linear-gradient(90deg,white,linen);
    padding: 0.15rem;
    font-size: 0.15rem;
}
.detail_title{
    font-size: 0.18rem;
    font-weight: bold;
}
.detail_date{
     font-size: 0.14rem;
     color:gray;
     margin: 0.2rem 0;
     border-bottom: 0.01rem solid gainsboro;
 }
    .detail_abs{
        margin-bottom: 0.2rem;
        font-size: 0.16rem;
        line-height: 0.3rem;
        letter-spacing: 0.005rem;
        text-indent:2em;
    }
</style>
