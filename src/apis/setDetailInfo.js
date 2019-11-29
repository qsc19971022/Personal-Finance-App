// import {BASEURL} from "../commons/config"
// const DETAILBTMURL = "http://localhost:3005/productinfo"
// const DETAILURL = "http://localhost:3005/detailinfo"
const DETAILBTMURL = "http://49.234.85.212:8080/products/pay/"
const DETAILURL = "http://49.234.85.212:8080/products/detail/"

export default{
    getdetails(name,paynum,phone,cb){
        fetch(DETAILBTMURL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                product_name:name,
                pay_num:paynum,
                phone_num:phone
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