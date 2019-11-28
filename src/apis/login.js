import {BASEURL} from "../commons/Config"

const LOGINURL = `${BASEURL}/login`

export default {
    checkUserLogin(name,pass,cb){
        fetch(LOGINURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:`username=${name}&password=${pass}`
        }).then(res=>{
            res.json().then(cb)
        })
    }
}