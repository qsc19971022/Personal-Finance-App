import {BASEURL} from "../commons/Config"

const SETNURL = `${BASEURL}/set`

export default {
    checkUserSet(name,pass,flag,cb){
        fetch(SETNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:`username=${name}&password=${pass}&flag=${flag}`
        }).then(res=>{
            res.json().then(cb)
        })
    }
}