const list = [25,10,5,30,2,1]
let min

function findThirdLargestNum(arr){
    for(let i = 0; i < arr.length; i++){
        min = arr[i]
        for(let j = i + 1; j < arr.length; j++){
            if(min > arr[j]){
                min = arr[j]
                arr[j] = arr[i]
                arr[i] = min
            }
        }
       
    }
    return arr[2]
}

console.log(findThirdLargestNum(list))