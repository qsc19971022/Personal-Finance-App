import {BASEURL} from "../commons/lcyConfig"
const VIPURL = `${BASEURL}/vip`;
export default {
  getvipInfo (cb) {
    fetch(VIPURL).then(res => {
      res.json().then(cb)
    });
  }
}
