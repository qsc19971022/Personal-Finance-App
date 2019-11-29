<template>
    <div>
        <term-money-header></term-money-header>
        <term-money-body :data="termInfo"></term-money-body>
    </div>
</template>

<script>
import termApi from '../apis/termMoney'
import header from '../components/termMoney/header'
import body from '../components/termMoney/body'
export default {
    name:"term-money",
    components:{
        "term-money-header":header,
        "term-money-body":body
    },
    data(){
        return{
            termInfo:""
        }
    },
    methods:{ 
        _initData(){
            termApi.getTermInfo(data=>{
                this.termInfo = data
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