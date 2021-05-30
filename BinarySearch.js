const arr = [5,10,15,20,25,30,35,40,45,50]
const num = 30 //Enter the number you want to search

let min = 0
let max = arr.length - 1

while(min <= max){
    let mid = Math.floor((min + max) / 2)
   
    if(arr[mid] === num){
        console.log("Your number is in index " + mid)
        process.exit()
    }else if(arr[mid] > num){
        max = mid - 1
    }else {
        min = mid + 1
    }
}
console.log("your number is not in the array")