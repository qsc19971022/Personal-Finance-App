/*
 * @Author: your name
 * @Date: 2019-11-28 22:08:24
 * @LastEditTime: 2020-02-26 10:15:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/infoApi.js
 */
import {BASEURL} from "../commons/Config"
export default {
    async getInfoPage(){
        //let res= await fetch(`${BASEURL}/info`);
        let res= await fetch(`${BASEURL}/info/search/`);
        let data=await res.json();
        return data;
    }
}
