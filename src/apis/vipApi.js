import {BASEURL} from "../commons/Config"
const VIPURL = `${BASEURL}/user/vip/`;
export default {
  getvipInfo (cb) {
    fetch(VIPURL).then(res => {
      res.json().then(cb)
    });
  },
  vip(user,title,money,cb){
    fetch(`${VIPURL}?user=${user}&title=${title}&money=${money}`,{method:'get'}).then(res=>{
        res.json().then(cb)
    })
}
}
