<template>
  <div>
    <top-bank></top-bank>
    <list-bank></list-bank>
    <footer-bank :key="sid" :data="item" :sid="sid" v-for="(item,sid) 
	in bankseletionInfo.rateinformation"></footer-bank>
  </div>
</template>

<script>
import banktop from "../components/Bank-Selection/banktop";
import banklist from "../components/Bank-Selection/banklist";
import bankfooter from "../components/Bank-Selection/bankfooter";
import bankseletionApi from "../apis/bankseletionApi";
export default {
  name: "bankselection",
  components: {
    "list-bank": banklist,
    "top-bank": banktop,
    "footer-bank": bankfooter
  },
  data() {
    return {
      bankseletionInfo: [],
    };
  },
   methods: {
    _initPageData() {
      bankseletionApi.getbankseletionInfo(data => {
        window.console.log(data);
        this.bankseletionInfo = data;
      });
    }
  },
  created() {
    this._initPageData();
  }
}
</script>

<style>
</style>