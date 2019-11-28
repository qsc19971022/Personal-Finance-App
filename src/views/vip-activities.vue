<template>
  <div>
    <activities-list
      :key="pid"
      :data="name"
      :pid="pid"
      v-for="(name,pid) 
	in vipInfo.ticket"
      :data1="pic"
    ></activities-list>
  </div>
</template>

<script>
import activities from "../components/vip-activities/activities.vue";
import vipApi from "../apis/vipApi";

export default {
  name: "vip-activities",
  components: {
    "activities-list": activities
  },
  data() {
    return {
      vipInfo: [],
      pic: [
        "http://47.94.162.197/images/vip-activities/1.jpg",
        "http://47.94.162.197/images/vip-activities/3.jpg",
        "http://47.94.162.197/images/vip-activities/2.jpg",
        "http://47.94.162.197/images/vip-activities/4.jpg",
        "http://47.94.162.197/images/vip-activities/3.jpg",
        "http://47.94.162.197/images/vip-activities/1.png"
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
