<template>
    <div class="account-foot" v-if="data">
        <account-top :data="data"></account-top>
        <account-mid :data="data.user_bank_list"></account-mid>
    </div>
</template>

<script>
    import accountTop from "./acc-foot-top"
    import middle from "./acc-foot-middle"
    export default {
        name: "account-footer",
        props:["data"],
        components:{
            "account-top":accountTop,
            "account-mid":middle
        }
    }
</script>

<style scoped>
.account-foot{
    width: 95%;
    border-top-right-radius: 0.15rem;
    border-top-left-radius: 0.15rem;
    margin: 0.1rem auto;
    background-color: white;
    border-right: 0.01rem solid gainsboro;
    border-left: 0.01rem solid gainsboro;
}
</style>
