<template>
   <p class="counter"><span @click="back" class="back">返回</span>{{data.con}}</p>
</template>

<script>
    export default{
        name:"counter",
        components:{

        },
       props:["data"],
       methods:{
         back(){
            window.history.go(-1);
         }
       }
    }

</script>

<style scoped>
    .counter{
        height:0.5rem;
        line-height: 0.5rem;
        font-size: 0.16rem;
        color:white;
        text-align: center;
        background-color: red;
       position: relative;
       border-bottom: 0.005rem solid gray;
    }
    .back{
        display:block;
        width:0.8rem;
       position: absolute;
       left:0.05rem;
       top:0rem;
        padding-left: 0.15rem;
        box-sizing: border-box;
       font-size: 0.16rem;
        height:0.5rem;
        background-image: url("../../../public/assets/images/product/toplt.png");
        background-size: 0.2rem;
        background-repeat: no-repeat;
        background-position: 0.06rem center;
    }
</style>