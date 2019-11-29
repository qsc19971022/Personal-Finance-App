<template>
    <div class="cashbookhead">
        <index-cashbook-header class="cashbook-col" :data="data"></index-cashbook-header>
        <div class="cashbook-div">
            <div class="cashbook-div1">
                <p class="cashbookp1" ref="cashbookp1">2019年</p>
                <div is-link @click="showPopup">
                    <span class="cashbookdate" ref="cashbookdate">11</span><span class="cashbook-spans">月</span>
                </div>
                <van-popup v-model="show" class="van-pop">
                    <p class="selectmonth">选择月份</p>
                    <div class="alertbutton">
                        <p><button @click="jia1">+</button><button @click="jia2">+</button></p>
                        <p><span class="selectmonths" ref="month">2019</span><span class="selectdays" ref="days">11</span></p>
                        <p><button @click="jian1">-</button><button @click="jian2">-</button></p>
                        <p class="alertbtm"><span class="quxiao" @click="quxiao">取消</span><span class="queding" @click="queding">确定</span></p>
                    </div>
                </van-popup>
                </div>
                <div>
                    <p class="cashbookp1">支出(元)</p>
                    <p class="cashbookp2">{{dat.mon_money_jia}}</p>
                </div>
                <div>
                    <p class="cashbookp1">收入(元)</p>
                    <p class="cashbookp2">{{dat.mon_money_pay}}</p>
                </div>
            </div>
        <p class="cashbbook-mx">明细</p>
        </div>
    </template>

    <script>
        import Vue from "vue"
        import { Popup } from 'vant';
        import setCashbook from '../../apis/setCashbook'
        Vue.use(Popup);
        import cashbhead from "../common/counter-head"
        export default{
            name:"cashbook-head",
            components:{
                "index-cashbook-header":cashbhead
            },
            data(){
                return{
                    show:false,
                    data:{
                        "con":"记账本"
                    }
                }
            },
            props:["dat"],
            methods:{
                showPopup(){
                    this.show = true;
                },
                jia1(){
                    this.$refs.month.innerHTML++;
                },
                jia2(){
                    if(this.$refs.days.innerHTML<=11){
                        this.$refs.days.innerHTML++;
                    }else{
                        this.$refs.days.innerHTML=1;
                    }
                },
                jian1(){
                    if(this.$refs.month.innerHTML>2013){
                    this.$refs.month.innerHTML--;
                    }else{
                        this.$refs.month.innerHTML=2013;
                    }
                },
                jian2(){
                    if(this.$refs.days.innerHTML>1){
                        this.$refs.days.innerHTML--;
                    }else{
                        this.$refs.days.innerHTML=12;
                    }
                },
                quxiao(){
                    this.show=false;
                },
                queding(){
                    this.show=false;
                    this.$refs.cashbookp1.innerHTML=this.$refs.month.innerHTML;
                    // let year = this.$refs.cashbookp1.innerHTML;
                    this.$refs.cashbookdate.innerHTML=this.$refs.days.innerHTML;
                    // let month = this.$refs.cashbookdate.innerHTML;
                    // let phone = localStorage.getItem("user");
                    // setCashbook.checkUserSet(year,month,phone,(datas)=>{
                    //     console.log(datas);
                    //     this.$bus.$emit("click1",datas)
                    // })
                    setCashbook.checkUserSet(datas=>{
                        console.log(datas);
                        this.$bus.$emit("click1",datas)
                    })
                },
                xxx(){
                    // let year = this.$refs.cashbookp1.innerHTML;
                    // let month = this.$refs.cashbookdate.innerHTML;
                    // let phone = localStorage.getItem("user");
                    // console.log(year,month,phone);
                    // setCashbook.checkUserSet(year,month,phone,(datas)=>{
                    //     console.log(datas);
                    //     this.$bus.$emit("click1",datas)
                    // });
                    setCashbook.checkUserSet(datas=>{
                        console.log(datas);
                        this.$bus.$emit("click1",datas)
                    })
                }
            },
            beforeMount() {
                this.xxx()
            }
        }

    </script>

    <style scoped>
        .selectmonth{
            width:3rem;
            color:darkcyan;
            padding:0.1rem 0 0.1rem 0.1rem;
            border-bottom: rgb(154,154,154) solid 0.001rem;
        }
        .cashbook-spans{
            color:white;
            display: block;
            width:0.3rem;
            font-size:0.14rem;
            position: absolute;
            left:0.8rem;
            top:1rem;
            background-image: url("../../../public/assets/images/product/zf.png");
            background-repeat: no-repeat;
            background-position: 0.1rem center;
        }
        .alertbutton>p{
            text-align: center;
        }
        .alertbutton>p>button{
            width:0.7rem;
            margin:0.05rem 0.1rem;
        }
        .alertbtm{
            margin:0.1rem 0 0 0;
            border-top: 0.005rem solid rgb(154,154,154);
        }
        .cashbookhead{
            position: fixed;
            top:0;
            left:0;
            right:0;
            z-index: 3;
            background-color: rgb(37,41,58);
        }
        .cashbook-col{
            background-color:  rgb(37,41,58);
            border-bottom: none;
        }
        .cashbook-div{
            font-size: 0.16rem;
            height:0.8rem;
            display: flex;
            margin-top: 0.5rem;
            justify-content: space-around;
        }
        .cashbookp1{
            color:rgb(135,136,138);
            font-size: 0.14rem;
            padding-top: 0.05rem;
            box-sizing: border-box;
        }
        .cashbookp2{
            color:white;
            font-size: 0.2rem;
            padding-top: 0.2rem;
            box-sizing: border-box;
        }
        .cashbookdate{
            display: block;
            font-size: 0.34rem;
            color:white;
            background-color:rgb(37,41,58);
            border:none;
            width:0.65rem;
            height:0.5rem;
            padding: 0 0.5rem 0 0.1rem;
            box-sizing: border-box;
            position: relative;
        }
        .cashbbook-mx{
            background-color: white;
            text-align: center;
            font-size: 0.22rem;
            color: black;
            padding: 0.1rem 0;
            font-weight: 600;
        }
        .selectmonths,.selectdays{
            display: inline-block;
            width:0.9rem;
        }
        .quxiao,.queding{
            display: inline-block;
            width:1.4rem;
            height: 0.5rem;
            line-height: 0.5rem;
        }
        .quxiao{
            border-right:0.005rem solid gray;
        }
    </style>


