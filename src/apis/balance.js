/*
 * @Author: your name
 * @Date: 2019-11-28 09:42:36
 * @LastEditTime: 2020-02-27 08:41:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/balance.js
 */
import {BASEURL} from "../commons/Config"

const BALURL = `${BASEURL}/common/info/`

export default {
    balance(user,cb){
        fetch(`${BALURL}?user=${user}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    }
}