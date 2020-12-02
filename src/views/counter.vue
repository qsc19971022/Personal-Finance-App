<template>
    <div>
        <index-counter-head v-if="data" :data="data"></index-counter-head>
        <index-counter-main></index-counter-main>
    </div>
</template>

<script>
    import counterHead from "../components/common/counter-head"
    import counterMain from "../components/counter/counter-main"
    export default{
        name:"counter",
        components:{
            "index-counter-head":counterHead,
            "index-counter-main":counterMain
        },
    data(){
        return{
            data:{
                "con":"计算器"
            }
        }
    }
    }

</script>

<style scoped>

</style>