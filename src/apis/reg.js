import {BASEURL} from "../commons/Config"

const REGNURL = `${BASEURL}/reg`

export default {
    checkUserTel(name,flag,cb){
        fetch(REGNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:`username=${name}&flag=${flag}`
        }).then(res=>{
            res.json().then(cb)
        })
    },
    checkUserCode(name,code,flag,query,cb){
        fetch(REGNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:`username=${name}&code=${code}&flag=${flag}&phone=${query}`
        }).then(res=>{
            res.json().then(cb)
        })
    }
}