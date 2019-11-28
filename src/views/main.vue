<template>
    <div>
        <router-view></router-view>
        <con-footer></con-footer>
    </div>
</template>

<script>
    import confoot from "../components/commons/footer"
    export default {
        name: "main",
        components:{
            "con-footer":confoot
        }

    }
</script>

<style scoped>

</style>