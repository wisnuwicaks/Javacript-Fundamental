// function jumlah (param1,param2){
//     return param1+param2
// }

//jumlah(param1,param2)

// const jumlah = (param1,param2) => param1==param2

// const alphaValue =(str) => {
//     // str='afdfe'
//     // str=str.split('')
//     let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result=0
//     for(let i=0;i<str.length;i++){
//         result[i] += (alpArray.indexOf(str[i] +1))
//     }
//     return result
// }

// console.log(alphaValue('abc'))

// const alphaValue =(str) => {
//     // str='afdfe'
//     str=str.split('')
//     var alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     //let result=0
//     let result=''
//     for(let i=0;i<str.length;i++){
//         result += `${(alpArray.indexOf(str[i])+1)}` + ' ' 
//     }
//     return result
// }
// //var alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
// console.log(alphaValue('def'))

class Product {
    constructor(nama,harga,stok){
    this.nama=nama
    this.harga=harga
    this.stok=stok
    }
}

let arr = [ new Product('apel',2000,20),
            new Product('mangga',3000,20),
            new Product('jeruk',4000,20),
            new Product('nangka',5000,20),
            new Product('rambutan',6000,20),
            new Product('salak',7000,20)          
            ]

// const search =(str) => {
//     let hasil = []
//     for(i=0;i<arr.length;i++)
//     {
//         if (arr[i].nama.includes(str)){
//         hasil.push=arr[i]
//         }
    
//     }
//     return hasil
// }

// const minMax =(min,max) => {
//     let hasil=[];
//     for(i=0;i<arr.length;i++)
//     {
//         if (arr[i].harga>=min && arr[i].harga<=min){
//         hasil.push=arr[i]
//         }
//     }
//     return hasil
//}

const search =(str) => {
    return arr.filter((value) => value.nama.includes(str))
}

const minMax =(min,max) => {
    return arr.filter((value) => value.harga>=min && value.harga<=max)
}

arrJumlah = [-7,5,-6,1,6]
const terimaArray = (arrJumlah) => {
    let positif =[]
    let negatif =[]
    let hasil = [0,0]
    positif = arrJumlah.filter((value) => value>0 )
    negatif = arrJumlah.filter((value) => value<0 )

    // for(i=0;i<positif.length;i++)
    // {
    //     hasil[0] +=positif[i]
    // }
    // for(i=0;i<negatif.length;i++)
    // {
    //     hasil[1] +=negatif[i]
    // }

    return hasil
}
//console.log(minMax(2000,7000))
//console.log(search('mangga'))

console.log(terimaArray(arrJumlah))