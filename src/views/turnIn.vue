<!--
 * @Author: your name
 * @Date: 2019-11-27 10:58:34
 * @LastEditTime: 2020-02-28 10:42:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/turnIn.vue
 -->
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
            turnInApi.turnIn(user,(data)=>{
                this.turnInfo = data;
                let id = data.bank_card.length;
                for(let i = 0; i<=id-1; i++){
                    data.bank_card[i].bank_id = data.bank_card[i].bank_id.slice(-4);
                    data.bank_card[i].bank = data.bank_card[i].bank + '(' + data.bank_card[i].bank_id + ')';
                }
                console.log(data);
            })
        }
    },
    created(){
        this._initData();
    }
}
</script>

<style scoped>
.an{
    background-color: rgb(244, 244, 244);
    height: 100%;
}
</style>