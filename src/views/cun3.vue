<template>
    <div>
        <index-counter-head v-if="data" :data="data"></index-counter-head>
        <index-cun3-main></index-cun3-main>
    </div>
</template>

<script>
    import counterHead from "../components/common/counter-head"
    import cun3Main from "../components/cun3/cun3Main"
    export default{
        name:"cun1",
        components:{
            "index-counter-head":counterHead,
            "index-cun3-main":cun3Main
        },
        data(){
            return{
                data:{
                    "con":"国债计算器"
                }
            }
        }
    }

</script>

<style scoped>

</style>