<template>
    <div class="info-slide">
        <div class="info-slide-con">
            <div class="info-slide-img" v-for="(val,index) in pic" :key="index">
                <img :src="val">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "info-silder",
        data(){
            return{
                "pic":["http://39.107.245.176/images/info/Screenshot_20191118_193228_com.xzck_03.png",
                    "http://39.107.245.176/images/info/Screenshot_20191118_221345_com.xzck_03.png",
                    "http://39.107.245.176/images/info/Screenshot_20191118_221351_com.xzck_07.png",
                    "http://39.107.245.176/images/info/Screenshot_20191118_221341_com.xzck_03.png"]
            }
        }
    }
</script>

<style scoped>
.info-slide{
    height: 1.6rem;
    width: 3.75rem;
    padding: 0 0 0.1rem;
    background-color: white;
    overflow: auto;
}
.info-slide::-webkit-scrollbar {display:none}
    .info-slide-con{
        height: 100%;
        width: 13.5rem;
        display: flex;
        padding: 0 0.14rem 0 0.05rem;
        justify-content: space-between;
    }
.info-slide-img{
    width: 25%;
    height: 100%;
    margin-left: 0.1rem;
}
.info-slide-img>img{
    width: 100%;
    float: left;
    height: 100%;
    border-radius: 0.1rem 0.1rem;
}
</style>
