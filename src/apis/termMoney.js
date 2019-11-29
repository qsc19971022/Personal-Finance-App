import {BASEURL} from "../commons/Config"

const TERMURL = `${BASEURL}/products/time_list/`

export default {
    getTermInfo(cb){
        fetch(TERMURL,{method:'get'}).then(res=>{
            res.json().then(cb)
        })
    }
}