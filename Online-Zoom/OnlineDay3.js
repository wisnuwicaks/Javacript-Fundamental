//========Triangle===========//
const traingle =(baris)=>{
    arrUtama =[]
    for(i=1;i<=baris;i++){
        arrIsi=[]
        for(a=1;a<=i;a++){
        arrIsi.push(a)
        }
        arrUtama = [...arrUtama,[...arrIsi]]
        
    }
    return arrUtama
}
console.log(traingle(10))

////========SegitigaGanjil===========//
// const traingleGanjil =(baris)=>{
//     arrUtama =[]
//     a=1
//     for(i=1;i<=baris;i++){
//         arrIsi=[]
//         while(arrIsi.length<i){   
//         if(a%2 !==0){
//         arrIsi.push(a)
//         }
//         a++
//         }
//         arrUtama = [...arrUtama,[...arrIsi]]
//     }
//     return arrUtama
// }
// console.log(traingleGanjil(15))

// //========Array Fibonacci===========//
// const triangleFibo = (baris) =>{
// arr = [1,1,2]
// for(i=3;i<10000;i++){ //membuat baris fibonacci
// arr[i] = arr[i-1]+arr[i-2]
// }
// arrHasil = []
// for(i=1;i<=baris;i++){
// arrHasil.push(arr.splice(0,i))
// }
// return arrHasil
// }
// console.log(triangleFibo(7))


// //========Segitga Pascal===========//
// const trianglePascal = (baris) =>{
// arr1 =  [1]
// arr2 = [1,1]
// arrHasil = [[...arr1],[...arr2]]
// arrJumlah = []
// iterasi = 1
//     while (iterasi <=baris-2){
//         for(i=1;i<arrHasil[arrHasil.length-1].length;i++){
//         arrJumlah[i-1] = arrHasil[arrHasil.length-1][i]+arrHasil[arrHasil.length-1][i-1]
//         }
//         arrJumlah.unshift(1)
//         arrJumlah.push(1)
//         arrHasil.push(arrJumlah)
//         arrJumlah = []
//         iterasi ++
//     }
//     return arrHasil
// }
// console.log(trianglePascal(9))