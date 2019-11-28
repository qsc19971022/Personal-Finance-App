import {BASEURL} from "../commons/fmfconfig"
export default {
    async getInfoPage(){
        let res= await fetch(`${BASEURL}/info`);
        let data=await res.json();
        return data;
    }
}
