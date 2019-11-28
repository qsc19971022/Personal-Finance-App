<template>
    <div>
        <index-counter-head v-if="data" :data="data"></index-counter-head>
        <index-cun4-main></index-cun4-main>
    </div>
</template>

<script>
    import counterHead from "../components/common/counter-head"
    import cun4Main from "../components/cun4/cun4Main"
    export default{
        name:"cun1",
        components:{
            "index-counter-head":counterHead,
            "index-cun4-main":cun4Main
        },
        data(){
            return{
                data:{
                    "con":"贵金属买卖计算器"
                }
            }
        }
    }

</script>

<style scoped>

</style>