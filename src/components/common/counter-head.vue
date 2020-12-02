<template>
   <p class="counter"><span @click="back" class="back">返回</span>{{data.product_name}}</p>
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
       position: fixed;
       top:0rem;
       left:0rem;
       right:0rem;
       height:0.5rem;
       line-height: 0.5rem;
       font-size: 0.2rem;
       color:white;
       text-align: center;
       background-color: rgb(198,0,11);
       border-bottom: 0.005rem solid rgb(203,203,203);
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