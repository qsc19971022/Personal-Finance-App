<template>
  <div>
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
    <div class="bankadd">
      <p>-保障服务-</p>
      <ul>
        <li class="addlist">
          <img src="../../../public/assets/images/add/4.jpg" class="addimg" />
        </li>
        <li class="addlist">
          <img src="../../../public/assets/images/add/5.jpg" class="addimg" />
        </li>
        <li class="addlist">
          <img src="../../../public/assets/images/add/7.jpg" class="addimg" />
        </li>
      </ul>
      <div class="bankblock"></div>
      <div class="addtext">
        <span>灵活存取</span>
        <span class="text2">查看更多</span>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "banklist"
};
</script>

<style >
.text2 {
  color: gray;
}
.addtext {
  width: 100%;
  height: 0.4rem;
  padding: 0.1rem 0.1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 0.15rem;
  border-bottom: 1px solid rgb(245, 245, 245);
}
.addimg {
  width: 1.1rem;
  height: 1rem;
  margin: 0.1rem 0.05rem;
}
.addlist {
  display: inline-block;
}
.bankadd {
  width: 100%;
  /* height: 1rem; */
  font-size: 0rem;
  font-size: 0.15rem;
  text-align: center;
  padding-top: 0.1rem;
}
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
  background-color: rgb(245, 245, 245);
  margin-top: 0.1rem;
}
</style>