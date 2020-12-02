<template>
    <div class="product-scroll">
        <div>
            <a href="#" @click.prevent="change(i)" :class="{col:i==number}" :key="i" :i="i" v-for="(scroll1,i) in scroll"  class="product-scroll-a">
                <p>{{scroll1.text}}</p><p>{{scroll1.text1}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    import setScroll from "../../apis/setScroll"
    export default{
        name:"scroll",
        data(){
            return{
                number:0,
                scroll:[
                    {text:"全部",text1:"2.33%-23.53%"},
                    {text:"0~1个月",text1:"2.33%-4.25%"},
                    {text:"1~6个月",text1:"3.42%-4.32%"},
                    {text:"6个月以上",text1:"4.10%-5.21%"}

                ]
            }
        },
        methods:{
            change(i){
                this.$bus.$emit("adc",i);
                this.number=i;
                setScroll.getscroll(i,(data)=>{
                    console.log(data);
                    this.$bus.$emit("ass",data)
                })
            }
        }
    }

</script>

<style scoped>
    .product-scroll{
        width:3.35rem;
        margin:0 0.2rem;
        overflow-x: scroll;
        font-size:0.16rem;
        border-bottom: 0.005rem dashed rgb(153,153,153);
    }
    .product-scroll::-webkit-scrollbar{
        display: none;
    }
    .product-scroll>div{
        width:4rem;
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
        font-size: 0.16rem;
    }
</style>