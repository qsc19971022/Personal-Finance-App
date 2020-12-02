<template>
  <div>
     <top-vip></top-vip>
    <activities-list
      :key="pid"
      :data="name"
      :pid="pid"
      v-for="(name,pid) 
	in vipInfo.data"
      :data1="pic"
    ></activities-list>
  </div>
</template>

<script>
import viptop from "../components/vip-activities/viptop.vue";

import activities from "../components/vip-activities/activities.vue";
import vipApi from "../apis/vipApi";

export default {
  name: "vip-activities",
  components: {
    "activities-list": activities,
    "top-vip": viptop,
  },
  data() {
    return {
      vipInfo: [],
      // pic: [
      //   "http://47.94.162.197/images/vip-activities/1.jpg",
      //   "http://47.94.162.197/images/vip-activities/9.png",
      //   "http://47.94.162.197/images/vip-activities/8.png",
      //   "http://47.94.162.197/images/vip-activities/7.png",
      //   "http://47.94.162.197/images/vip-activities/4.jpg",
      //   "http://47.94.162.197/images/vip-activities/6.png",
      //   "http://47.94.162.197/images/vip-activities/5.png",
      //   "http://47.94.162.197/images/vip-activities/2.jpg",
      //   "http://47.94.162.197/images/vip-activities/9.png",
      //   "http://47.94.162.197/images/vip-activities/8.png",
      // ]
       pic: [
        "http://47.94.162.197/images/add/12.png",
        "http://47.94.162.197/images/add/10.png",
        "http://47.94.162.197/images/add/11.png",
        "http://47.94.162.197/images/add/8.png",
        "http://47.94.162.197/images/add/9.png",
      ]
    };
  },
  methods: {
    _initPageData() {
      vipApi.getvipInfo(data => {
        window.console.log(data);
        this.vipInfo = data;
      });
    }
  },
  created() {
    this._initPageData();
  }
};
</script>

<style>
</style>
