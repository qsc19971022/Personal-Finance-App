<template>
    <div class="counter-cun1main">
        <p>国债名称<select name="" id="s1" ref="gzmc" @change="gzchange">
            <option value="86.2">19付息国债15</option>
            <option value="101.2">19付息国债01</option>
            <option value="105.3">19付息国债13</option>
            <option value="98.6">18付息国债02</option>
            <option value="92.5">18付息国债06</option>
            <option value="123.5">18付息国债18</option>
            <option value="112.3">17付息国债03</option>
            <option value="171.5">17付息国债21</option>
            <option value="172.5">17付息国债09</option>
        </select></p>
        <p>国债代码<span ref="gzdm">190015</span></p>
        <p>操作选择<select name="" id="s3">
            <option value="">买入</option>
            <option value="">卖出</option>
        </select></p>
        <p>数量<input type="text" ref="gzsl" placeholder="请输入数量"></p>
        <p>国债价格<span ref="gzjg">0.00</span></p>
        <div class="ll"><span @click="gztotal">计算</span></div>
        <p>金额<span ref="gzje">0</span></p>
        <p>注：本计算工具中的数据、计算结果等仅供参考，具体以办理业务或交易实际成交时的金额为准，据此投资风险自负。</p>
    </div>
</template>

<script>
    export default{
        name:"cun3Main",
        methods:{
        gzchange(){
            let index =this.$refs.gzmc.selectedIndex;
            let gzmc = this.$refs.gzmc[index].value;
            this.$refs.gzjg.innerHTML=gzmc;
            let gzmcs = this.$refs.gzmc[index].innerText;
            this.$refs.gzdm.innerHTML=gzmcs.slice(0,2)+"00"+gzmcs.slice(-2);
        },
        gztotal(){
            let gzsl = this.$refs.gzsl.value;
            let gzjg = this.$refs.gzjg.innerHTML;
            this.$refs.gzje.innerHTML = (gzsl*gzjg).toFixed(2);
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

    .counter-cun1main>p:nth-of-type(6){
        border-top: 0.005rem solid black ;
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
    .counter-cun1main>p:nth-of-type(4)>input,.counter-cun1main>p:nth-of-type(5)>input{
        width:0.7rem;
        height:0.3rem;
        margin-top: 0.1rem;
        text-align: right;
        margin-left: 1.9rem;
    }
    .counter-cun1main>p:nth-of-type(4)>input:hover,.counter-cun1main>p:nth-of-type(5)>input:hover{
        border:orange 0.005rem solid;
    }
</style>