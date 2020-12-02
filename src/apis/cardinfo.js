/*
 * @Author: your name
 * @Date: 2019-11-28 22:08:24
 * @LastEditTime: 2020-02-24 11:41:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/cardinfo.js
 */
import {BASEURL} from "../commons/Config"
export default {
    async getInfo1Page(user_phone){
        let res= await fetch(`${BASEURL}/bank/get?user=${user_phone}`);
        let data=await res.json();
        return data;
    }
}
