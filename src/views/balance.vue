<template>
    <div>
        <balance-header></balance-header>
        <balance-body></balance-body>
        <balance-footer></balance-footer>
    </div>
</template>

<script>
import balApi from '../apis/balance'
import header from '../components/balance/header'
import body from '../components/balance/body'
import footer from '../components/balance/footer'
export default {
    name:"balance",
    components:{
        "balance-header":header,
        "balance-body":body,
        "balance-footer":footer
    },
    data(){
        return{
            balInfo:""
        }
    },
    methods:{ 
        _initData(){
            let user = localStorage.getItem("user")
            balApi.balance(user,(data)=>{
                this.balInfo = data
                window.console.log(data)
            })
        }
    },
    created(){
        this._initData()
    }
}
</script>

<style scoped>

</style>