// const repFilter = (arr,cb) =>{
//     arrBaru = []
//     for(i=0;i<arr.length;i++){
//         if(cb(arr[i],i,arr)==true){
//             arrBaru.push(arr[i])
//         }
//     }
//     return arrBaru
// }

// console.log(repFilter([1,2,3,4,5,6,7],(val,idx,arr)=>{
//     return val >3
// }))

// const digitalRoot = (number) =>{
//     stringAngka = String(number)
//     while (stringAngka.length>1){
//         arrStringAngka = stringAngka.split('')
//         jumlahInt = arrStringAngka.reduce((a,b)=>(parseInt(a)+parseInt(b)),0)
//         stringAngka = String(jumlahInt)
//     }
//     return parseInt(stringAngka)
// }

// console.log(digitalRoot(987))

arr1 = [1,2,3,5,2,5]
arr2 = [2,3,5,2,5,7]
const distinctArray =(arr1,arr2) =>{
    arrBaru = []
    arrBaru.push[arr1[0]]
    for (a of arr1){
      if(arrBaru.find(val=>val==a)==undefined)
      {
          arrBaru.push(a)
      }
    }
    for(b of arr2){
        if(arrBaru.find(val=>val==b)==undefined)
        {
            arrBaru.push(b)
        }
    }
    return arrBaru
}
console.log(distinctArray(arr1,arr2))

arr1.filter((val,index,arr)=>)

