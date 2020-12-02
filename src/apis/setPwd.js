/*
 * @Author: your name
 * @Date: 2019-11-29 19:32:46
 * @LastEditTime : 2020-02-15 14:49:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/setPwd.js
 */
import {BASEURL} from "../commons/Config"

const SETNURL = `${BASEURL}/user/setpwd/`;

export default {
    checkUserSet(name,pass,cb){
        fetch(SETNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user:name,
                //oldpwd:oldpass,
                pwd:pass
            })
        }).then(res=>{
            res.json().then(cb)
        })
    }
}