<!--
 * @Author: your name
 * @Date: 2019-11-28 21:14:34
 * @LastEditTime: 2020-03-05 14:43:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/gift.vue
 -->
<template>
    <div>
        <gift-header></gift-header>
        <gift-newbtm :key="i" v-for="(btm,i) in giftInfo" :data="btm" :bdx="i"></gift-newbtm>
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