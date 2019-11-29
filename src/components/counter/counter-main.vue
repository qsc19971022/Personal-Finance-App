<template>
    <div class="counter-con">
        <index-counter-main-item :data="dat" v-for="(dat,i) in data" :key="i" :i="i"></index-counter-main-item>
    </div>
</template>

<script>
    import counterMainItem from "./counter-main/counter-main-item"
    export default{
        data(){
          return{
              data:[
                  {text:"存款计算器"},
                  {text:"贷款计算器"},
                  {text:"国债计算器"},
                  {text:"贵金属买卖"}
        ]
            }
        },
        name:"counterMainItem",
        components:{
            "index-counter-main-item":counterMainItem
        }
    }

</script>

<style scoped>
    .counter-con{
        margin:0.55rem 0.1rem;
        border-top: 0.005rem solid rgb(203,203,203) ;
    }
</style>