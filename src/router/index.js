import Vue from 'vue';
import vueRouter from 'vue-router';
import index from '../views/index';
import footer from '../components/commons/footer'
import product from "../views/product"
import my from '../views/my';
import info from "../views/info"
Vue.use(vueRouter);
let router = new vueRouter({
    routes:[
 {
      path: '/bankcards',
     component:()=> import('../views/bankcards')},
    {
      path: '/getmoney',
        component:()=> import('../views/get-money')
    },
    {
      path: '/setmoney',
        component:()=> import('../views/set-money')
    },
    {
      path: '/bankSelection',
        component:()=> import('../views/Bank-Selection')
    },
    {
      path: '/vipactivities',
        component:()=> import('../views/vip-activities')
    },
        {
            path:"/change_pwd",
            component:()=> import('../views/change_pwd')
        },
        {path: "/",redirect:"/index"},
        {path:"/search",component:()=> import('../views/search')},
        {path:"/topUp",component:()=> import('../views/top-up')},
        {path:"/robot",component:()=> import('../views/robot')},
        {path:"/map",component:()=> import('../views/map')},
        {path:"/luck",component:()=> import('../views/luck')},
        {path: "/my_account",component:()=> import('../views/Myaccount')},
        {path: "/BindingCard",component:()=> import('../views/BindingCard')},
        {path: '/vipactivities',component:()=> import('../views/vip-activities')},
        {path:"/counter",component:()=> import('../views/counter')},
        {name:"a",path:"/cun/0",component:()=> import('../views/cun1')},
        {name:"b",path:"/cun/1",component:()=> import('../views/cun2')},
        {name:"c",path:"/cun/2",component:()=> import('../views/cun3')},
        {name:"d",path:"/cun/3",component:()=> import('../views/cun4')},
        {path:"/depositRate",component:()=> import('../views/depositRate')},
        {path:"/login",component:()=> import('../views/login')},
        {path:"/reg",component:()=> import('../views/register')},
        {path:"/set",component:()=> import('../views/setPass')},
        {path:"/balance",component:()=> import('../views/balance')},
        {path:"/sug",component:()=> import('../views/balanceSuggest')},
        {path:"/turnOut",component:()=> import('../views/turnOut')},
        {path:"/turnIn",component:()=> import('../views/turnIn')},
        {path:"/term",component:()=> import('../views/termMoney')},
        {path: "/setting", component:()=> import('../views/setting')},
        {path:"/about", component:()=> import('../views/about')},
        {path:"/Invite_friends", component:()=> import('../views/Invite_friends')},
        {path:"/gift", component:()=> import('../views/gift')},
        {path:"/invest",component:()=> import('../views/investigation')},
        {path:"/newImg",component:()=> import('../views/newImg')},
        {path: '/footer',component: footer, children:[
            {path: "/info",component:info},
            {path: "/index",component:index},
             {path: '/product',component: product},
                {path:'/my', component:my},
            ]
        },
        {path: "/my_account",component:()=> import('../views/Myaccount')},
        {path: "/BindingCard",component:()=> import('../views/BindingCard')},
        {path: "/infoDetail",component:()=> import('../views/infoDetail')},
        {path: "/BingCard",component:()=> import('../views/BingCard')},
        {path: "/setPayPwd",component:()=> import('../views/set_paypwd')},
        {path: "/MyCoupon",component:()=> import('../views/MyCoupon')},
        {path:"/product/detail",component:()=> import('../views/detail')},
        {path:"/cashbook",component:()=> import('../views/cashbook')},

    ]
});
export default  router;