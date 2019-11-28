<template>
    <div class="lgin">
        <login-header></login-header>
        <login-body></login-body>
        <login-footer></login-footer>
    </div>
</template>

<script>
import header from '../components/login/header'
import body from '../components/login/body'
import footer from '../components/login/footer'
export default {
    name:"login",
    components:{
        "login-header":header,
        "login-body":body,
        "login-footer":footer
    }
}
</script>

<style scoped>
.lgin{
    background-color: rgb(244, 244, 244);
    height: 100%;
}
</style>