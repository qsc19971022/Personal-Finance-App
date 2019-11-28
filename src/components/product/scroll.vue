<template>
    <div class="product-scroll">
        <div>
            <a href="#" @click="change(i)" :class="{col:i==number}"  :key="i" :i="i" v-for="(scroll,i) in data.scrolls"  class="product-scroll-a">
                <p>{{scroll.text}}</p><p>{{scroll.num}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    // import scrollItem from "./scroll/scrollItem";
    export default{
        name:"scroll",
        data(){
            return{
                number:0
            }
        },
        methods:{
            change(i){
                this.$bus.$emit("adc",i);
                this.number=i;
            }
        },
        // components:{
        //     "moneywoftsun-product-scroll-item":scrollItem
        // },
        props:["data"]
    }

</script>

<style scoped>
    .product-scroll{
        width:3.35rem;
        margin:0 0.2rem;
        height:0.8rem;
        overflow-x: scroll;
        font-size:0.16rem;
        border-bottom: 0.005rem dashed rgb(153,153,153);
    }
    .product-scroll::-webkit-scrollbar{
        display: none;
    }
    .product-scroll>div{
        width:4rem;
        height:0.8rem;
        padding:0.1rem 0rem 0 0rem;
        box-sizing: border-box;
    }

    .product-scroll-a{
        display: inline-block;
        width:1rem;
        height:0.6rem;
        padding-top:0.1rem;
        color:black;
    }
    .col{
        color:orange;
    }
    .product-scroll-a>p{
        font-size:0.12rem;
        text-align: center;
    }
    .product-scroll-a>p:nth-child(1){
        font-size: 0.18rem;
    }
</style>