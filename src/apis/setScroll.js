const Scrollurl="http://49.234.85.212:8080/products";
// const Scrollurl="http://localhost:3005/scrollinfo";
export default {
    getscroll(id, cb) {
        if(id==0){
            fetch(`${Scrollurl}/all/`, {method: 'get'}).then(res => {
                res.json().then(cb)
            })
        }else{
        fetch(`${Scrollurl}/series${id}/`, {method: 'get'}).then(res => {
            res.json().then(cb)
        })
        }
    }
}