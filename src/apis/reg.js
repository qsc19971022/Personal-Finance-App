/*
 * @Author: your name
 * @Date: 2019-11-28 10:04:20
 * @LastEditTime : 2020-02-15 10:59:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/reg.js
 */
import {BASEURL} from "../commons/Config"

const REGNURL = `${BASEURL}/user/tel/`
const REGISTNURL = `${BASEURL}/user/reg/`

export default {
    checkUserTel(name,flag,cb){
        fetch(REGNURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                tel:name,
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
                user:name,
                code:code,
                flag:flag,
                query:query
            })
        }).then(res=>{
            res.json().then(cb)
        })
    }
}