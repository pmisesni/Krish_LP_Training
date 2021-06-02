const arr = ["Cad","ged","bed","abc"]
let min = 0
let map = new Map()
const new_arr = []

for(const s of arr){
    str = s.replace(/\s+/g, '').toLowerCase()
    let value = 0
    for(let j = 0; j< str.length; j++){
        value = value + str.charCodeAt(j)
    }
   
    if(map.has(value)){
        value += 1
    }
    map.set(value,str)
   
}

let new_map = new Map([...map.entries()].sort())

new_map.forEach((value)=>{
    console.log(value)
})