<template>
    <div>
        <firend-header></firend-header>
        <firend-center></firend-center>
    </div>
</template>

<script>
    import vheader from "../components/firends/header";
    import center from "../components/firends/center";
    export default {
        name: "Invite_friends",
        components:{
            "firend-header":vheader,
            "firend-center":center
        }
    }
</script>

<style scoped>

</style>