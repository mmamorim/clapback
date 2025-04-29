
export function parserGet(obj, path) {
    if (path.charAt(0) != '/') {
        path = '/' + path
    }
    let childs = path.split("/")
    //console.log(childs);
    let value = obj
    if (childs[1].trim() != '') {
        for (let i = 1; i < childs.length; i++) {
            if (childs[i] != '') {
                if (value[childs[i]]) {
                    value = value[childs[i]]
                } else {
                    value = null
                    break
                }
            }
        }
    }
    return value
}

export function parserSet(obj, path, elem) {
    if (path.charAt(0) != '/') {
        path = '/' + path
    }
    let childs = path.split("/")
    //console.log(childs);
    let value = obj
    if (childs[1].trim() != '') {
        for (let i = 1; i < childs.length; i++) {
            if (childs[i] != '') {
                if (i == childs.length - 1) {
                    if(elem === null) {
                        //console.log("deleting key...");
                        delete value[childs[i]] 
                    } else {
                        value[childs[i]] = elem
                    }
                } else {
                    if (value[childs[i]]) {
                        value = value[childs[i]]
                    } else {
                        value[childs[i]] = {}
                        value = value[childs[i]]
                    }
                }
            } else {
                console.error('Invalid path - / expected')                    
                return null
            }
        }
    }
    return elem
}