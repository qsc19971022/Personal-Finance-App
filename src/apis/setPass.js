import {BASEURL} from "../commons/Config"

const SETNURL = `${BASEURL}/user/setpwd/`

export default {
    checkUserSet(name,pass,cb){
        fetch(SETNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                pwd:pass
            })
        }).then(res=>{
            res.json().then(cb)
        })
    }
}