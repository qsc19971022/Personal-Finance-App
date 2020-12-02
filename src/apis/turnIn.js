/*
 * @Author: your name
 * @Date: 2019-11-27 10:48:06
 * @LastEditTime: 2020-02-18 19:18:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/turnIn.js
 */
import {BASEURL} from "../commons/Config"

const INURL = `${BASEURL}/common/info`

const SURL = `${BASEURL}/sure_out_or_in/`

export default {
    //进入转入页面时
    turnIn(user,cb){
        fetch(`${INURL}?user=${user}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    },
    turnInMoney(user,where,card,money,cb){
        fetch(SURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user:user,
                flag:where,
                card_id:card,
                money:money
            })
        }).then(res=>res.json().then(cb))
    },
}