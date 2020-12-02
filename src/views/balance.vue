<!--
 * @Author: your name
 * @Date: 2019-11-28 09:39:12
 * @LastEditTime: 2020-02-27 08:47:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/balance.vue
 -->
<template>
    <div>
        <balance-header></balance-header>
        <balance-body :data="balInfo"></balance-body>
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
                this.balInfo = data;
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