const list = ["ddc","ec123","dea","ec111","bed","abc"]
const sorted_array = []


function sortingStringsByValue(arr){
   
    for(const s of arr){
        let str = s.replace(/\s+/g, '').toLowerCase()
        let temp_str = str
        let value = 0
        let dg = 0
       
        if(temp_str.match(/\d+/g) !== null){
            let new_str = temp_str.split(/(\d+)/)
            str = new_str[0]
            dg = new_str[1]
        }
       
        for(let j = 0; j< str.length; j++){
            value = value + (str.charCodeAt(j)-96)
        }
   
        sorted_array.push({value,str : (dg>0) ? str+dg : str})
       
}

    return sorted_array.sort((a, b) => {
      if (a.value > b.value) return 1
      if(a.value === b.value){
          if(a.str[0] > b.str[0]) return 1
          return (Number(a.str.match(/(\d+)/g)[0]) - Number((b.str.match(/(\d+)/g)[0])));
      }
      return -1
    })
}

sortingStringsByValue(list).forEach((value)=>{
    console.log(value.str)
})
