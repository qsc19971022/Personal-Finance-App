<template>
    <div class="search">
        <div class="search-header">
            <input type="search" id="search-header-search" placeholder="请输入关键字">
            <a href="javascript:history.go(-1)" class="search-header-exit">取消</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
    .search{
        width: 100%;
        height: 100%;
        background-color: rgb(245,247,249);
    }
    .search-header{
        width: 100%;
        height: 0.4rem;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #search-header-search{
        width: 76%;
        height: 0.3rem;
        line-height: 0.3rem;
        background-color: rgb(244,244,244);
        border: none;
        border-radius: 0.46rem;
        box-sizing: border-box;
        padding-left: 0.4rem;
        background-image: url("../../public/assets/images/index/search1.png");
        background-repeat: no-repeat;
        background-position: 0.1rem center;
        background-size: 0.20rem 0.20rem;
    }
    .search-header-exit{
        display: block;
        color:  black;
        font-size: 0.15rem;
        margin-left: 0.14rem;
    }
</style>