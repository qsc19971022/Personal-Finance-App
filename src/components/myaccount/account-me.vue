<template>
    <div class="account_me">
        <img :src="pic" @click="sendFile">
        <div class="account_info">
            <p>{{account}}</p>
            <p>{{tel}}</p>
        </div>
        <p><img src="../../../public/assets/images/info/Screenshot_20191121_090552_com.xzck_15.png"></p>
    </div>
</template>

<script>
    export default {
        name: "account-me",
        data(){
            return{
                CardId:"",
                Carddes:"未开通银行存管账户",
                account:"",
                tel:'12345678901',
                pic:'http://39.107.245.176/images/info/Screenshot_20191121_090552_com.xzck_12.png'
            }
        },
        methods:{
            change(){
                if(this.CardId==''){
                    this.account=this.Carddes;
                }else{
                    this.account=this.CardId;
                }
            },
            changeTel(){
                this.tel=this.tel.substr(0,3)+"****"+this.tel.substr(7);
            },
            sendFile(){
                location.href = "#/newImg"
            }
        },
        mounted() {
            this.change()
            this.changeTel();
        }
    }
</script>

<style scoped>
.account_me{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 0.6rem;
    border-top: 0.01rem solid rgb(222,77,37);
    top: 0.59rem;
    padding: 0.2rem;
    height: 1rem;
    background-repeat: no-repeat;
    background-image: url("../../../public/assets/images/info/bgme.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
.account_me>img{
    width: 0.6rem;
    height: 0.6rem;
}
.account_me>p>img{
    width: 0.1rem;
    height: 0.2rem;
    margin-top: 0.2rem;
}
    .account_info{
        letter-spacing: 0.02rem;
        color: rgb(245,245,245);
        height: 100%;
        line-height: 0.3rem;
        width: 57%;
        margin-right: 0.5rem;
        font-size: 0.18rem;
    }
</style>
