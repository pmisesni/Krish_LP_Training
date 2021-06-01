const word_1 = "Listen"
const word_2 = "Silent"
let map = new Map()

function checkAnagrams(str1, str2){
   
    if(str1.size === str2.size){

        for(let ch of str1.toLowerCase()){
            map.set(ch,ch)
        }
       
        for(let ch of str2.toLowerCase()){
            map.delete(ch)
        }
        return map.size === 0
    }
    return false
}
console.log(checkAnagrams(word_1,word_2))