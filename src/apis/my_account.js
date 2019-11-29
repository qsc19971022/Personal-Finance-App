import {BASEURL} from "../commons/Config"
export default {
    async getInfoPage(user_phone){
        let res= await fetch(`${BASEURL}/account/myaccount?user_phone=${user_phone}`);
        let data=await res.json();
        return data;
    }
}
