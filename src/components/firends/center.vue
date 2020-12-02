<template>
    <div class="bg_img">
        <div class="strategy">
            <span class="str_icon"><img src="../../../public/assets/images/my/4.png" alt="logo"></span>
            <span class="str_right"><img src="../../../public/assets/images/my/3.png" alt="world"></span>
        </div>
        <div class="code">
                <span class="red_code"><a href="#" @click="copy" ref="local">http://money.woftsun.com/reg?id={{user}}</a><img src="../../../public/assets/images/my/salary_title_background.png" alt="logo"></span>
                <span class="cde"><a href="#" @click="showPopup">{{this.btnName}}</a><img src="../../../public/assets/images/my/querymore_dialog_btn.png" alt="logo"></span>
    </div>
        <h5>规则说明</h5>
        <div class="rolu">
            <span class="start"><img src="../../../public/assets/images/my/abc_btn_rating_star_off_mtrl_alpha.png" alt="star"></span>
            <p>邀请小伙伴下载并登录钱夕夕</p>
        </div>
        <div class="rolu">
            <span class="start"><img src="../../../public/assets/images/my/abc_btn_rating_star_off_mtrl_alpha.png" alt="star"></span>
            <p>被邀请者在App中使用邀请码</p>
        </div>
        <div class="rolu">
            <span class="start"><img src="../../../public/assets/images/my/abc_btn_rating_star_off_mtrl_alpha.png" alt="star"></span>
            <p>使用成功后，系统自动为双方发放5枚夕夕币</p>
        </div>
        <div class="rolu">
            <span class="start"><img src="../../../public/assets/images/my/abc_btn_rating_star_off_mtrl_alpha.png" alt="star"></span>
            <p>一个手机号只能绑定一次</p>
        </div>
        <div class="rolu">
            <span class="start"><img src="../../../public/assets/images/my/abc_btn_rating_star_off_mtrl_alpha.png" alt="star"></span>
            <p>每个月邀请上限为5个好友，次月清零可重新邀请</p>
        </div>
        <div class="rolu">
            <span class="start"><img src="../../../public/assets/images/my/abc_btn_rating_star_off_mtrl_alpha.png" alt="star"></span>
            <p>本活动最终解释权归钱夕夕所有</p>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "center",
        data(){
          return {
              user:"",
              btnName:"生成链接"
          }
        },
        methods:{
            showPopup() {
                Toast('请复制链接进行分享');
                this.$refs.local.style.display="block"
                this.btnName = "邀请好友"
            },
            copy(){
                Toast.success('复制成功');
            }
        },
        mounted() {
            let check=localStorage.getItem("user")
            this.user=check
        }
    }
</script>

<style scoped>
.bg_img{
    width: 100%;
    height: 100vh;
    background-image: url("../../../public/assets/images/my/background_menu_adv.png");
    background-size: 100% 100%;
}
    .bg_img h5{
        color: rgb(255,239,203);
        display: block;
        font-size: 0.16rem;
    }
    .str_icon{
        display: block;
    }
.str_icon img{
    margin: 0 auto;
    width: 2.16rem;
    height: 0.3rem;
}
.code{
    position: relative;
}
.cde a{
    display: block;
    font-size: 0.16rem;
    position: absolute;
    left: 1.56rem;
    top: 0.72rem;

}
.cde img{
    display: block;
    margin: 0 auto;
    width: 2.16rem;
    height: 0.45rem;
}
.red_code a{
   font-size: 0.16rem;
    position: absolute;
    left: 0.8rem;
    top: 0.04rem;
    display: none;

}
.red_code img{
    margin: 0 auto;
    width: 3.4rem;
    height: 0.6rem;
}
.str_right img{
    margin: 0 auto;
    width: 3.58rem;
    height: 1.8rem;
}
    .rolu{
        padding-top: 0.1rem;
        display: flex;
        justify-content: flex-start;
    }
    .start{
        width: 0.2rem;
        height: 0.2rem;
        display: block;

    }
    .start img{
        width: 0.2rem;
        height: 0.2rem;
    }
    .rolu p{
        display: block;
        font-size: 0.16rem;
        color: white;
    }
.IN_firend{
  display: block;
    font-size: 0.6rem;
}
</style>