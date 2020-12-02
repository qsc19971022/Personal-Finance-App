<!--
 * @Author: your name
 * @Date: 2019-11-26 19:42:54
 * @LastEditTime: 2020-02-24 16:39:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/termMoney.vue
 -->
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
                this.termInfo = data;
                console.log(data);
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