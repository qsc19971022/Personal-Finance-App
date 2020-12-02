<template>
    <div>
        <div class="bg_img2" v-if="flag">
        <div class="img" >
            <img src="../../../public/assets/images/my/logo2.png" alt="logo">
        </div>
        <div class="login" @click="go">
            <img src="../../../public/assets/images/my/login_btn.png" alt="login">
        </div>
        <span class="world">点此查看您的资产情况</span>
        </div>


        <div class="bg_img" v-else>
        <div class="img_2" v-if="data1">
<!--            <img v-if="data1.user_portrait==''" src="../../../public/assets/images/my/logo2.png" @click="gologo">-->
<!--            <img  v-else :src="data1.user_portrait" @click="gologo">-->
            <img  v-if="data1.user_portrait" :src="data1.user_portrait" alt="logo1" @click="gologo">
            <img v-else :src="data.img" alt="logo2" @click="gologo">
                <span class="num">{{user}}</span>
                <span class="small_left"><img src="../../../public/assets/images/my/item_right_arrow.png" alt="logo"></span>
                <span class="certification" @click="goto">专属客服</span>
                <span class="left-small"></span>
        </div>
            <div class="assets">
                <p class="money">我的资产(元)</p>
                <span :class="{eays1:flag1}"  class="eays" @click="showmoney"></span>
                <span class="xing" v-if="flag1" >{{data.money}}</span>
                <span class="xing" v-else>******</span>
                <span class="jan"></span>
                <p class="world_2">上述金融资产情况均为您昨日持有数据</p>
            </div>
        </div>
        <div class="list-all">
        <ul class="list_ul">
            <li class="list_li">
                <span class="bg_1"></span>
                <a href="#/robot">我的客服</a>
                <span class="bg_2"></span>
            </li>
            <li class="list_li_2">
                <span class="bg_3"></span>
                <a href="#/setting">设置</a>
                <span class="bg_4"></span>
            </li>
            <li class="list_li_4">
                <span class="bg_7"></span>
                <a href="#/Invite_friends">好友推荐</a>
                <span class="bg_9"></span>
            </li>
            <li class="list_li_5">
                <span class="bg_8"></span>
                <a href="#/invest">评价与反馈</a>
                <span class="bg_10"></span>
            </li>
            <li class="list_li_3" v-if="user">
                <span class="bg_5"></span>
                <a href="#" @click.prevent="exit">退出</a>
                <span class="bg_6"></span>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "middle",
        data(){
            return {
                flag:true,
                user:"",
                money:"0.00",
                flag1:false,
            }
        },
        props:["data","data1"],
        methods:{
            checklocstorange(){
                if (localStorage.getItem("user")){
                    this.flag=false
                }else{
                    this.flag=true
                }
            },
            goto(){
              this.$router.replace("./robot")
            },
            gologo(){
              this.$router.push("/newImg")
            },
            exit(){
                // localStorage.removeItem("user");
                //  location.reload();
                let s=localStorage.getItem("user");
                let token=localStorage.getItem("token");
                fetch("http://49.234.85.212:8080/user/exit/",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        phone:s,
                        token:token
                    })
                }).then(res =>{
                    res.json().then(data=>{
                        console.log(data);
                        if (data.status==0){
                            localStorage.removeItem("user");
                            localStorage.removeItem("token");
                            location.reload();
                        }else if (data.status==1){
                            alert("退出失败")
                        }
                    })
                })
            },
            showmoney(){
                if (this.flag1==false){
                    this.flag1=true
                    // this.className="eays1"
                }else if (this.flag1==true){
                    this.flag1=false;
                    // this.className="eays"
                }
            },
            show(){
                let str2 = this.user.substr(0,3)+"****"+this.user.substr(7);
                this.user = str2;
                console.log(str2)
            },
            go(){
                this.$router.replace("./login")
            }
        },
        created() {
            this.checklocstorange()
        },
        mounted() {
            this.user =localStorage.getItem("user");
            if (this.user!=null){
                    this.show()
            }
            console.log(this.data1.user_portrait);
        },


    }
</script>

<style scoped>
    .bg_10{
        display: inline-block;
        background-image: url("../../../public/assets/images/my/item_right_arrow.png");
        background-size: 100% 100%;
        width: 0.13rem;
        height: 0.15rem;
        position: absolute;
        left: 3.2rem;
        top: 4.5rem;
    }
    .bg_9{
        display: inline-block;
        background-image: url("../../../public/assets/images/my/item_right_arrow.png");
        background-size: 100% 100%;
        width: 0.13rem;
        height: 0.15rem;
        position: absolute;
        left: 3.2rem;
        top: 4rem;
    }
    .bg_8{
        display: inline-block;
        background-image: url("../../../public/assets/images/my/z298207be7e1d4a75b7d1b38370fa0284.png");
        background-size: 100% 100%;
        width: 0.28rem;
        height: 0.26rem;
        position: absolute;
        left: 0.2rem;
        top: 4.5rem;
    }
    .bg_7{
        display: inline-block;
        background-image: url("../../../public/assets/images/my/zab0be83e3b6d705799696374f5b4a69f.png");
        background-size: 100% 100%;
        width: 0.28rem;
        height: 0.26rem;
        position: absolute;
        left: 0.2rem;
        top: 4rem;
    }
.img{
    width: 0.8rem;
    height: 0.8rem;
    position: absolute;
    left: 1.5rem;
    top: 0.8rem;

}
.bg_img{
    display: block;
    background-image: url("../../../public/assets/images/my/querysellect_head_bg.png");
    background-size: 100% 100%;
    /*width: 3.8rem;*/
    height: 100vh;
}
.assets{
    width: 3.48rem;
    height: 1.2rem;
    box-shadow: 0px 0px 5px -3px black;
    position: absolute;
    left: 0.14rem;
    top: 1.44rem;
    border-radius: 0.1rem;
}
.money{
    font-size: 0.16rem;
    /*position: absolute;*/
    /*left: 0.3rem;*/
    /*top: 1.6rem;*/
}
.xing{
    font-size: 0.16rem;
    position: absolute;
    left: 0.05rem;
    top: 0.4rem;
}
.world_2{
    font-size: 0.12rem;
    display: block;
    position: absolute;
    left: 0.02rem;
    top: 0.8rem;
}
.eays{
    display: block;
    position: absolute;
    left: 1rem;
    top: 0.03rem;
    background-size: 100% 100%;
    width: 0.24rem;
    height: 0.18rem;
    background-image: url("../../../public/assets/images/my/oldage_mine_asset_eyeoff.png");
}
.eays1{
    display: block;
    position: absolute;
    left: 1rem;
    top: 0.03rem;
    background-size: 100% 100%;
    width: 0.24rem;
    height: 0.18rem;
    background-image: url("../../../public/assets/images/my/oldage_mine_asset_eyeon.png");
}
.bg_img2{
    display: block;
    background-image: url("../../../public/assets/images/my/querysellect_head_bg.png");
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
}
.img_2{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: 0.3rem;
    top: 0.8rem;

}
.img_2 img{
    width: 100%;
    height: 100%;
    margin-top: -0.06rem;
    border-radius: 50%;
}
.img img{
    width: 100%;
    height: 100%;
}
.num{
    font-size: 0.2rem;
    display: block;
    position: absolute;
    font-weight: 400;
    left: 0.58rem;
    top: -0.1rem;
}
.small_left img{
    width: 100%;
    height: 100%;

}
.small_left{
    display: inline-block;
    background-image: url("../../../public/assets/images/my/item_right_arrow.png");
    background-size: 100% 100%;
    width: 0.09rem;
    height: 0.08rem;
    position: absolute;
    left: 1.8rem;
    top: -0.03rem;
}
.certification{
    background-image: url("../../../public/assets/images/my/salary_title_background.png");
    background-size: 100% 100%;
    width: 0.8rem;
    height: 0.22rem;
    position: absolute;
    left: 0.62rem;
    top: 0.22rem;
    font-size: 0.1rem;
    color: white;
    text-align: center;
    line-height: 0.22rem;
}
.left-small{
    display: inline-block;
    background-image: url("../../../public/assets/images/my/white_arrow_right.png");
    background-size: 100% 100%;
    width: 0.09rem;
    height: 0.08rem;
    position: absolute;
    left: 1.32rem;
    top: 0.3rem;
}
    .login{
        width: 2rem;
        position: absolute;
        left: 0.9rem;
        top: 1.7rem;
    }
.login img{
    width: 100%;
    height: 100%;
}
    .world{
        font-size: 0.1rem;
        color: #989898;
        position: absolute;
        top: 2.5rem;
        left: 1.4rem;
    }
    .list_ul{
      display: flex;
    justify-content: space-between;
    }
    .list_li a{
          font-size: 0.18rem;
          color: black;
          display: block;
          position: absolute;
          left: 0.5rem;
          top: 3rem;
        width: 80%;
      }
.list_li_2 a{
    font-size: 0.18rem;
    color: black;
    display: block;
    position: absolute;
    left: 0.5rem;
    top: 3.5rem;
    width: 80%;

}

.list_li_3 a{
    font-size: 0.18rem;
    color: black;
    display: block;
    position: absolute;
    left: 0.5rem;
    top: 5rem;
    width: 80%;

}

.list_li_4 a{
    font-size: 0.18rem;
    color: black;
    display: block;
    position: absolute;
    left: 0.5rem;
    top: 4rem;
    width: 80%;

}

.list_li_5 a{
    font-size: 0.18rem;
    color: black;
    display: block;
    position: absolute;
    left: 0.5rem;
    top: 4.5rem;
    width: 80%;

}
    .bg_1{
        display: inline-block;
        background-image: url("../../../public/assets/images/my/kefu.png");
        background-size: 100% 100%;
        width: 0.28rem;
        height: 0.26rem;
        position: absolute;
        left: 0.2rem;
        top: 3.02rem;
    }
    .bg_2{
        display: inline-block;
        background-image: url("../../../public/assets/images/my/item_right_arrow.png");
        background-size: 100% 100%;
        width: 0.13rem;
        height: 0.15rem;
        position: absolute;
        left: 3.2rem;
        top: 3.05rem;
    }

.bg_3{
    display: inline-block;
    background-image: url("../../../public/assets/images/my/z89d8c5978be3c31fd4e1db2fa34bc1f3.png");
    background-size: 100% 100%;
    width: 0.28rem;
    height: 0.26rem;
    position: absolute;
    left: 0.2rem;
    top: 3.5rem;
}
.bg_4{
    display: inline-block;
    background-image: url("../../../public/assets/images/my/item_right_arrow.png");
    background-size: 100% 100%;
    width: 0.13rem;
    height: 0.15rem;
    position: absolute;
    left: 3.2rem;
    top: 3.5rem;
}
.bg_5{
    display: inline-block;
    background-image: url("../../../public/assets/images/my/back.png");
    background-size: 100% 100%;
    width: 0.25rem;
    height: 0.24rem;
    position: absolute;
    left: 0.2rem;
    top: 5rem;
}
.bg_6{
    display: inline-block;
    background-image: url("../../../public/assets/images/my/item_right_arrow.png");
    background-size: 100% 100%;
    width: 0.13rem;
    height: 0.15rem;
    position: absolute;
    left: 3.2rem;
    top: 5rem;
}
</style>