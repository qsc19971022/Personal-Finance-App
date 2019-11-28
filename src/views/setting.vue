<template>
    <div>
        <my-header></my-header>
        <my-about></my-about>
    </div>
</template>

<script>
    import about from "../components/setting/S_about"
    import vheader from "../components/setting/header"
    export default {
        name: "setting",
        components:{
            "my-about":about,
            "my-header":vheader
        }
    }
</script>

<style scoped>

</style>