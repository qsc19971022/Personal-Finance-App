const producturl="http://49.234.85.212:8080/products/all/";
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