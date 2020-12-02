/*
 * @Author: your name
 * @Date: 2019-11-28 10:07:26
 * @LastEditTime: 2020-03-05 14:41:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/giftApi.js
 */
import {BASEURL} from "../commons/Config";

const GIFTURL=`${BASEURL}/products/list/`;

export default {
    getProductInfo(cb){
        fetch(GIFTURL).then(res=>{
            res.json().then(cb)
        })
    }
}