<template>
    <div>
        <detailhead v-if="details.product_detail" :data="details.product_detail"></detailhead>
        <detail-btm v-if="details.product_detail" :data="details.product_detail"></detail-btm>
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
                details:[]
            }
        },
        components:{
            detailhead,
            "detail-btm":detailbtm
        },
        methods:{
            sodd(){
                let name = this.$route.query.name;
                // let name ="新人专享001";
                detailin.getdetails2(name,data=>{
                    console.log(name);
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