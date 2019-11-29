<template>
    <div>
        <my-header></my-header>
        <my-middle :data="turnInfo" :data1="info1"></my-middle>
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
                info1:[],
            }
        },
        methods:{
            _initData(){
                let user = localStorage.getItem("user")
                turnInApi.turnIn(user,"转入",(data)=>{
                    this.turnInfo = data
                    console.log(data);
                })
            },

            async _initPageInfo(){
                let user_phone=localStorage.getItem("user");
                let data=await my_account.getInfoPage(user_phone);
                this.Info1=data;
            },
        },
        async mounted() {
            this._initPageInfo();
        },


        created(){
            this._initData()

        },

    }
</script>

<style scoped>

</style>