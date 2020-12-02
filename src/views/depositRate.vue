<template>
    <div>
        <index-counter-head v-if="data" :data="data"></index-counter-head>
        <div class="counter-tables">
            <table>
                <tr>
                    <th>存款种类</th>
                    <th>存期</th>
                    <th>年利率(%)</th>
                </tr>
                <tr>
                    <td>活期存款</td>
                    <td></td>
                    <td>0.3</td>
                </tr>
                <tr>
                    <td>零存整取</td>
                    <td>一年</td>
                    <td>1.35</td>
                </tr>
                <tr>
                    <td>存本取息</td>
                    <td>五年</td>
                    <td>1.55</td>
                </tr>
                <tr rowspan="2">
                    <td>定活两便</td>
                    <td></td>
                    <td>按一年以内定期整存整取同档次利率打六折</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import counterHead from "../components/common/counter-head"
    export default{
        name:"depositRate",
        components:{
            "index-counter-head":counterHead
        },
        data(){
            return{
                data:{
                    "con":"存贷利率"
                }
            }
        }
    }

</script>

<style scoped>
    .counter-tables{
        font-size: 0.14rem;
        margin-top:0.02rem;
    }
    .counter-tables td,.counter-tables th{
        width:1.25rem;
        text-align: center;
        height:0.4rem;
    }
    .counter-tables tr:nth-of-type(1){
        background-color: gray;
    }
    .counter-tables>table{
        border-collapse: collapse;
    }
    .counter-tables tr{
        border-bottom: 0.005rem solid gray;
    }
</style>