const setCashbookUrl="http://49.234.85.212:8080/user/cashbookinfo/";
// const setCashbookUrl="http://localhost:3005/cashbookinfo";
export default {
    checkUserSet(year,month,phone,cb){
        fetch(setCashbookUrl,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                year:year,
                month:month,
                phone:phone
            })
        }).then(res=>{
            res.json().then(cb)
        })
    }

    // checkUserSet(cb){
    //         fetch(setCashbookUrl).then(res=>{
    //             res.json().then(cb)
    //         })
    //     }
}
