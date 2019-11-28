<template>
    <div>
        <balance-turn-out-header></balance-turn-out-header>
        <balance-turn-out-body></balance-turn-out-body>
        <balance-turn-out-footer></balance-turn-out-footer>
    </div>
</template>

<script>
import turnOutApi from '../apis/turnOut'
import header from '../components/turnOut/header'
import body from '../components/turnOut/body'
import footer from '../components/turnOut/footer'
export default {
    name:"balance-turn-out",
    components:{
        "balance-turn-out-header":header,
        "balance-turn-out-body":body,
        "balance-turn-out-footer":footer
    },
    data(){
        return{
            turnOutInfo:""
        }
    },
    methods:{ 
        _initData(){
            let user = localStorage.getItem("user")
            turnOutApi.turnOut(user,(data)=>{
                this.turnOutInfo = data
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