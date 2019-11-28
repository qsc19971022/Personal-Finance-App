<template>
    <div>
        <gift-header></gift-header>
        <gift-newbtm :key="i" v-for="(btm,i) in giftInfo.btms" :data="btm"></gift-newbtm>
    </div>
</template>

<script>
    import giftApi from "../apis/giftApi";
    import vheader from "../components/gift/header"
    import newbtm from "../components/gift/newbtm";
    export default {
        name: "gift",
        data(){
          return {
              giftInfo:[]
          }
        },
        components:{
            "gift-header":vheader,
            "gift-newbtm":newbtm
        },
        methods:{
            adc(){
                giftApi.getProductInfo(data=>{
                    this.giftInfo=data;
                    console.log(data)
                })


            },
        },
        created() {
            this.adc();
        }
    }
</script>

<style scoped>

</style>