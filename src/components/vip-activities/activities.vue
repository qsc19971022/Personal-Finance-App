<template>
  <div class="acticities-list" @click="Receive">
    <a>
      <img :src="data1[pid]" alt class="a-img" />
    </a>
    <p class="tickte-name">{{data.vip_name}}</p>
    <button class="getbtn" ref="qu">马上领取</button>
    <span class="othernum">
      ￥
      <span class="tag">{{data.worth}}</span>
    </span>
    <div v-bind:class="{men:flag}"></div>
  </div>
</template>

<script>
import vip from "../../apis/vipApi";
export default {
  name: "activities",
  props: ["pid", "data1", "data"],
  data() {
    return {
      flag: false
    };
  },
  methods: {
    Receive() {
      if (this.flag == false) {
        alert("领取成功");
        this.$refs.qu.innerHTML = "已领取";
        this.flag = true;
        let user = localStorage.getItem("user");
        vip.vip(user, this.data.vip_name, this.data.worth, data => {
          window.console.log(data);
        });
      } else {
        alert("只能领取一次");
      }
    }
  }
};
</script>


<style>
.men {
  width: 95%;
  height: 1.2rem;
  background-color: grey;
  opacity: 0.75;
  position: absolute;
  top: 0rem;
  left: 0.1rem;
}
.tag {
  font-size: 0.4rem;
  font-family: -webkit-pictograph;
}
.acticities-list {
  width: 100%;
  height: 1.3rem;
  background-color: white;
  padding: 0rem 0.1rem 0.15rem;
  position: relative;
}
.a-img {
  width: 100%;
  height: 100%;
  border-radius: 0.5px;
}
.tickte-name {
  width: 50%;
  color: #b5073e;
  font-size: 0.2rem;
  position: absolute;
  top: 1em;
  left: 0.4rem;
}

.getbtn {
  width: 0.8rem;
  height: 0.3rem;
  background-color: #e62615;
  border-radius: 0.15rem;
  position: absolute;
  top: 0.7rem;
  left: 2.5rem;
  border: none;
}
.othernum {
  font-size: 0.24rem;
  position: absolute;
  top: 0.55rem;
  left: 0.4rem;
  color: #bf370c;
}
</style>
