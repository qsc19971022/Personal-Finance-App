import {BASEURL} from "../commons/Config"

const INURL = `${BASEURL}/in`

export default {
    turnIn(user,cb){
        fetch(`${INURL}?user=${user}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    },
    turnInMoney(user,where,money,cb){
        fetch(`${INURL}?user=${user}&where=${where}&money=${money}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    }
}