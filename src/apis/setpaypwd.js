import {BASEURL} from "../commons/Config"

const SETNURL = `${BASEURL}/user/resetpwd/`

export default {
    checkUserSet(name,pass,oldpass,cb){
        fetch(SETNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                oldpwd:oldpass,
                pwd:pass
            })
        }).then(res=>{
            res.json().then(cb)
        })
    }
}
