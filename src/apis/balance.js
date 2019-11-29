import {BASEURL} from "../commons/Config"

const BALURL = `${BASEURL}/balance/`

export default {
    balance(user,cb){
        fetch(`${BALURL}?user=${user}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    }
}