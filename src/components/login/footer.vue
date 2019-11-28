<template>
  <p class="forpas" @click="goReg">忘记密码 | 立即注册</p>
</template>

<script>
export default {
    name:"login-footer",
    methods:{
      goReg(){
        this.$router.push("/reg")
      }
    }
}
</script>

<style scoped>
.forpas{
    font-size: 0.14rem;
    text-align: center;
    margin-top: 1rem;
    color: gray;
}
</style>