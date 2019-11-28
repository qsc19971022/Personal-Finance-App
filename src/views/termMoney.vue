<template>
    <div>
        <term-money-header></term-money-header>
        <term-money-body></term-money-body>
    </div>
</template>

<script>
import header from '../components/termMoney/header'
import body from '../components/termMoney/body'
export default {
    name:"term-money",
    components:{
        "term-money-header":header,
        "term-money-body":body
    }
}
</script>

<style scoped>

</style>