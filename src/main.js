import cb from "./clapback/clapback.js";
import user from "./user.js"

//console.log("pathParser",pathParser);
await cb.init()
//console.log("cb",cb);

//await cb.set("users/rui",null)
//await cb.set("users/rui",{
//    id: "rui",
//    name: "Rui",
//    email: "rui@rui.com"
//})

setTimeout(async () => {
    await cb.set("fruits/uva",{
        id: "Uva",
        name: "Uva",
        cor: "Rosa"
    })    
},3000)

//cb.get("users")
//cb.get("fruits")
