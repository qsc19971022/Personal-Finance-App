<template>
  <div class="conbank">
    <ul class="banklist">
      <li class="bankli">
        <img src="../../../public/assets/images/bank-seletion/1.png" class="bankimg" />
        <p class="bankname">振兴银行</p>
      </li>
      <li class="bankli">
        <img src="../../../public/assets/images/bank-seletion/2.png" class="bankimg" />
        <p class="bankname">新安银行</p>
      </li>
      <li class="bankli">
        <img src="../../../public/assets/images/bank-seletion/3.png" class="bankimg" />
        <p class="bankname">平顶山银行</p>
      </li>
      <li class="bankli">
        <img src="../../../public/assets/images/bank-seletion/4.png" class="bankimg" />
        <p class="bankname">西安银行</p>
      </li>
      <li class="bankli">
        <img src="../../../public/assets/images/bank-seletion/5.png" class="bankimg" />
        <p class="bankname">兰州银行</p>
      </li>
    </ul>
    <div class="bankblock"></div>
  </div>
</template>

<script scoped>
export default {
  name: "banklist"
};
</script>

<style >
.conbank {
  width: 100%;
}
.banklist {
  width: 100%;
  height: 0.5rem;
  font-size: 0rem;
  padding: 0.1rem 0rem;
}
.bankli {
  padding-left: 0.22rem;
  display: inline-block;
}
.bankname {
  font-size: 0.1rem;
}
.bankimg {
  width: 0.35rem;
  height: 0.3rem;
  padding-left: 0.1rem;
}
.bankblock {
  width: 100%;
  height: 0.08rem;
  background-color: gainsboro;
  margin-top: 0.1rem;
}
</style>