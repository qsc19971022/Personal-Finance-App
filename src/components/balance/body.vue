<template>
    <div class="clo">
        <div class="bld">
            <p>总金额(元)<span :class="flag?'ceye':'oeye'" @click="flag=!flag"></span></p>
            <p>{{flag?data.balance_money:'***'}}</p>
            <p>如果转入1万元，30天收益约<span>19.24</span>元</p>
            <div class="fld">
                <div class="fls">
                    <p>累计收入(元)</p>
                    <p>{{data.user_balance}}</p>
                </div>
                <div class="fls">
                    <p>七日年化(%)</p>
                    <p>{{data.balance_rate}}</p>
                </div>
            </div>
            <button @click="turnOut" class="lbtn">转出</button>
            <button @click="turnIn" class="rbtn">转入</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"balance-body",
    props:["data"],
    data(){
        return{
            flag:false
        }
    },
    methods:{
        turnOut(){
            this.$router.push("/turnOut")
        },
        turnIn(){
            this.$router.push("/turnIn")
        }
    }
}
</script>

<style scoped>
.clo{
    background-color: rgb(255, 102, 0);
    padding-bottom: 0.1rem;
}
.bld{
    font-size: 0.16rem;
    width: 92%;
    margin-left: 4%;
    background-color: white;
    border-radius: 0.04rem;
}
.bld>p:nth-child(1){
    text-align: center;
    font-size: 0.12rem;
    padding-top: 0.4rem;
}
.ceye{
    background-image: url("../../../public/assets/images/balance/oldage_mine_asset_eyeon.png");
    background-repeat: no-repeat;
    background-size: 0.25rem;
    background-position: 0.04rem 0.07rem;
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
}
.oeye{
    background-image: url("../../../public/assets/images/balance/oldage_mine_asset_eyeoff.png");
    background-repeat: no-repeat;
    background-size: 0.18rem;
    background-position: 0.06rem 0.16rem;
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
}
.bld>p:nth-child(2){
    font-size: 0.28rem;
    margin-top: 0.15rem;
    text-align: center;
    font-weight: 600;
}
.bld>p:nth-child(3){
    width: 76%;
    background-color: rgb(244, 244, 244);
    font-size: 0.13rem;
    text-align: center;
    margin-left: 12%;
    height: 0.25rem;
    border-radius: 0.2rem;
    line-height: 0.25rem;
    margin-top: 0.2rem;
    color: rgb(110, 110, 110)
}
.bld>p:nth-child(3) span{
    color: rgb(255, 85, 0);
    font-size: 0.15rem;
    font-weight: 600;
}
.fld{
    display: flex;
}
.fls{
    width: 50%;
    text-align: center;
    font-size: 0.12rem;
    padding-top: 0.4rem;
}
.fls>p:nth-child(1){
    color: rgb(189, 189, 189)
}
.fls>p:nth-child(2){
    padding-top: 0.1rem;
    font-size: 0.15rem;
    font-weight: 600;
}
.bld button{
    width: 42%;
    height: 0.4rem;
    border: none;
    margin-top: 0.3rem;
    margin-bottom: 0.1rem;
    border-radius: 0.02rem;
    outline: none;
}
.lbtn{
    background-color: rgb(254, 246, 238);
    color: rgb(255, 85, 0);
    margin-left: 7%;
}
.rbtn{
    background-color: rgb(255, 85, 0);
    color: white;
    margin-left: 0.1rem;
}
</style>