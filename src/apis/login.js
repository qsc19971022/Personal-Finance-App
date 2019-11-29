import {BASEURL} from "../commons/Config"

const LOGINURL = `${BASEURL}/user/login/`

export default {
    checkUserLogin(name,pass,cb){
        fetch(LOGINURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
            body:JSON.stringify({
                name: name,
                pwd: pass
            })
        }).then(res=>res.json().then(cb))
    }
}