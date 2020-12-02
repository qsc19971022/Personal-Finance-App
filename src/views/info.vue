<template>
    <van-pull-refresh style="font-size: 0.18rem;color: gray;text-align: center" v-model="isLoading" @refresh="onRefresh">
    <div class="info" v-if="info!=''">
        <InfoHeader :data="Info.head"/>
        <InfoSlide/>
        <InfoDoc :data="Info.doc"/>
        <InfoCon :data="Info.con[number1]"/>
    </div>
     <div class="loads" v-else>
        <van-loading type="spinner" color="#1989fa" />
     </div>
    </van-pull-refresh>
</template>

<script>
    import { PullRefresh,Toast} from 'vant';
    import header from "../components/info/info-header"
    import slide from "../components/info/info-slide"
    import doc from "../components/info/info-doc"
    import con from "../components/info/info-con"
    import infoApi from "../apis/infoApi";
    import { Loading } from 'vant';
    export default {
        name: "information",
        data(){
            return{
                Info:{
                    "head":{"title":"热门活动","more":"查看更多"},
                    "doc":[{val:"最新"},{val:"期货"},{val:"银行"}],
                    "con": [
                        [
                            {
                                "info_id":"234",
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "num": "6399",
                                //"pic": "http://39.107.245.176/images/info/Screenshot_20191118_193228_com.xzck_07.png"
                                "pic": ""
                            },
                            {   "info_id":"235",
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "num": "699",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_193228_com.xzck_14.png"
                            },
                            {   "info_id":"236",
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "num": "639",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_193228_com.xzck_16.png"
                            },
                            {   "info_id":"237",
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "num": "99",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_193228_com.xzck_18.png"
                            }
                        ],
                        [
                            {
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_221351_com.xzck_12.png"
                            },
                            {
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_221351_com.xzck_14.png"
                            },
                            {
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_221351_com.xzck_16.png"
                            },
                            {
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_221351_com.xzck_18.png"
                            }
                        ],
                        [
                            {
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_221356_com.xzck_07.png"
                            },
                            {
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_221356_com.xzck_09.png"
                            },
                            {
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_221356_com.xzck_11.png"
                            },
                            {
                                "title": "91科技集团许泽伟受邀观礼中华人民共和国成立70周年大阅.",
                                "date": "2019-10-01",
                                "pic": "http://39.107.245.176/images/info/Screenshot_20191118_221356_com.xzck_13.png"
                            }
                        ]
                    ]
                },
                number1:0,
                isLoading: false,
                InfoDetail:{}
            }
        },
        components:{
            "InfoHeader":header,
            "InfoSlide":slide,
            "InfoDoc":doc,
            "InfoCon":con,
            [PullRefresh.name]:PullRefresh,
            [Toast.name]:Toast,
            [Loading.name]:Loading
        },
        methods:{
            async _initPageInfo(){
                let data=await infoApi.getInfoPage();
                this.Info=data;
                console.log(this.Info.con)
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            },
        },
        async mounted() {
            this._initPageInfo();
            this.$eventBus.$on("cone",(a)=>{
                this.number1=a;
            });
        },
    }
</script>

<style scoped>
.info{
    font-size: 0.14rem;
    background-color: rgb(238,238,238);
}
    .loads{
        width: 100%;
        height: 6rem;
        text-align: center;
        line-height: 6rem;
        font-size: 0.3rem;
        color: black;
        font-weight: bold;
    }
</style>
