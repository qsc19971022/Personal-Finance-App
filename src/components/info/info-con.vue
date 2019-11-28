<template>
    <div  v-if="data">
        <a class="info-con"  v-for="(val,index) in data" :key="index">
            <div class="info-con-con">
                <p>{{val.title}}</p>
                <p>{{val.date}} <span>
                <img src="../../../public/assets/images/info/Screenshot_20191118_221341_com.xzck_07.png">{{val.num}}</span></p>
            </div>
            <img v-if="val.pic" :src="val.pic">
            <img id="nulls" v-else-if="val.pic==''"  src="http://39.107.245.176/images/info/logo.png">
        </a>
    </div>
</template>

<script>
    export default {
        name: "info-con",
        props:["data"],
        data(){
            return{
                number:0,
            }
        },
        methods:{
            _con(){
                console.log(this.data)
            }
        },
        mounted(){
            this.$eventBus.$on("cone",(a)=>{
                this.number=a;
            })
        }
    }
</script>

<style scoped>
.info-con{
    padding: 0.1rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-bottom: 0.01rem solid gainsboro;
}
    .info-con-con{
        width: 57%;
        text-align: left;
    }
    .info-con-con>p:nth-child(2){
        width: 100%;
        display: flex;
        font-size: 0.12rem;
        color: gray;
        margin-top:0.4rem;
        justify-content: space-between;
    }
    .info-con-con>p>span>img{
        width: 0.15rem;
        height: 0.12rem;
        margin-top: 0.008rem;
        margin-right: 0.05rem;
    }
.info-con-con>p>span{
    width: 0.5rem;
    display: flex;
    height: 0.13rem;
}
.info-con>img:nth-child(2){
    width: 40%;
    height: 100%;
}
.info-con>#nulls{
    height: 25%;
    width: 25%;
}
</style>
