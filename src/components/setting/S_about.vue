<template>
    <div class="bg_ic">
        <div class="about">
            <ul class="about_ul" @click="goone">
                <li>设置资料</li>
                <span class="bg_1"></span>
            </ul>
        </div>
        <div class="about">
            <ul class="about_ul" @click="go">
                <li>设置密码</li>
                <span class="bg_1"></span>
            </ul>
        </div>
        <div class="about">
               <ul class="about_ul" @click="goto">
                   <li >关于</li>
                   <span class="bg_1"></span>
               </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "S_about",
        methods:{
            goto(){
                this.$router.replace("./about")
            },
            go(){
                this.$router.replace("./change_pwd")
            },
            goone(){
                this.$router.replace("./newImg")
            }
        }
    }
</script>

<style scoped>
    .bg_ic{
        background-image: url("../../../public/assets/images/my/personal_centre_default_bg.png");
        display: block;
        width: 100%;
        height: 80vh;
        background-repeat: no-repeat;
    }
    .about{
        border-bottom: 1px solid #e7e7e7;
        padding-bottom: 0.2rem;
        box-sizing: border-box;

    }
    .about_ul{
    display: flex;
    justify-content: space-between;
        height: 0.5rem;
}
    .about_ul li{
        font-size: 0.16rem;
        display: block;
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        position: relative;
        top: 0.15rem;
    }
    .bg_1{
        display: inline-block;
        background-image: url("../../../public/assets/images/my/item_right_arrow.png");
        background-size: 100% 100%;
        width: 0.13rem;
        height: 0.15rem;
        margin-right: 0.2rem;
        margin-top: 0.1rem;
    }
</style>