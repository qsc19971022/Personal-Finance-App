<template>
    <div class="counter-cun1main">
        <p>币种<select name="" id="s1">
            <option value="">人民币</option>
            <option value="">美元</option>
            <option value="">日元</option>
            <option value="">港币</option>
            <option value="">瑞士法郎</option>
            <option value="">加拿大元</option>
            <option value="">澳大利亚元</option>
            <option value="">欧元</option>
        </select></p>
        <p>存款种类<select ref="a" name="" id="s2" @change="fun1">
            <option value="活期">活期</option>
            <option value="整存整取">整存整取</option>
            <option value="零存整取">零存整取</option>
        </select></p>
        <p ref="b" class="ctime">存款期限<select ref="d" name="" id="s3">
            <option value="1">一个月</option>
            <option value="3">三个月</option>
            <option value="6">六个月</option>
            <option value="12">一年</option>
            <option value="24">两年</option>
        </select></p>
        <div class="counter-huoqi"  ref="c">
            <p>起存日期 <span>{{datai1}}</span></p>
            <p>结束日期 <span>{{datai2}}</span></p>
        </div>
        <p>存款金额<input type="text" placeholder="请输入" ref="ckje"></p>
        <p>年利率<span><input type="text" placeholder="请输入" ref="nll">%</span></p>
        <div class="ll"><span @click="select1">查询利率</span><span @click="select2">计算</span></div>
        <p>存款利息<span ref="cklx">0</span></p>
        <p>本息合计<span ref="bxhj">0</span></p>
        <p>注：本计算工具中的数据、计算结果等仅供参考，具体以办理业务或交易实际成交时的金额为准，据此投资风险自负。</p>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                datai1:"2019-11-8",
                datai2:""
            }
        },
        name:"cun1Main",
        methods:{
            fun1(){
                var index = this.$refs.a.selectedIndex;
               let s=this.$refs.a.options[index].innerHTML
                if(s=="活期"){
                    this.$refs.c.style.display ="block";
                    this.$refs.b.style.display = "none";
                }else{
                    this.$refs.b.style.display ="block";
                    this.$refs.c.style.display = "none"
                    this.$refs.d.style.marginLeft = "2.05rem"
                }
            },
            datei(){
                let now =new Date()
                let year = now.getFullYear(); //得到年份
                let month = now.getMonth();//得到月份
                let date = now.getDate();//得到日期
                let time = year+"-"+ month +"-"+ date;
                this.datai1 = time;
                this.datai2 = time;
            },
            select1(){
                window.location.href="#/depositRate"
            },
            select2(){
                let index = this.$refs.a.selectedIndex;
                let s=this.$refs.a.options[index].innerHTML;
                if(s=="活期"){
                    this.datai1="应小于结束日"
                }else{
                    let index = this.$refs.d.selectedIndex;
                    let cksj=this.$refs.d.options[index].value/12;
                    let ckje = this.$refs.ckje.value;
                    let nll = this.$refs.nll.value;
                    this.$refs.cklx.innerText=((ckje*cksj*nll)/100).toFixed(2);
                    this.$refs.bxhj.innerText=((ckje*cksj*nll)/100+(+ckje)).toFixed(2);
                }
            }
        },
        mounted() {
            this.datei();
        }
    }

</script>

<style scoped>
    .counter-cun1main{
        font-size: 0.16rem;
        margin:0.55rem 0.1rem;
        border-top: 0.005rem solid rgb(203,203,203) ;
    }
    .counter-cun1main>p{
        display: flex;
        justify-content: space-between;
        height:0.5rem;
        line-height: 0.5rem;
        padding: 0 0.1rem;
        box-sizing: border-box;
        border: 0.005rem solid rgb(203,203,203) ;
        border-top:none;
    }
    .counter-cun1main>p>select{
        height:0.3rem;
        margin-top: 0.1rem;
    }
    .counter-cun1main>p>input{
        margin-top: 0.1rem;
    }
    .counter-cun1main>p:nth-of-type(3){
        display: none;
    }
    .counter-cun1main>p:nth-of-type(6){
        border-top: 0.005rem solid rgb(203,203,203) ;
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
        background-color: rgb(98,169,206);
        text-align: center;
        line-height: 0.4rem;
        color:white;
    }
    .counter-cun1main>p:nth-of-type(4)>input,.counter-cun1main>p:nth-of-type(5) input{
        height:0.3rem;
        text-align: right;
    }
    .counter-cun1main>p:nth-of-type(4)>input:hover,.counter-cun1main>p:nth-of-type(5)>input:hover{
        border:orange 0.005rem solid;
    }
    .counter-huoqi>p{
        height:0.5rem;
        line-height: 0.5rem;
        padding: 0 0.1rem;
        box-sizing: border-box;
        border: 0.005rem solid rgb(203,203,203) ;
        border-top:none;
    }
    .counter-huoqi>p>span{
        margin-left: 1.8rem;
        font-size: 0.14rem;
    }
</style>