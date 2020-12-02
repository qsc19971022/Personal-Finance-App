import {BASEURL} from "../commons/Config"
const GETMONEYURL = `${BASEURL}/`;
export default {
  getgetmoneyInfo (cb) {
    fetch(GETMONEYURL).then(res => {
      res.json().then(cb)
    });
  }
}
