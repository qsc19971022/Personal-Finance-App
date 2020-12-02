/*
 * @Author: your name
 * @Date: 2019-11-28 22:08:24
 * @LastEditTime: 2020-02-18 16:00:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/my_account.js
 */
import {BASEURL} from "../commons/Config"
export default {
    async getInfoPage(user_phone){
        let res= await fetch(`${BASEURL}/common/info?user=${user_phone}`);
        let data=await res.json();
        return data;
    }
}
