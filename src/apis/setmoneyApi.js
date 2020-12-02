/*
 * @Author: your name
 * @Date: 2019-11-27 09:45:18
 * @LastEditTime: 2020-03-09 16:07:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/setmoneyApi.js
 */
import {BASEURL} from "../commons/Config"
const SETMONEYURL = `${BASEURL}/user/setmoney`;
const GETMONEYURL = `${BASEURL}/user/getmoney`;
export default {
  getsetmoneyInfo (user,money,cb) {
    fetch(SETMONEYURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        },
        body:JSON.stringify({
            user: user,
            money:money
        })
    }).then(res=>res.json().then(cb))
  },
  getmoneyInfo (user,money,cb) {
    fetch(GETMONEYURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        },
        body:JSON.stringify({
            user: user,
            money:money
        })
    }).then(res=>res.json().then(cb))
  }
}
