import {BASEURL} from "../commons/Config"

const REGNURL = `${BASEURL}/user/send_code/`
const REGISTNURL = `${BASEURL}/user/regist/`

export default {
    checkUserTel(name,flag,cb){
        fetch(REGNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                phone:name,
                flag:flag
            })
        }).then(res=>{
            res.json().then(cb)
        })
    },
    checkUserCode(name,code,flag,query,cb){
        fetch(REGISTNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                phone:name,
                code:code,
                flag:flag,
                query:query
            })
        }).then(res=>{
            res.json().then(cb)
        })
    }
}