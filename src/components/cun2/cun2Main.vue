<template>
    <div class="counter-cun1main">
        <p>贷款种类<select name="" id="s1">
            <option value="">个人住房商业贷款</option>
            <option value="">个人住房公积金贷款</option>
            <option value="">个人综合消费贷款</option>
            <option value="">个人短期信用贷款</option>
            <option value="">个人汽车贷款</option>
            <option value="">个人助学贷款</option>
            <option value="">信用消费贷款</option>
        </select></p>
        <p>还款方式<select name="" id="s2">
            <option value="">等额本息</option>
            <option value="">等额本金</option>
        </select></p>
        <p>贷款期限<select name="" id="s3" ref="dksj">
            <option value="1">1年</option>
            <option value="2">2年</option>
            <option value="3">3年</option>
            <option value="4">4年</option>
            <option value="5">5年</option>
            <option value="6">6年</option>
            <option value="7">7年</option>
            <option value="8">8年</option>
            <option value="9">9年</option>
            <option value="10">10年</option>
            <option value="11">11年</option>
            <option value="12">12年</option>
            <option value="13">13年</option>
            <option value="14">14年</option>
            <option value="15">15年</option>
        </select></p>
        <p>贷款金额<input type="text" placeholder="请输入金额" ref="dkje"></p>
        <p>年利率<input type="text" placeholder="请输入" ref="dknll">&nbsp;&nbsp; %</p>
        <div class="ll"><span @click="loca">查询利率</span><span @click="dktotal">计算</span></div>
        <p>月还款额<span ref="dkyhke">0</span></p>
        <p>累计利息<span ref="dkljlx">0</span></p>
        <p>本息合计<span ref="dkbxhj">0</span></p>
        <p>注：本计算工具中的数据、计算结果等仅供参考，具体以办理业务或交易实际成交时的金额为准，据此投资风险自负。</p>
    </div>
</template>

<script>
    export default{
        name:"cun2Main",
        methods:{
            loca(){
                window.location.href="#/depositRate"
            },
            dktotal(){
                let index = this.$refs.dksj.selectedIndex;
                let dksj=this.$refs.dksj.options[index].value;
                let dkje = this.$refs.dkje.value;
                let dknll = this.$refs.dknll.value;
                this.$refs.dkyhke.innerText=(((dkje*dknll*dksj)/100+(+dkje))/(dksj*12)).toFixed(2);
                this.$refs.dkljlx.innerText=((dkje*dksj*dknll)/100).toFixed(2);
                this.$refs.dkbxhj.innerText=((dkje*dksj*dknll)/100+(+dkje)).toFixed(2);
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