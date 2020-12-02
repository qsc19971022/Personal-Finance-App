//import {BASEURL} from "../commons/Config"

const SETNURL = "http://49.234.85.212:8080/pay/set_paypwd/"

export default {
    checkUserSet(phone,oldpass,pass,cb){
        fetch(SETNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                telephone:phone,
                oldpaypwd:oldpass,
                newpaypwd:pass
            })
        }).then(res=>{
            res.json().then(cb)
        })
    }
}
