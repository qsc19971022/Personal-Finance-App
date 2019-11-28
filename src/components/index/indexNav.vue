<template>
    <div class="index-nav-list">
        <nav-item  :data="n" :nid="i" :key="i" v-for="(n,i) in data"></nav-item>
    </div>
</template>

<script>
    import navItem from "./navItem";
    export default {
        name: "indexNav",
        props:["data"],
        components:{
            'nav-item':navItem
        }
    }
</script>

<style scoped>
.index-nav-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>