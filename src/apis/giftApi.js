import {BASEURL} from "../commons/ZQConfig";

const GIFTURL=`${BASEURL}/gift`;

export default {
    getProductInfo(cb){
        fetch(GIFTURL).then(res=>{
            res.json().then(cb)
        })
    }
}