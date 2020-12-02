<!--
 * @Author: your name
 * @Date: 2019-11-30 09:59:30
 * @LastEditTime: 2020-02-25 11:13:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/views/product.vue
 -->
<template>
    <div class="productMarginb">
        <div v-if="adc" class="product-secc">
            <moneywoftsun-product-headerBtn></moneywoftsun-product-headerBtn>
            <moneywoftsun-product-topimg1></moneywoftsun-product-topimg1>
        </div>
        <moneywoftsun-product-topimg2 v-else></moneywoftsun-product-topimg2>
        <moneywoftsun-product-scroll></moneywoftsun-product-scroll>
        <moneywoftsun-product-btm v-if="setproduct" :data="setproduct"></moneywoftsun-product-btm>
        <moneywoftsun-product-btm v-else-if="setproduct.series1_product" :data="setproduct.series1_product"></moneywoftsun-product-btm>
        <moneywoftsun-product-btm v-else-if="setproduct.series2_product" :data="setproduct.series2_product"></moneywoftsun-product-btm>
        <moneywoftsun-product-btm v-else-if="setproduct.series3_product" :data="setproduct.series3_product"></moneywoftsun-product-btm>
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
    import Vue from 'vue'
    import {Skeleton} from 'vant'
    Vue.use(Skeleton);
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
                id:0,
                loading:true
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
                    console.log(data);
                    this.setproduct = Object.assign([],data);
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
        created() {
            this.adcss();
            this.getprodu();
            this.localstory()
        },
        mounted(){
            this.$bus.$on("adc",(i)=>{
                this.id = i;
            });
            this.loading=false;
        }
     }

</script>

<style scoped>
    .productMarginb{
        margin-bottom: 0.45rem;
    }
</style>