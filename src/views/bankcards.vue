<template>
  <div>
    <div class="cardslist">
      <p class="cardsname" @click="tobank">中国农业银行(3534)</p>
    </div>
    <div class="cardslist2">
      <p class="cardsname2" @click="tobank">中国工商银行(4532)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "bankcard",
  methods: {
    tobank() {
      location.href = "javascript:history.back()"
    }
  }
};
</script>


<style>
.cardslist {
  width: 97%;
  height: 1rem;
  font-size: 0rem;
  background-image: url("http://47.94.162.197/images/add/12.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0.1rem 0rem 0.1rem 0.05rem;
}
.cardsname {
  width: 100%;
  padding: 0.25rem 0rem 0rem 0.3rem;
  font-size: 0.2rem;
  color: goldenrod;
}
.cardslist2 {
  width: 97%;
  height: 1.2rem;
  font-size: 0rem;
  background-image: url("http://47.94.162.197/images/add/11.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0.1rem 0rem 0.1rem 0.05rem;
}
.cardsname2 {
  width: 100%;
  padding: 0.25rem 0rem 0rem 0.3rem;
  font-size: 0.2rem;
  color: goldenrod;
}
</style>
