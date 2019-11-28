<template>
    <div class="bind-con">
        <a href="#/BindingCard" class="bind-option" v-for="(val,index) in con" :key="index">
            <img :src="val.logo">
            <div class="bind-option-con">
                <p>{{val.back_name}}</p>{{val.back_type}}
            </div>
            <p>{{val.card_id}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "bind-con",
        data(){
            return{
                con:[
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                    "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"},
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                        "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"},
                    {"logo":"http://39.107.245.176/images/info/Screenshot_20191121_092214_com_03.png",
                        "back_name":"建设银行","back_type":"储蓄卡","card_id":"1234567890123456"}
                    ]
            }
        }
    }
</script>

<style scoped>
.bind-con{
    width: 100%;
    background-image:url("../../../public/assets/images/info/Screenshot_20191121_092208_com_12.png") ;
    background-size: 100%;
    padding-top: 1.6rem;
    margin-top: 0.5rem;
    background-repeat: no-repeat;
}
    .bind-option{
        width: 86%;
        height: 1rem;
        color: gray;
        flex-wrap:wrap;
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0.15rem;
        line-height: 0.25rem;
        box-shadow: 0 0.1rem 0.2rem gainsboro;
        font-size: 0.15rem;
        background-color: white;
        border-radius: 0.05rem;
        margin: 0 auto 0.3rem ;
    }
.bind-option-con{
    width: 2rem;
}
    .bind-option-con>p{
        font-size: 0.15rem;
        font-weight: 600;
        color:rgb(96,115,130);
    }
.bind-option>img:nth-child(1){
    height:0.4rem;
    border-radius: 50%;
    border: 0.01rem solid gainsboro;
}
.bind-option>p:nth-child(3){
    height: 0.2rem;
    margin-top: 0.15rem;
}
</style>
