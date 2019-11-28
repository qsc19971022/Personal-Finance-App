<template>
  <div>
    <header>
      <div class="top">
        <span class="top_icon"></span>
        <p class="address">西安</p>
        <span class="icon_1"></span>
        <span class="icon_2"></span>
      </div>
    </header>
  </div>
</template>

<script>
    export default {
        name: "vheader"
    }
</script>

<style scoped>
header{
  font-size: 0.06rem;
}
  .top{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .top_icon{
    display: inline-block;
    width: 0.18rem;
    height: 0.19rem;
    background:url("../../../public/assets/images/selector_location_icon_black.png");
    background-size: 100% 100%;
    position: absolute;
    left: 0.2rem;
    top: 0.15rem;
  }
  .address{
    position: absolute;
    left: 0.45rem;
    top: 0.15rem;
    font-size: 0.15rem;
  }
  .icon_1{
    display: block;
    width: 0.30rem;
    height: 0.28rem;
    background: url("../../../public/assets/images/mine_oldage_message.png");
    background-size: 100% 100%;
    position: absolute;
    left: 2.9rem;
    top: 0.08rem;
  }
  .icon_2{
    display: block;
    width: 0.30rem;
    height: 0.28rem;
    background-size: 100% 100%;
    background-image:url("../../../public/assets/images/mine_oldage_more.png");
    position: absolute;
    left: 3.3rem;
    top: 0.08rem;
    background-position: 2px,10px;
  }

</style>