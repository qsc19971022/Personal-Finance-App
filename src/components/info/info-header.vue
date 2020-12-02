<template>
    <div class="info-head" v-if="data">
        <a href="#/info">{{data.title}}</a><a href="#/product">{{data.more}}<img src="http://39.107.245.176/images/info/Screenshot_20191118_221356_com.xzck_03.png"></a>
    </div>
</template>

<script>
    export default {
        name: "info-header",
        props:["data"],
    }
</script>

<style scoped>
.info-head{
    width: 100%;
    height: 0.5rem;
    font-size: 0.13rem;
    background-color: white;
    color: gray;
    line-height: 0.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.14rem;
    box-sizing: border-box;
}
.info-head>a:nth-child(2){
    display: flex;
    color:gray ;
    justify-content: space-between;
    width: 20%;
}
.info-head>a:nth-child(2)>img{
    width: 0.1rem;
    height: 0.15rem;
    margin-top: 0.168rem;
}
.info-head>a:nth-child(1){
    color: black;
    font-size: 0.18rem;
}
</style>
