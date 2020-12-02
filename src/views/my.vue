<!--
 * @Author: your name
 * @Date: 2019-12-02 01:21:20
 * @LastEditTime: 2020-02-18 19:19:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/my.vue
 -->
<template>
    <div>
        <my-header></my-header>
        <my-middle :data="turnInfo" :data1="Info1"></my-middle>
    </div>
</template>

<script>
    import turnInApi from '../apis/turnIn'
    import my_account from "../apis/my_account";

    import vheader from "../components/my/header";
    import middle from "../components/my/middle";
    export default {
        name: "my",
        components:{
            "my-header":vheader,
            "my-middle":middle,
        },
        data(){
            return{
                turnInfo:"",
                Info1:{},
            }
        },
        methods:{
            _initData(){
                let user = localStorage.getItem("user")
                turnInApi.turnIn(user,(data)=>{
                    this.turnInfo = data
                    console.log(data);
                })
            },

            async _initPageInfo(){
                let user_phone=localStorage.getItem("user");
                let data1=await my_account.getInfoPage(user_phone);
                this.Info1=data1;
                console.log(this.Info1)
            },
        },
         mounted() {
             this._initPageInfo();
        },


        created(){
            this._initData()


        },

    }
</script>

<style scoped>

</style>