<template>
    <div>
        <my-header></my-header>
        <my-middle></my-middle>
    </div>
</template>

<script>
    import vheader from "../components/my/header";
    import middle from "../components/my/middle";
    export default {
        name: "my",
        components:{
            "my-header":vheader,
            "my-middle":middle,
        }
    }
</script>

<style scoped>

</style>