
// traingle =(baris)=>{
//     arrUtama =[]
//     for(i=1;i<=baris;i++){
//         arrIsi=[]
//         for(a=1;a<=i;a++){
//         arrIsi.push(a)
//         }
//         arrUtama = [...arrUtama,[...arrIsi]]
        
//     }
//     return arrUtama
// }
// console.log(traingle(6))

// traingle =(baris)=>{
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
// console.log(traingle(5))

// const triangleFibo = (baris) =>{
// arr = [0,1,1]
// for(i=3;i<10000;i++){ //membuat baris fibo
// arr[i] = arr[i-1]+arr[i-2]
// }
// arrHasil = []
// for(i=1;i<=baris;i++){
// arrHasil.push(arr.splice(0,i))
// }
// return arrHasil
// }
// console.log(triangleFibo(3))

