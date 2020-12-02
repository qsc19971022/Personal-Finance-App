<!--
 * @Author: your name
 * @Date: 2019-11-21 14:03:30
 * @LastEditTime: 2020-02-26 10:27:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/components/info/info-doc.vue
 -->
<template>
    <div class="info-docs" v-if="data">
        <div :class="{active:number==index}" @click="show(index)" v-for="(val,index) in  data" :key="index">{{val.val}}</div>
    </div>
</template>

<script>
    export default {
        name: "info-doc",
        props:["data"],
        data(){
          return{
              number:0
          }
        },
        methods:{
            show(index){
                this.number=index;
                this.$eventBus.$emit("cone",index)
            }
        }
    }
</script>

<style scoped>
.info-docs{
    background-color: white;
    width: 100%;
    height: 0.5rem;
    border-bottom: 0.01rem solid gainsboro;
    line-height: 0.5rem;
    margin-top: 0.15rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.16rem;
    color: black;
}
.info-docs>div{
    width: 30%;
    text-align: center;
}
.info-docs>.active{
    color: rgb(240,98,53);
    font-weight: 600;
    border-bottom: 0.015rem solid rgb(240,98,53);
}
</style>
