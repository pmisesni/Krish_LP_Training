const arr = [5,10,15,20,25,30]
const num = 25 //Enter the number you want to search

for(const [i,value] of arr.entries()){
    if(num === value){
        console.log("Your number is in index " + i)
    }
}