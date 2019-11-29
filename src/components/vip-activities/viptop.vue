<template>
  <div class="bheader">
    <img src="../../../public/assets/images/bank-seletion/9.png" class="header-img" @click="tobank"/>
    <span class="title">专项活动</span>
    <img src="../../../public/assets/images/bank-seletion/11.png" class="header-img leftimg1" @click="tokefu"/>
    <img src="../../../public/assets/images/bank-seletion/10.png" class="header-img leftimg2" />
  </div>
</template>

<script>
export default {
  name: "viptop",
 methods:{
   tobank(){
     this.$router.push({path:'/index'})
   },
   tokefu(){
     this.$router.push({path:'/robot'})
     
   }
 }
};
</script>

<style>
.bheader {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  font-size: 0rem;
  padding-top: 0.1rem;
}
.header-img{
  width: 0.2rem;
  height: 0.2rem;
}
.title{
  font-size: 0.16rem;
}
.leftimg1{
 margin: 0rem 0.15rem 0rem 2rem;
}
</style>