const BASEURL='http://49.234.85.212:8080/info/user_read/'
//const BASEURL='http://localhost:3000/infoDetail'

export default {
    getInfoDetail(info_id,user_phone,token,cb){
        fetch(`${BASEURL}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
            body:JSON.stringify({
                user_phone:user_phone,
                token:token,
                info_id:info_id
            })
        }).then(res=>res.json().then(cb))
    }
    /*async getInfoDetail(){
        let res=await fetch(BASEURL);
        let data=await res.json();
        return data;
    }*/
}
