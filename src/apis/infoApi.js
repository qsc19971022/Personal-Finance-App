import {BASEURL} from "../commons/Config"
export default {
    async getInfoPage(){
        //let res= await fetch(`${BASEURL}/info`);
        let res= await fetch(`${BASEURL}/info/info/`);
        let data=await res.json();
        return data;
    }
}
