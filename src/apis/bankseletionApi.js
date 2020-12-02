import {BASEURL} from "../commons/Config"
const BANKSELETIONURL = `${BASEURL}/get_fund/`;
// const BANKSELETIONURL = `${BASEURL}/bankseletion`;
export default {
  getbankseletionInfo (cb) {
    fetch(BANKSELETIONURL).then(res => {
      res.json().then(cb)
    });
  }
}
