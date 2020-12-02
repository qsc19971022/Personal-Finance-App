/*
 * @Author: your name
 * @Date: 2019-11-28 16:48:50
 * @LastEditTime: 2020-03-10 10:38:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/setDetailInfo.js
 */
// import {BASEURL} from "../commons/config"
// const DETAILBTMURL = "http://localhost:3005/productinfo"
// const DETAILURL = "http://localhost:3005/detailinfo"
const DETAILBTMURL = "http://test.woftsun.com:3000/products/pay/"
const DETAILURL = "http://test.woftsun.com:3000/products/detail/"

export default{
    getdetails(name,paynum,phone,cb){
        fetch(DETAILBTMURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                product_name:name,
                money:paynum,
                user:phone
            })
        }).then(res=>{
            res.json().then(cb)
        })
    },

    getdetails2(name,cb){
        fetch(`${DETAILURL}?product_name=${name}`,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    }

    // getdetails(cb){
    //     fetch(DETAILBTMURL,{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //
    //         })
    //     }).then(res=>{
    //         res.json().then(cb)
    //     })
    // },
    //
    // getdetails2(cb){
    //     fetch(DETAILURL).then(res=>{
    //         res.json().then(cb)
    //     })
    // }
}