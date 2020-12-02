<!--
 * @Author: your name
 * @Date: 2019-12-02 10:16:40
 * @LastEditTime: 2020-02-24 11:49:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/BindingCard.vue
 -->
<template>
    <div>

        <div class="bind" v-if="CardInfo.length>=0">
            <BingHead></BingHead>
            <bindcon :data1="CardInfo"></bindcon>
            <button @click="go">添加银行卡</button>
            <bingfoot></bingfoot>
        </div>
        <div class="bind" v-else>
            <BingHead></BingHead>
            <bindcon></bindcon>
            <button @click="go">添加银行卡</button>
            <bingfoot></bingfoot>
        </div>
    </div>
</template>

<script>
    import bindHead from "../components/bing/bind-header"
    import bindcon from "../components/bing/bind-con"
    import bindfoot from "../components/bing/bing-foot"
    import cardinfo from "../apis/cardinfo"
    export default {
        name: "BindingCard",
        components:{
            "BingHead":bindHead,
            "bindcon":bindcon,
            "bingfoot":bindfoot
        },
        data(){
            return{
                CardInfo:[],
            }
        },
        methods:{
            async _initPageInfo(){
                let user_phone=localStorage.getItem("user");
                let data=await cardinfo.getInfo1Page(user_phone);
                this.CardInfo=data;
                console.log(data);
            },
            go(){
                this.$router.push("/BingCard");
            }
        },
        created() {
            this._initPageInfo();
        }
    }
</script>

<style scoped>
    .bind>button{
        width: 80%;
        height: 0.5rem;
        font-size: 0.2rem;
        font-weight: 600;
        color: white;
        margin-left: 0.35rem;
        letter-spacing: 0.03rem;
        background:linear-gradient(black 40%,gray);
        line-height: 0.5rem;
        border: none;
        border-radius: 0.5rem;
        outline: none;
        margin-bottom: 0.6rem;
    }
</style>
