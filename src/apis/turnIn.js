import {BASEURL} from "../commons/Config"

const INURL = `${BASEURL}/out_or_in/`

const SURL = `${BASEURL}/sure_out_or_in/`

export default {
    //进入转入页面时
    turnIn(user,flag,cb){
        fetch(`${INURL}?user=${user}&flag=${flag}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    },
    turnInMoney(user,where,card,money,cb){
        fetch(SURL,{
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
}