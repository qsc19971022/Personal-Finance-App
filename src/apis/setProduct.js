/*
 * @Author: your name
 * @Date: 2019-11-28 09:46:56
 * @LastEditTime: 2020-02-25 11:10:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /moneywoftsun-app/moneywoftsun-app/src/apis/setProduct.js
 */
const producturl="http://test.woftsun.com:3000/products/list";
// const producturl="http://localhost:3005/productinfo";

export default {
    // productSet(year,month,cb){
    //     fetch(setProductUrl,{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             years:year,
    //             months:month
    //         })
    //     }).then(res=>{
    //         res.json().then(cb)
    //     })
    // }
    // productSet(cb,name){
    //     fetch(`${setProductUrl}?product_name=${name}`,{method:'get'}).then(res=>{
    //         res.json().then(cb)
    //     })
    // }

    getproduct(cb) {
        fetch(producturl).then(res => {
            res.json().then(cb)
        })
    }

}