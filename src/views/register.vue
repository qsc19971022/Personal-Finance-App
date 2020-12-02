<template>
    <div class="lgin">
        <register-header></register-header>
        <register-body></register-body>
        <register-footer></register-footer>
    </div>
</template>

<script>
import header from '../components/register/header'
import body from '../components/register/body'
import footer from '../components/register/footer'
export default {
    name:"register",
    components:{
        "register-header":header,
        "register-body":body,
        "register-footer":footer
    }
}
</script>

<style scoped>
.lgin{
    background-color: rgb(244, 244, 244);
    height: 100%;
}
</style>