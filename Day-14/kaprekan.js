
// const kaprekan =(angka)=>{
//     while (angka !==6174){
        
//     }
// }


// console.log(kaprekan(2456))

let a = 7362
let b = String(a).split('')
asc = parseInt(b.sort().join(''))
dsc = parseInt(b.sort((a,b) => b-a).join(''))

console.log(dsc)