<template>
    <div class="info_detail" v-if="InfoDetail">
        <detail_head></detail_head>
        <detail_con :data1="InfoDetail"></detail_con>
    </div>
</template>

<script>
    import head from "../components/infodetail/info_detail_head";
    import con from "../components/infodetail/info_detail_con"
    export default {
        name: "infoDetail",
        components:{
            "detail_head":head,
            "detail_con":con
        },
        data(){
            return{
                InfoDetail:{},
            }
        },
        async mounted() {
            this.$eventBus.$on("info",(a)=>{
                this.InfoDetail=a;
            });
        }
    }
</script>

<style scoped>

</style>
