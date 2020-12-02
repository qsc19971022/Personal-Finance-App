<!--
 * @Author: your name
 * @Date: 2019-11-30 16:50:16
 * @LastEditTime: 2020-02-25 09:42:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/detail.vue
 -->
<template>
    <div>
        <detailhead v-if="details" :data="details"></detailhead>
        <detail-btm v-if="details" :data="details" :name1="this.name1"></detail-btm>
    </div>
</template>

<script>
    import detailin from "../apis/setDetailInfo"
    import detailhead from "../components/common/counter-head"
    import detailbtm from "../components/detail/detail-btm"
    export default {
        name: "detail",
        data(){
            return{
                details:[],
                name1:[]
            }
        },
        components:{
            detailhead,
            "detail-btm":detailbtm
        },
        methods:{
            sodd(){
                this.name1 = this.$route.query.name;
                // let name ="新人专享001";
                detailin.getdetails2(this.name1,data=>{
                    // console.log(this.name1);
                    this.details =data;
                    console.log(data)
                })
                // detailin.getdetails2(data=>{
                //     this.details =data;
                //     console.log(data)
                // })
            }
        },
        mounted(){
            this.sodd();
        },
    }
</script>

<style scoped>

</style>