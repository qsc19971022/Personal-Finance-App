<template>
  <div>
    <div class="setheader">
      <img src="../../public/assets/images/bank-seletion/9.png" class="get-img" @click="tobank" />
      <span class="getname">充值</span>
    </div>
    <div class="moneynum">
      <p class="_numberset">充值金额</p>
      <span class="_fu">￥</span>
      <input type="number" id="_moneytext" v-model="money" />
    </div>
    <div class="chosebank">
      <p class="chosecard">请选择银行卡</p>
      <div class="bankcon" @click="tocards">
        <span class="_cardname">中国农业银行（8989）</span>
        <img class="_imgright" src="../../public/assets/images/getmoney/2.png" />
      </div>
    </div>
    <div class="setblock"></div>
    <div class="setsta">
      <p class="statext">充值到</p>
      <div class="setlist">
        <input type="radio" class="setradio" name="yue" />
        <span class="righttext">
          <p class="stalist1">余额</p>
          <p class="stalist2">无收益，提现需支付服务费</p>
        </span>
      </div>
    </div>
    <button class="moneybtn">充值</button>
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
          flag: "充值",
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
.bankcon {
  width: 100%;
  height: 0.3rem;
  padding-top: 0.05rem;

  border: 1px solid gainsboro;
}
._imgright {
  width: 0.2rem;
  height: 0.2rem;
  float: right;
}
._cardname {
  font-size: 0.15rem;
}
.chosebank {
  width: 100%;
  height: 0.6rem;
  font-size: 0rem;
}
.chosecard {
  font-size: 0.15rem;
}
.righttext {
  padding: 0.1rem 0rem 0rem 0.8rem;
}
.setradio {
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
}
.setlist {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: relative;
}
.stalist1 {
  font-size: 0.15rem;
}
.stalist2 {
  font-size: 0.14rem;
  color: gray;
}
.setsta {
  width: 100%;
  height: 1.2rem;
  background-color: white;
  font-size: 0rem;
}
.statext {
  font-size: 0.15rem;
  padding: 0.1rem 0rem 0rem 0.1rem;
}
.setheader {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  font-size: 0rem;
  padding-top: 0.1rem;
  border-bottom: 1px solid gainsboro;
}
.get-img {
  width: 0.2rem;
  height: 0.2rem;
}
.getname {
  font-size: 0.16rem;
  padding-left: 0.1rem;
}
.setblock {
  width: 100%;
  height: 0.1rem;
  background-color: rgb(245, 245, 245);
  /* margin-top: 0.1rem; */
}

.moneynum {
  width: 100%;
  height: 1rem;
  font-size: 0rem;
  border-bottom: 1px solid gainsboro;
}
._numberset {
  font-size: 0.15rem;
  padding: 0.13rem;
}
._fu {
  font-size: 0.25rem;
  padding-left: 0.1rem;
}
#_moneytext {
  width: 3.3rem;
  height: 0.25rem;
  font-size: 0.2rem;
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
