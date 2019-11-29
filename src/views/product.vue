<template>
    <div>
        <div v-if="adc" class="product-secc">
            <moneywoftsun-product-headerBtn></moneywoftsun-product-headerBtn>
            <moneywoftsun-product-topimg1></moneywoftsun-product-topimg1>
        </div>
        <moneywoftsun-product-topimg2 v-else></moneywoftsun-product-topimg2>
        <moneywoftsun-product-scroll></moneywoftsun-product-scroll>
        <moneywoftsun-product-btm v-if="setproduct.all_product" :data="setproduct.all_product"></moneywoftsun-product-btm>
    </div>
</template>

<script>
    // import axios from "axios"
    import headerBtn from "../components/product/headerBtn";
    import topimg1 from "../components/product/topimg1"
    import topimg2 from "../components/product/topimg2"
    import scroll from "../components/product/scroll"
    import btm from "../components/product/btm";
    // import url from "../apis/productInfo"
    import setproduct from "../apis/setProduct"

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
                setproduct:[],
                adc:false,
                id:0
            }
        },
        methods:{
            // _adc(){
            //     axios.get(url.PRODUCTURL).then(res=>{
            //         this.productInfo = res.data;
            //         console.log(res.data)
            //     })
            // },
            adcss(){
                this.$bus.$on("ass",(data)=>{
                    this.setproduct = data;
                })
            },
            localstory(){
                let ss = localStorage;
                if(ss.getItem("user")){
                    this.adc = true;
                }else{
                    this.adc = false;
                }
            },
            getprodu(){
                setproduct.getproduct(data=>{
                    this.setproduct = data;
                    console.log(data)
                })
            }
        },
        beforeMount() {
            this.adcss()
            this.getprodu()
        },
        created() {
            this.localstory()
        },
        mounted(){
            this.$bus.$on("adc",(i)=>{
                this.id = i;
            });
        }
     }

</script>

<style scoped>

</style>