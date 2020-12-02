<template>
    <div class="termbody">
        <p>为您推荐</p>
        <div class="bood" :key="i" v-for="(u,i) in data">
            <p>{{u.product_name}}</p>
            <div class="llx">
                <div>
                    <p class="sgf">业绩比较基准</p>
                    <p class="rf">{{u.product_rate}}%</p>
                </div>
                <div>
                    <p class="sgf">期限</p>
                    <p>最短{{u.product_trade}}天</p>
                </div>
                <div>
                    <p class="sgf">起购金额</p>
                    <p>100</p>
                </div>
                <div>
                    <p @click="list(i)" class="buy">购买</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"term-money-body",
    props:["data"],
    methods:{
        list(i){
            let dat = this.data[i].product_name
            this.$router.push(`/product/detail?name=${dat}`)
        }
    }
}
</script>

<style scoped>
.termbody{
    font-size: 0.14rem;
}
.termbody>p:nth-child(1){
    font-size: 0.16rem;
    padding-top: 0.2rem;
    padding-left: 0.1rem;
    padding-bottom: 0.2rem;
}
.bood>p:nth-child(1){
    font-weight: 600;
    padding-left: 5%;
}
.bood{
    border-top: 0.01rem solid rgb(234, 234, 234);
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
}
.llx{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.sgf{
    font-size: 0.12rem;
    color: rgb(190, 190, 190)
}
.rf{
    color: red;
}
.buy{
    width: 0.45rem;
    border: 0.01rem solid red;
    font-size: 0.12rem;
    border-radius: 0.2rem;
    height: 0.23rem;
    text-align: center;
    line-height: 0.23rem;
    color: red;
}
</style>