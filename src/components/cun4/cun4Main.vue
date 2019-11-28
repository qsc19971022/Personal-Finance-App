<template>
    <div class="counter-cun1main">
        <p>贵金属品种<select name="" id="s1" ref="gjspz" @change="fungjs">
            <option value="207.88">美元账户铂金</option>
            <option value="919.5000">人民币账户铂金</option>
            <option value="1468.4350">美元账户黄金</option>
            <option value="332.25">人民币账户黄金</option>
            <option value="17.2400">美元账户白银</option>
            <option value="3.899">人民币账户白银</option>
        </select></p>
        <p>操作选择<select name="" id="s3">
            <option value="">买入</option>
            <option value="">卖出</option>
        </select></p>
        <p>交易数量<input ref="gjsjysl" type="text" placeholder="请输入数量"></p>
        <p>最新价格<span ref="zxjg">919.0000</span></p>
        <div class="ll"><span @click="gjsjyje">计算</span></div>
        <p>交易金额<span ref="jysl">0</span></p>
        <p>注：本计算工具中的数据、计算结果等仅供参考，具体以办理业务或交易实际成交时的金额为准，据此投资风险自负。</p>
    </div>
</template>

<script>
    export default{
        name:"cun4Main",
        methods:{
            fungjs(){
                let index = this.$refs.gjspz.selectedIndex;
                let s=this.$refs.gjspz.options[index].value;
                this.$refs.zxjg.innerHTML = s;
            },
            gjsjyje(){
                let s = Number(this.$refs.gjsjysl.value);
                let zxjg = Number(this.$refs.zxjg.innerHTML);
                this.$refs.jysl.innerHTML = (s*zxjg).toFixed(4)
            }
        }
    }

</script>

<style scoped>
    .counter-cun1main{
        font-size: 0.16rem;
        margin:0.05rem 0.1rem;
        border-top: 0.005rem solid black ;
    }
    .counter-cun1main>p{
        display: flex;
        justify-content: space-between;
        height:0.5rem;
        line-height: 0.5rem;
        padding: 0 0.1rem;
        box-sizing: border-box;
        border: 0.005rem solid black ;
        border-top:none;
    }
    .counter-cun1main>p>select{
        height:0.3rem;margin-top: 0.1rem;
    }

    .counter-cun1main>p:last-child{
        border:none;
        padding: 0.08rem 0 0 0;
        line-height:0.2rem;
        font-size: 0.13rem;
    }
    .counter-cun1main>.ll{
        padding-top: 0.05rem;
        box-sizing: border-box;
        height:0.5rem;
        line-height: 0.5rem;
        display: flex;
        justify-content: space-around;
    }
    .counter-cun1main>.ll>span {
        display: inline-block;
        width: 1.2rem;
        height: 0.4rem;
        background-color: #00B7FF;
        text-align: center;
        line-height: 0.4rem;
        color:white;
    }
    .counter-cun1main>p:nth-of-type(5){
        border-top: 0.005rem solid black;
    }
    .counter-cun1main>p:nth-of-type(3)>input{
        width:0.7rem;
        height:0.3rem;
        margin-top: 0.1rem;
        text-align: right;
        margin-left: 1.9rem;
    }
    .counter-cun1main>p:nth-of-type(3)>input:hover{
       border: 0.005rem solid orange;
    }
    .counter-cun1main>p:nth-of-type(4)>input:hover,.counter-cun1main>p:nth-of-type(5)>input:hover{
        border:orange 0.005rem solid;
    }
</style>