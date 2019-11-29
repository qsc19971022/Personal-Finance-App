<template>
  <div class="cardslist">
    <p class="cardsname" @click="tobank">中国农业银行(3534)</p>
    <p class="cardsname" @click="tobank">中国邮政银行(7864)</p>
  </div>
</template>

<script>
export default {
  name: "bankcard",
  methods: {
    tobank() {
      this.$router.push({ path: "/setmoney" });
    }
  }
};
</script>


<style>
.cardslist {
  width: 100%;
  /* height: 0.5rem; */
  font-size: 0rem;
}
.cardsname {
  width: 100%;
  height: 0.3rem;
  padding-left: 0.1rem;
  border: 1px solid gainsboro;
  font-size: 0.2rem;
}
</style>
