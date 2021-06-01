const word = "Apple orange banana"
const str = word.replace(/\s+/g, '').toLowerCase()

const arr = []

for(let ch of str){
    arr.push(ch)
}

for(const [i,ch] of arr.entries()){
    let count = 1
    for(let j = i + 1; j < str.length; j++){
        if(ch === str[j]){
            count++
            arr[j] = ''
        }
    }
   
    if(ch !== ''){
         console.log("Letter " + ch +" has occurance of " + count)
    }
}
