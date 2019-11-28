<template>
    <div>
        <div v-if="adc" class="product-secc">
            <moneywoftsun-product-headerBtn></moneywoftsun-product-headerBtn>
            <moneywoftsun-product-topimg1></moneywoftsun-product-topimg1>
        </div>
        <moneywoftsun-product-topimg2 v-else></moneywoftsun-product-topimg2>
        <moneywoftsun-product-scroll v-if="productInfo" :data="productInfo"></moneywoftsun-product-scroll>
        <moneywoftsun-product-btm v-if="productInfo.btms" :data="productInfo.btms[id]"></moneywoftsun-product-btm>
    </div>
</template>

<script>
    import axios from "axios"
    import headerBtn from "../components/product/headerBtn";
    import topimg1 from "../components/product/topimg1"
    import topimg2 from "../components/product/topimg2"
    import scroll from "../components/product/scroll"
    import btm from "../components/product/btm";
    import url from "../apis/productInfo"
    export default{
        name:"product",
        components:{
            "moneywoftsun-product-headerBtn":headerBtn,
            "moneywoftsun-product-topimg1":topimg1,
            "moneywoftsun-product-topimg2":topimg2,
            "moneywoftsun-product-scroll":scroll,
            "moneywoftsun-product-btm":btm
        },
        data(){
            return{
                productInfo:[],
                adc:false,
                id:0
            }
        },
        methods:{
            _adc(){
                axios.get(url.PRODUCTURL).then(res=>{
                    this.productInfo = res.data;
                    console.log(res.data)
                })
            },
            localstory(){
                let ss = localStorage;
                if(ss.getItem("user")=="www"){
                    this.adc = true;
                }else{
                    this.adc = false;
                }
            }
        },
        beforeMount() {
            this._adc()
        },
        created() {
            this.localstory()
        },
        mounted(){
            this.$bus.$on("adc",(i)=>{
                this.id = i;
            })
        }
     }

</script>

<style scoped>

</style>