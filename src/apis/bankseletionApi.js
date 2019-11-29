import {BASEURL} from "../commons/Config"
const BANKSELETIONURL = `${BASEURL}/user/product/`;
// const BANKSELETIONURL = `${BASEURL}/bankseletion`;
export default {
  getbankseletionInfo (cb) {
    fetch(BANKSELETIONURL).then(res => {
      res.json().then(cb)
    });
  }
}
