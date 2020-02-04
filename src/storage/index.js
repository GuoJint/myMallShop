
//封装storage可以让session里的数据干净整洁，且为JSON对象更易操作
const STORAGE_KEY = "mall";
export default {
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name,value)
        }else{
        let val = this.getStroage()
        val[key]=value
        window.sessionStorage.setItem(STORAGE_KEY,val)
        }
    },
    getItem(key,module_name){
        if(module_name){ //如果有模块名先通过模块名，通过回调函数获取模块名下的值，再通过这个值获取key的值
            let val = this.getItem(module_name)
            if(val) return val[key]
        }
        return this.getStroage()[key]
    },
    getStroage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY))
    },
    clear(key,module_name){
        let val = this.getStroage();
        if(module_name){ //如果有模块名，删除模块名下的key
            if(!module_name) return
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY,val)
    }
}