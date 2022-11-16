export const asyncGetItem = (key:string) =>{
    return Promise.resolve().then(function() {
        return JSON.parse(localStorage.getItem(key) || '');
    })

}