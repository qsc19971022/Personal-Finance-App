<template>
  <p class="forpas" @click="goLogin">已有账号点此登录</p>
</template>

<script>
export default {
    name:"register-footer",
    methods:{
      goLogin(){
        this.$router.push("/login")
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