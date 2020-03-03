//let text=[1,2,3,4,5,undefined]
//console.log(text.slice(2,5))
// let a = new Date()
// console.log(a.getMonth())

// array = ['aaaa','bbbb','cccc']

// array.push('ddddd')

// array[7] = 'hallo'
// console.log(array)
// console.log(array[5])

// var arr = [3,7,6,9,5]
// var hasil = 0
// for (i=0; i<arr.length;i++)
// {
//     hasil +=arr[i] 
// }


// arr.forEach(
//     function(val) {
//         hasil += val
//     }
// )
// console.log(hasil)

// for (let i of arr)
// {
//     console.log(i)
// }


// console.log(arr.reduce((a,b) => a+b))


// let string = 'abcdefghijklmnopqrstuvwxyz'

// console.log(string.split('abc'))

// var namaBuah = ['Jeruk','Mangga','Leci','Apel'];
// var hargaBuah = [1000,1000,1000,1000];
// var stokBuah = [5,5,5,5];
// var beliBuah = ['','','','']; 

// var listStokHarga =''

// for (i = 0;i<namaBuah.length;i++)
// {
//    listStokHarga += "Harga " + namaBuah[i] + "=" +hargaBuah[i]+ "Jumlah Stok" +stokBuah[i] +"\n"
// }
// console.log(listStokHarga )

let arr = ['Text','String','Tulisan','Doraemon']

// for (i=0;i<arr.length;i++)
// {
//     if (arr[i] == 'Tulisan')
//     console.log(i)
// }

arr.splice(-1,1)
console.log(arr)
