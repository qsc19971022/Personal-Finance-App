<!--
 * @Author: your name
 * @Date: 2019-12-02 11:32:30
 * @LastEditTime: 2020-02-18 16:12:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/Myaccount.vue
 -->
<template>
    <div class="account" v-if="Info">
        <accountHead></accountHead>
        <accountme :data="Info"></accountme>
        <accountfoot :data="Info"></accountfoot>
    </div>
</template>

<script>
    import accountheader from "../components/myaccount/account-head"
   import accountme from "../components/myaccount/account-me"
    import account from "../components/myaccount/account-footer"
    import my_account from "../apis/my_account";
    export default {
        name: "Myaccount",
        data(){
          return{
              Info:{},
          }
        },
        components:{
            "accountHead":accountheader,
            "accountme":accountme,
            "accountfoot":account
        },
        methods:{
            async _initPageInfo(){
                let user_phone=localStorage.getItem("user");
                let data=await my_account.getInfoPage(user_phone);
                this.Info=data;
                if(data.status==1){
                    alert(data.msg);
                }
                console.log(data);
                let user_name = data.name;
                localStorage.setItem("touxiang",user_name)
            },
        },
        async mounted() {
            this._initPageInfo();
        },
    }
</script>

<style scoped>
.account{
    width:100%;
    background-color:rgb(238,238,238);
}
</style>
