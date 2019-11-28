<template>
    <div>
        <BingHead></BingHead>
        <bindcon></bindcon>
    </div>
</template>

<script>
    import bindHead from "../components/bing/bind-header"
    import bindcon from "../components/bing/bind-con"
    export default {
        name: "BindingCard",
        components:{
            "BingHead":bindHead,
            "bindcon":bindcon
        }
    }
</script>

<style scoped>

</style>
