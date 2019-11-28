<template>
    <div class="newFile">
        <new-header></new-header>
        <div class="newfile-top">
            <van-uploader class="newfile-img"
                          v-model="fileList"
                          multiple
                          :max-count="1"
                          :after-read="afterRead"
                          preview-size="150px"
            />
            <div class="newfile-name" >
                <p>昵称:</p><input type="text" v-model="userName">
            </div>
            <div class="newfile-address" >
                <p>地址:</p><input type="text" v-model="address">
            </div>
            <div class="newfile-mail" >
                <p>邮编:</p><input type="text" v-model="mail">
            </div>
            <button class="newfile-btn1" @click="sendfile">提交自定义头像</button>
        </div>
        <div class="newfile-tip">
            <p>  提示:亲爱的用户，钱夕夕为了用户方便，增加了获取QQ图片的功能，如果你钱夕夕的头像选择为QQ头像，那么请你输入你的QQ号后选择提交QQ头像，自定义上传请选择自定义上传按钮</p>
        </div>
        <div class="newfile-QQ">获取QQ头像:<input type="text" @blur="getQQ" v-model="QQ"></div>
<!--        <div class="newfile-name1">-->
<!--            <p>昵称:</p><input type="text">-->
<!--        </div>-->
<!--        <div class="newfile-address1">-->
<!--            <p>地址:</p><input type="text">-->
<!--        </div>-->
<!--        <div class="newfile-mail1">-->
<!--            <p>邮编:</p><input type="text">-->
<!--        </div>-->
        <button class="newfile-btn2" @click="sendQQ" >提交QQ头像</button>
    </div>
</template>

<script>
    import header from "../components/newfile/header";
    import Vue from 'vue';
    import { Uploader } from 'vant';
    Vue.use(Uploader);
    export default {
        name: "newFile",
        data() {
            return {
                fileList: [],
                QQ:'',
                imgURL:{url:'',user:''},
                userName:'',
                address:'',
                mail:''
            }
        },
        components:{
            [Uploader.name]:Uploader,
            "new-header":header
        },
        methods:{
            getQQ(){
                fetch('http://localhost:3000/?qq='+this.QQ,{
                    method:"GET",
                }).then(res=>res.json().then(cb=>{
                        console.log(cb);
                    this.imgURL.url = cb.imgurl;
                    this.user = localStorage.getItem("user");
                    })
                )
            },
            afterRead(file){
                console.log(file)
                this.imgURL.url = file.content;
                this.imgURL.code = 0;
                // localStorage.setItem("userImg",this.imgURL.url);
                this.user = localStorage.getItem("user");
            },
            sendfile(){
                // console.log(this.imgURL);
                fetch('http://10.36.172.118:8080/user/get_portrait/',{
                    method:"POST",
                    headers:{'Content-Type':'application/json;charset=UTF-8'},
                    body:JSON.stringify({
                        new_portrait:this.imgURL.url,
                        phone_num:localStorage.getItem("user"),
                        username:this.userName,
                        address:this.address,
                        zip_code:this.mail
                    })
                }).then(res=>res.json().then(cb=>{
                        console.log(cb);
                    })
                )
            },
            sendQQ(){
                // console.log(this.imgURL);
                fetch('http://10.36.172.118:8080/user/get_portrait/',{
                    method:"POST",
                    headers:{'Content-Type':'application/json;charset=UTF-8'},
                    body:JSON.stringify({
                        new_portrait:this.imgURL.url,
                        phone_num:localStorage.getItem("user"),
                        username:this.userName,
                        address:this.address,
                        zip_code:this.mail
                    })
                }).then(res=>res.json().then(cb=>{
                        console.log(cb);
                    })
                )
            }
        }
    }
</script>

<style scoped>
    .newFile{
        width: 100%;
        height: 100%;
        background-color: rgb(244,244,244);
        overflow: auto;
    }
    .newfile-img{
        display: block;
        margin: 0.6rem auto;
        position: absolute;
        left:1.2rem ;
        background-color: rgb(244,244,244);
    }
    .newfile-top{
        position: relative;
    }
    .newfile-QQ{
        width: 100%;
        height: 0.3rem;
        position: absolute;
        top: 6rem;
        font-size: 0.16rem;
        box-sizing: border-box;
        padding-left: 0.2rem;
    }
    .newfile-QQ>input{
        width: 2.3rem;
        height: 0.32rem;
        border: 1px solid gray;
        margin-left: 0.1rem;
        box-sizing: border-box;
        padding-left: 0.3rem;
        background-color: rgb(244,244,244);
    }
    .newfile-btn1{
        width: 60%;
        height: 0.42rem;
        background-color: #00ff33;
        outline: none;
        border: none;
        position: absolute;
        top: 3.8rem;
        left: 0.74rem;
    }
    .newfile-tip{
        height: 1.4rem;
        background-color: white;
        box-sizing: border-box;
        padding: 0.1rem 0.24rem;
        position: absolute;
        top: 4.4rem;
    }
    .newfile-tip>p{
        font-size: 0.15rem;
        line-height: 0.3rem;
    }
    .newfile-btn2{
        width: 60%;
        height: 0.42rem;
        background-color: #00ff33;
        outline: none;
        border: none;
        position: absolute;
        top: 6.5rem;
        left: 0.74rem;
    }
    .newfile-name{
        width: 80%;
        height: 0.4rem;
        position: absolute;
        top: 2.2rem;
        left: 0.8rem;
    }
    .newfile-address{
        width: 80%;
        height: 0.4rem;
        position: absolute;
        top: 2.7rem;
        left: 0.8rem;
    }
    .newfile-mail{
        width: 80%;
        height: 0.4rem;
        position: absolute;
        top: 3.2rem;
        left: 0.8rem;
    }
    /*.newfile-name1{*/
    /*    width: 80%;*/
    /*    height: 0.4rem;*/
    /*    position: absolute;*/
    /*    top: 6rem;*/
    /*    left: 0.8rem;*/
    /*}*/
    /*.newfile-address1{*/
    /*    width: 80%;*/
    /*    height: 0.4rem;*/
    /*    position: absolute;*/
    /*    top: 6.5rem;*/
    /*    left: 0.8rem;*/
    /*}*/
    /*.newfile-mail1{*/
    /*    width: 80%;*/
    /*    height: 0.4rem;*/
    /*    position: absolute;*/
    /*    top: 7rem;*/
    /*    left: 0.8rem;*/
    /*}*/
    .newfile-name>p,.newfile-address>p,.newfile-mail>p,.newfile-name1>p,.newfile-address1>p,.newfile-mail1>p{
        display: inline-block;
        font-size: 0.15rem;
    }
    .newfile-name>input,.newfile-address>input,.newfile-mail>input,.newfile-name1>input,.newfile-address1>input,.newfile-mail1>input{
        width: 60%;
        height: 0.3rem;
        background-color: rgb(244,244,244);
        border: 1px solid gray;
    }
</style>