<template>
  <div>
    <div class="getheader">
      <img src="../../public/assets/images/bank-seletion/9.png" class="get-img" @click="tobank" />
      <span class="getname">提现</span>
      <img src="../../public/assets/images/getmoney/1.png" class="getright" />
    </div>
    <div class="getblock"></div>
    <div class="bankcard" @click="tocards">
      <img src="../../public/assets/images/getmoney/1.png" class="cardimg" />
      <span class="cardname">
        <p>中国农业银行</p>
        <p class="cardnum">尾号9878 储蓄卡</p>
      </span>
      <img class="imgright" src="../../public/assets/images/getmoney/2.png" />
    </div>
    <div class="getblock"></div>
    <div class="moneynum">
      <p class="_number">提现金额</p>
      <span class="_fu">￥</span>
      <input type="text" name id="moneytext" v-model="money" />
      <p class="othermoney">可用余额0.00元</p>
    </div>
    <button class="moneybtn">预计两小时内到账，确认提现</button>
  </div>
</template>

<script>
export default {
  name: "getmoney",
  data() {
    return {
      money: ""
    };
  },
  methods: {
    tocards() {
      fetch("http://49.234.85.212:80/", {
        method: "POST",
        headers: {
          "Content-type": "application:/json:charset=UTF-8"
        },
        body: JSON.stringify({
          flag: "提现",
          phone_num: localStorage.getItem("user"),
          money: this.money,
          card_id: ""
        })
      }).then(res =>
        res.json().then(cb => {
          window.console.log(cb);
        })
      );
      this.$router.push({ path: "/bankcards" });
    },
    tobank() {
      this.$router.push({ path: "/my" });
    }
  }
};
</script>


<style>
.getheader {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  font-size: 0rem;
  padding-top: 0.1rem;
}
.get-img {
  width: 0.2rem;
  height: 0.2rem;
}
.getname {
  font-size: 0.16rem;
  padding-left: 0.1rem;
}
.getright {
  margin: 0rem 0.15rem 0rem 2.65rem;
  width: 0.3rem;
  height: 0.3rem;
}
.getblock {
  width: 100%;
  height: 0.1rem;
  background-color: rgb(245, 245, 245);
  /* margin-top: 0.1rem; */
}
.bankcard {
  width: 100%;
  height: 0.5rem;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: space-around; */
  font-size: 0rem;
  padding-top: 0.05rem;
}
.cardimg {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0rem 0.15rem;
}
.cardname {
  width: 40%;
  font-size: 0.16rem;
}
.imgright {
  width: 0.15rem;
  height: 0.15rem;
  margin: 0.15rem 0rem 0rem 1.4rem;
}
.cardnum {
  color: gray;
  font-size: 0.13rem;
}
.moneynum {
  width: 100%;
  height: 0.3rem;
  font-size: 0rem;
}
._number {
  font-size: 0.12rem;
  padding: 0.13rem;
}
.othermoney {
  font-size: 0.12rem;
  padding: 0.1rem 0.13rem;
}
._fu {
  font-size: 0.25rem;
  padding-left: 0.1rem;
}
#moneytext {
  width: 3.3rem;
  height: 0.25rem;
  border-bottom: 1px solid gainsboro;
}
.moneybtn {
  width: 96%;
  height: 0.4rem;
  background-color: rgb(17, 142, 234);
  font-size: 0.15rem;
  text-align: center;
  border: none;
  margin-left: 0.07rem;
}
</style>
