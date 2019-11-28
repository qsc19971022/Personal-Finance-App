<template>
    <div class="account">
        <accountHead></accountHead>
        <accountme></accountme>
        <accountfoot></accountfoot>
    </div>
</template>

<script>
    import accountheader from "../components/myaccount/account-head"
   import accountme from "../components/myaccount/account-me"
    import account from "../components/myaccount/account-footer"
    export default {
        name: "Myaccount",
        components:{
            "accountHead":accountheader,
            "accountme":accountme,
            "accountfoot":account
        }
    }
</script>

<style scoped>
.account{
    width:100%;
    background-color:rgb(238,238,238);
}
</style>
