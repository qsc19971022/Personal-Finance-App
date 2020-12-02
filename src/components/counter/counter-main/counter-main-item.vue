<template>
    <a :href="'#/cun/'+ i" class="counter-item">{{data.text}}</a>
</template>

<script>
    export default{
        data(){
            return{
                id:1
            }
        },
        name:"counter",
        props:["data","i"]
    }

</script>

<style scoped>
    .counter-item{
        display: block;
        height:0.5rem;
        line-height: 0.5rem;
        font-size: 0.14rem;
        padding-left: 0.1rem;
        color:black;
        box-sizing: border-box;
        border:0.005rem solid rgb(203,203,203);
        border-top: none;
        background-image: url("../../../../public/assets/images/product/btmlt.png");
        background-size: 0.2rem;
        background-repeat: no-repeat;
        background-position: 3.2rem center;
    }
</style>