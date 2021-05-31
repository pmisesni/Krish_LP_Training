const array = [113,112,115,114,111,117]
let totalWithMissingNum = 0
let lastDigit = array[0] % 10
let startingRange = array[0] - lastDigit

function findMissingNumber(arr,len){
   
    for(const [i, value] of arr.entries()){
        if(array[0] > 10){
            totalWithMissingNum = totalWithMissingNum + (value - startingRange)
        }else{
           totalWithMissingNum = totalWithMissingNum + value
        }
       
    }
   
    let total = ((len + 1) * (len + 2))/2
   
    let missingNum = total - totalWithMissingNum
   
    return (array[0] > 10 ) ? missingNum + startingRange : missingNum

}

console.log("Missing number from this sequence is " + findMissingNumber(array,array.length))