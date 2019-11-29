import {BASEURL} from "../commons/Config"
export default {
    async getInfo1Page(user_phone){
        let res= await fetch(`${BASEURL}/bank/show?user_phone=${user_phone}`);
        let data=await res.json();
        return data;
    }
}
