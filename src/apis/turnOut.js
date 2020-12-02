import {BASEURL} from "../commons/Config"

const OUTURL = `${BASEURL}/out_or_in/`

const SUERURL = `${BASEURL}/sure_out_or_in/`

export default {
    //刚进入转出页面时
    turnOut(user,flag,cb){
        fetch(`${OUTURL}?user=${user}&flag=${flag}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    },
    //转出到银行卡
    turnOutMoneyCard(user,where,card,money,cb){
        fetch(SUERURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user:user,
                flag:where,
                card_id:card,
                money:money
            })
        }).then(res=>res.json().then(cb))
    },
    //转出到账户余额
    turnOutMoney(user,where,money,cb){
        fetch(SUERURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user:user,
                flag:where,
                money:money
            })
        }).then(res=>res.json().then(cb))
    }
}