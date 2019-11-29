<template>
    <div>
        <index-cashbook-head v-if="cashbook" :dat="cashbook"></index-cashbook-head>
        <div class="cashddbtm">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <index-cashbook-btm v-for="(bt,i) in cashbook.data" :key="i" :da="bt" :i="i"></index-cashbook-btm>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
    // import axios from "axios"
    import Vue from 'vue'
    import { PullRefresh } from "vant";
    Vue.use(PullRefresh);
    // import cashbookInfo from "../apis/cashbookInfo";
    import  cashbookHead from "../components/cashbook/cashbook-head"
    import cashbookbtm from "../components/cashbook/cashbook-btm"
    export default{
        name:"cashbook",
        components:{
            "index-cashbook-head":cashbookHead,
            "index-cashbook-btm":cashbookbtm
        },
        data(){
            return{
               cashbook:[],
                isLoading:false
            }
        },
        methods: {
            adc() {
                // axios.get(cashbookInfo.CASHBOOKURL).then(res => {
                //     this.cashbook = res.data;
                //     console.log(res.data)
                // })
                this.$bus.$on("click1",(datas)=>{
                    this.cashbook=datas;
                    console.log(datas)
                })
            },
            onRefresh() {
                setTimeout(() => {
                    // this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            }
        },
        beforeMount() {
            this.adc()
        },
    }

</script>

<style scoped>
    .cashddbtm{
        margin-top: 1.8rem;
    }
</style>