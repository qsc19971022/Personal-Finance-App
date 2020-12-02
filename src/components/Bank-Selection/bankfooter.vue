<template>
  <div class="bankfooter" @click="todetail">
    <div class="footerleft">
       <p class="rate">{{data.all_return_rate}}</p>
      <p class="ratename">储蓄回报率</p>
    </div>
    <div class="footerright">
      <p class="bankrate">{{data.fund_name}}</p>
      <p class="ratename">按月付息 随存随取</p>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "bankfooter",
  props:["data","sid"],
  methods:{
  // todetail(){
    // let dat = this.data[sid].fund_name
    // this.$router.push({path:`/detail?name=${dat}`})
  // }
  }
};
</script>

<style >
.bankfooter {
    width: 100%;
    height: 0.8rem;
    justify-content: space-around;
    display: flex;
    font-size: 0rem;
    padding: 0.15rem 0rem;
    border-bottom:1px solid #80808017;
}
.footerright {
  width: 60%;
  padding-left: 0.2rem;
}
.footerleft {
     width: 40%;
    border-right: 1px solid #80808017;
    padding-left: 0.1rem;
}
.rate {
  font-size: 0.2rem;
  color: red;
}
.ratename {
  font-size: 0.1rem;
  color: gainsboro;
}
.bankrate {
  font-size: 0.16rem;
}
</style>