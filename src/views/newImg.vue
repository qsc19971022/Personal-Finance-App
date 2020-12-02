<template>
    <div class="newImg">
        <div class="newfile-header">
            <a href="javascript:history.go(-2)"></a>
            <p>编辑资料</p>
        </div>
        <div style="height: 1.9rem">
            <van-uploader v-model="fileList"  multiple :max-count="1" :after-read="afterRead" class="newImg-img" preview-size="100px" />
        </div>
        <div class="newImg-info">
            <p class="newImg-name">获取QQ头像 <input type="text" v-model="QQ" @blur="getQQ"></p>
            <p class="newImg-name">昵称 <input type="text" v-model="username"></p>
            <p class="newImg-name">地址 <input type="text" v-model="address"></p>
            <p class="newImg-name">邮编 <input type="text" v-model="mail"></p>
            <a class="newImg-getName" @click="getName">获取QQ昵称</a>
        </div>
        <div style="width: 100%; text-align: center" ><button class="newImg-commit" @click="sendfile">上传资料</button></div>
        <p class="newImg-tip">提示:目前是钱夕夕1.0版，您在获取QQ头像的时候，你的头像无法显示到预览图片框位置，这个你不必担心，直接提交即可。</p>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Uploader,Dialog } from 'vant';
    Vue.use(Uploader,Dialog);
    export default {
        name: "newImg",
        data() {
            return {
                fileList: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
                QQ:'',
                username:'',
                address:'',
                mail:'',
                url:'',
                data:''
            }
        },
        methods:{
            getQQ(){
                console.log(this.fileList[0].url);
                fetch('http://test.woftsun.com:3001/?qq='+this.QQ,{
                    method:"GET",
                }).then(res=>res.json().then(cb=>{
                        console.log(cb);
                    this.fileList[0].url = cb.imgurl;
                    this.url = cb.imgurl;
                    this.data = cb.name;
                    })
                )
            },
            getName(){
                console.log(this.data)
                this.username = this.data;
            },
            afterRead(file){
                console.log(file)
                this.url = file.content;
            },
            sendfile(){
                let addressReg = /[\u4E00-\u9FA5]{8}/;
                let flagAddress = false;
                let mailReg = /^[0-9]{6}$/;
                let flagMail = false;
                if(addressReg.test(this.address)){
                     flagAddress = true;
                }else{
                     flagAddress = false;
                }

                if(mailReg.test(this.mail)){
                    flagMail = true;
                }else{
                    flagMail =false;
                }
                if (flagAddress && flagMail){
                    fetch('http://test.woftsun.com:3000/common/edit',{
                        method:"POST",
                        headers:{'Content-Type':'application/json;charset=UTF-8'},
                        body:JSON.stringify({
                            name:this.username,
                            img:this.url,
                            user:localStorage.getItem("user"),
                            address:this.address,
                            zip_code:this.mail
                        })
                    }).then(res=>res.json().then(cb=>{
                            console.log(cb);
                            if(cb.status == 1){
                                Dialog.alert({
                                    message: '修改成功'
                                }).then(() => {
                                    history.back();
                                });
                            }else{
                                Dialog.alert({
                                    message: '格式输入错误'
                                        }).then(() => {
                                            //close
                                        });
                                    }
                        })
                    );

                }
            },
        }
    }
</script>

<style scoped>
    .newImg{
        width: 100%;
        height: 100%;
        background-color: rgb(248,248,248);
    }
    .newfile-header{
        width: 100%;
        height: 0.5rem;
        background-color: white;
    }
    .newfile-header>a{
        display: block;
        line-height: 0.5rem;
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        background-image: url("../../public/assets/images/index/return.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 0.24rem 0.24rem;
    }
    .newfile-header>p{
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.5rem;
    }
    .newImg-img{
        border: 1px solid white;
        border-radius: 50%;
        position: relative;
        left: 1.3rem;
        top: 0.4rem;
    }
    .newImg-info{
        width: 100%;
        height: 2.4rem;
        background-color: white;
        position: relative;
    }
    .newImg-info>p{
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        box-sizing: border-box;
        padding: 0 0.2rem;
        border-bottom: 1px solid rgb(232,232,232);
        font-size: 0.16rem;
        font-family: 楷体;
    }
    .newImg-info>p>input{
        width: 75%;
        height: 0.4rem;
        margin-left: 0.14rem;
        line-height: 0.4rem;
    }
    .newImg-info>p:nth-child(1)>input{
        width: 65%;
    }
    .newImg-commit{
        width: 60%;
        height: 0.42rem;
        background-color: #00ff33;
        outline: none;
        border: none;
        font-size: 0.15rem;
        margin-top: 0.4rem;
    }
    .newImg-getName{
        display: inline-block;
        width: 1rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        outline: none;
        display: inline-block;
        background-color: #b3d4fc;
        position: absolute;
        top: 0.74rem;
        left: 2.2rem;
    }
    .newImg-tip{
        margin-top: 0.3rem;
        font-size: 0.14rem;
        box-sizing: border-box;
        padding: 0 0.14rem;
        line-height: 0.24rem;
        color: #6e6e6e;
    }
</style>