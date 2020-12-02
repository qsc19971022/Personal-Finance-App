/*
 * @Author: your name
 * @Date: 2019-11-26 19:31:38
 * @LastEditTime: 2020-02-24 16:37:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/termMoney.js
 */
import {BASEURL} from "../commons/Config"

const TERMURL = `${BASEURL}/products/list/`

export default {
    getTermInfo(cb){
        fetch(TERMURL,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    }
}