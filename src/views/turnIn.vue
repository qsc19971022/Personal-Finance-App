<template>
    <div class="an">
        <balance-turn-in-header></balance-turn-in-header>
        <balance-turn-in-body :data="turnInfo"></balance-turn-in-body>
        <balance-turn-in-footer></balance-turn-in-footer>
    </div>
</template>

<script>
import turnInApi from '../apis/turnIn'
import header from '../components/turnIn/header'
import body from '../components/turnIn/body'
import footer from '../components/turnIn/footer'
export default {
    name:"balance-turn-in",
    components:{
        "balance-turn-in-header":header,
        "balance-turn-in-body":body,
        "balance-turn-in-footer":footer
    },
    data(){
        return{
            turnInfo:""
        }
    },
    methods:{ 
        _initData(){
            let user = localStorage.getItem("user")
            turnInApi.turnIn(user,"转入",(data)=>{
                this.turnInfo = data
            })
        }
    },
    created(){
        this._initData()
    }
}
</script>

<style scoped>
.an{
    background-color: rgb(244, 244, 244);
    height: 100%;
}
</style>