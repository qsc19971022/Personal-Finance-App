import {BASEURL} from "../commons/Config";

const GIFTURL=`${BASEURL}/products/novice_list/`;

export default {
    getProductInfo(cb){
        fetch(GIFTURL).then(res=>{
            res.json().then(cb)
        })
    }
}