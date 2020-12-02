<template>
  <div>
    <div class="bheader7">
      <img
        src="../../../public/assets/images/bank-seletion/9.png"
        class="header-img"
        @click="tobank"
      />
      <span class="title">专项活动</span>
      <img src="../../../public/assets/images/bank-seletion/11.png"
        class="header-img leftimg1"
        @click="tokefu"/>
      <img src="../../../public/assets/images/bank-seletion/10.png" class="header-img leftimg2" />
    </div>
    <div class="bheader6">
      <ul>
        <li class="listbheader">
          <img src="../../../public/assets/images/add/1.png" class="listImg" />
          <p>签到领钢镚</p>
          <span>瓜分百万钢镚</span>
        </li>
        <li class="listbheader">
          <img src="../../../public/assets/images/add/2.png" class="listImg" />
          <p>种摇钱树</p>
          <span>点点就赚钱</span>
        </li>
        <li class="listbheader">
          <img src="../../../public/assets/images/add/3.png" class="listImg" />
          <p>养猪猪</p>
          <span>养猪赚猪肉</span>
        </li>
      </ul>
    </div>
    <div class="bheader5">
      <button class="header5btn one5">为你赚钱</button>
      <button class="header5btn">快捷借钱</button>
      <button class="header5btn">帮你省钱</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "viptop",
  methods: {
    tobank() {
      this.$router.push({ path: "/index" });
    },
    tokefu() {
      this.$router.push({ path: "/robot" });
    }
  }
};
</script>

<style>
.bheader5{
  width: 100%;
  height: 0.6rem;
  font-size: 0rem;
}
.header5btn{
      width: 1rem;
    height: 0.35rem;
    font-size: 0.15rem;
    color: black;
    background-color: #d6cfcf29;
    margin: 0.1rem 0.1rem;
    border: none;
}
.one5{
  background-color: orange;
}
.listImg{
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;

}
.listbheader{
    display: inline-block;
    font-size: 0.15rem;
    padding: 0rem 0.2rem;
}
.bheader6{
  width: 100%;
  height: 0.8rem;
  font-size: 0rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.bheader7 {
  width: 100%;
  height: 0.5rem;
  /* background-color: rgb(129, 1, 1); */
  display: flex;
  flex-wrap: nowrap;
  font-size: 0rem;
  padding-top: 0.15rem;
  border-bottom:1px solid gainsboro; 
}
.header-img {
  width: 0.2rem;
  height: 0.2rem;
}
.title {
  font-size: 0.16rem;
}
.leftimg1 {
  margin: 0rem 0.15rem 0rem 2rem;
}
</style>