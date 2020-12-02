<template>
    <div>
        <index-counter-head v-if="data" :data="data"></index-counter-head>
        <index-cun1-main></index-cun1-main>
    </div>
</template>

<script>
    import counterHead from "../components/common/counter-head"
    import cun1Main from "../components/cun1/cun1Main"
    export default{
        name:"cun1",
        components:{
            "index-counter-head":counterHead,
            "index-cun1-main":cun1Main
        },
        data(){
            return{
                data:{
                    "con":"存款计算器"
                }
            }
        }
    }

</script>

<style scoped>

</style>