const list = [2,0,6,3,7,11,4]
let min

function selectionSort(arr){
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
    return arr
}

console.log(selectionSort(list))