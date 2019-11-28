import {BASEURL} from "../commons/Config"

const OUTURL = `${BASEURL}/out`

export default {
    turnOut(user,cb){
        fetch(`${OUTURL}?user=${user}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    },
    turnOutMoneyCard(user,where,card,money,style,cb){
        fetch(`${OUTURL}?user=${user}&where=${where}&card=${card}&money=${money}&style=${style}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    },
    turnOutMoney(user,where,money,cb){
        fetch(`${OUTURL}?user=${user}&where=${where}&money=${money}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    }
}