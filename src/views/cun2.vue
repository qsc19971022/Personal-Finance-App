<template>
    <div>
        <index-counter-head v-if="data" :data="data"></index-counter-head>
        <index-cun2-main></index-cun2-main>
    </div>
</template>

<script>
    import counterHead from "../components/common/counter-head"
    import cun2Main from "../components/cun2/cun2Main"
    export default{
        name:"cun1",
        components:{
            "index-counter-head":counterHead,
            "index-cun2-main":cun2Main
        },
        data(){
            return{
                data:{
                    "con":"贷款计算器"
                }
            }
        }
    }

</script>

<style scoped>

</style>