const navURL =`http://49.234.85.212:8080/ico/img/`;
export default {
    getIndexinfoByUserId(cb){
        fetch(navURL).then(res=>{
            res.json().then(cb);
        })
    }

}