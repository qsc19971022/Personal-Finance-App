import {BASEURL} from "../commons/Config"
export default {
    async getInfoPage(user_phone){
        let res= await fetch(`${BASEURL}/user/youhuiquan/?phone=${user_phone}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
        });
        let data=await res.json();
        return data;
    }
}
