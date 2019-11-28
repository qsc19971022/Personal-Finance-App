<template>
    <div class="account-head">
        <a href="#/"><img src="../../../public/assets/images/info/Screenshot_20191121_090552_com.xzck_03.png"></a>
        <a href="#/"><img src="../../../public/assets/images/info/Screenshot_20191121_090552_com.xzck_05.png">
            <img src="../../../public/assets/images/info/Screenshot_20191121_090552_com.xzck_07.png">
        </a>
    </div>
</template>

<script>
    export default {
        name: "account-head"
    }
</script>

<style scoped>
.account-head {
    width: 100%;
    z-index: 3;
    position: fixed;
    top: 0;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0.13rem;
    background-size:100%;
    background-color: rgb(222,74,37);
    border-bottom: 0.001rem solid rgb(222,73,37);
    background-image: url("../../../public/assets/images/info/Screenshot_20191121_090552_com.xzck_04.png");
}
.account-head>a{
    display: flex;
    width: 0.6rem;
    justify-content: space-between;
}
.account-head img{
    width:0.25rem;
    height: 0.25rem;
}
</style>
