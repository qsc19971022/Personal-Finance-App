import Vue from 'vue';
import vueRouter from 'vue-router';
import index from '../views/index';
import search from "../views/search";
import topUp from '../views/top-up'
import robot from "../views/robot";
import luck from "../views/luck";
import footer from '../components/commons/footer'
import product from "../views/product"
import counter from "../views/counter"
import cun1 from "../views/cun1"
import cun2 from "../views/cun2"
import cun3 from "../views/cun3"
import cun4 from "../views/cun4"
import depositRate from "../views/depositRate"
import Login from '../views/login'
import Register from '../views/register'
import setPass from '../views/setPass'
import balance from '../views/balance'
import balanceSuggest from '../views/balanceSuggest'
import turnOut from '../views/turnOut'
import turnIn from '../views/turnIn'
import term from '../views/termMoney'
import invest from "../views/investigation";
import newImg from "../views/newImg";
import vipactivities from '../views/vip-activities'
import bankSelection from '../views/Bank-Selection'
import getmoney from '../views/get-money'
import setmoney from '../views/set-money'
import bankcards from '../views/bankcards'
import my from '../views/my';
import setting from "../views/setting";
import about from "../views/about";
import Invite_friends from "../views/Invite_friends";
import gift from "../views/gift";
import change_pwd from "../views/change_pwd";
import info from "../views/info"
import My_account from "../views/Myaccount"
import BindingCard from "../views/BindingCard";
import infoDetail from "../views/infoDetail"
import BingCard from "../views/BingCard"
import set_paypwd from "../views/set_paypwd";
import MyCoupon from "../views/MyCoupon";
import map from "../views/map";
import cashbook from "../views/cashbook"
import detail from "../views/detail"
Vue.use(vueRouter);
let router = new vueRouter({
    routes:[
 {
      path: '/bankcards',
      component: bankcards
    },
    {
      path: '/getmoney',
      component: getmoney
    },
    {
      path: '/setmoney',
      component: setmoney
    },
    {
      path: '/bankSelection',
      component: bankSelection
    },
    {
      path: '/vipactivities',
      component: vipactivities,
    },
        {
            path:"/change_pwd",
            component:change_pwd
        },
        {path: "/",redirect:"/index"},
        {path:"/search",component:search},
        {path:"/topUp",component:topUp},
        {path:"/robot",component:robot},
        {path:"/map",component:map},
        {path:"/luck",component:luck},
        {path: "/my_account",component:My_account},
        {path: "/BindingCard",component:BindingCard},
        {path: '/vipactivities',component: vipactivities,},
        {path:"/counter",component:counter},
        {name:"a",path:"/cun/0",component:cun1},
        {name:"b",path:"/cun/1",component:cun2},
        {name:"c",path:"/cun/2",component:cun3},
        {name:"d",path:"/cun/3",component:cun4},
        {path:"/depositRate",component:depositRate},
        {path:"/login",component:Login},
        {path:"/reg",component:Register},
        {path:"/set",component:setPass},
        {path:"/balance",component:balance},
        {path:"/sug",component:balanceSuggest},
        {path:"/turnOut",component:turnOut},
        {path:"/turnIn",component:turnIn},
        {path:"/term",component:term},
        {path: "/setting", component: setting},
        {path:"/about", component:about},
        {path:"/Invite_friends", component:Invite_friends},
        {path:"/gift", component:gift},
        {path:"/invest",component:invest},
        {path:"/newImg",component:newImg},
        {path: '/footer',component: footer, children:[
            {path: "/info",component:info},
            {path: "/index",component:index},
             {path: '/product',component: product},
                {path:'/my', component:my},
            ]
        },
        {path: "/my_account",component:My_account},
        {path: "/BindingCard",component:BindingCard},
        {path: "/infoDetail",component:infoDetail},
        {path: "/BingCard",component:BingCard},
        {path: "/setPayPwd",component:set_paypwd},
        {path: "/MyCoupon",component:MyCoupon},
        {path:"/product/detail",component:detail},
        {path:"/cashbook",component:cashbook},

    ]
});
export default  router;