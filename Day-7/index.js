// // dataBuah = [{nama: 'Jeruk', harga : 1000, stok:5,totalInputBuah : 0},
// //                 {nama: 'Mangga', harga : 1000, stok:5,totalInputBuah : 0},
// //                 {nama: 'Leci', harga : 1000, stok:5,totalInputBuah : 0}
// //             ]

// // createNewItem(nama,harga,stok){

// //     return {
// //         nama,
// //         harga,
// //         stok
// //     }

// // }

// // let orang = {
// // nama:'John Doe',
// // tahunlahir:'2000',
// // asal: 'Manado'
// // }

// // let kerjaan = {
// //     nama:'John Doe',
// //     tahunlahir:'2000',
// //     asal: 'Manado',
// //     pekerjaan : 'PNS',
// //     gaji : 10000000
// // }

// // let kendaraan = {
// //     nama:'John Doe',
// //     tahunlahir:'2000',
// //     asal: 'Manado',
// //     jenis : 'mobil',
// //     merek : 'toyota',
// //     warna : 'merah'
// // }

// // function cetakanOrang (nama, tahunlahir,asal)
// // {
// //     return {
// //         nama,
// //         tahunlahir,
// //         asal
// //     }
// // }

// class Person {

//     constructor(nama,tahunlahir,asal) {
//         this.nama = nama
//         this.tahunlahir = tahunlahir
//         this.asal = asal
//     }
// }

// class Kerjaan extends Person {
//     constructor(nama,tahunlahir,asal,pekerjaan,gaji){
//         super(nama,tahunlahir,asal)
//         this.pekerjaan = pekerjaan
//         this.gaji = gaji
//     }
// }

// class Kendaraan extends Person {
//     constructor(nama,tahunlahir,asal,jenis,merek,warna){
//         super (nama,tahunlahir,asal)
//         this.jenis=jenis
//         this.merek=merek
//         this.warna=warna
//     }
// }

// let a = new Person('Naruto', 1900, 'Jepang')
// let b = new Kendaraan('Bejo',1900,'rumah','mobil','toyota','merah')


// console.log(b.nama)

// // let array = [2,8,3,5,6,8]
// // let hasil = 0

// // function sortingAngka(array){
// // var temp 
// //    for(let a=0;a<array.length;a++){
// //         for(i=0;i<array.length;i++){
// //             if (array[i] > array[i+1])
// //             {
// //                 temp = array[i]
// //                 array[i] = array[i+1]
// //                 array[i+1] = temp
// //             }
// //         }
// //    }
// //  return array;
// // }
// // sortingAngka(array)

// //  if (array.length%2==0){
// //       hasil = (array[(array.length)/2]+array[((array.length)/2)-1])/2
// //   }
// //   else{
// //      hasil = array[(array.length-1)/2]
// //   }

// // console.log(hasil)

// // let arr = [1,2,3,4,6,76,7,8,8]
// // let arr1 = ['ca','efsef','2e','fdssd']
// // let string = 'abcde fghijklm'
// // //console.log(...arr1)
// // hasil = string.split(' ',1)
// // console.log(hasil)


// class Produk {
//     constructor(nama,harga,stok) {
//         this.nama = nama
//         this.harga = harga
//         this.stok = stok
//         this.qty = 0
//     }
//     }

//     class HP extends Produk {
//     constructor(nama,harga,stok,qty, waranty) {
//       super(nama,harga,stok,qty)
//         this.waranty = waranty
//     }
//     }

//     class Buah extends Produk {
//     constructor(nama,harga,stok,qty, expired) {
//       super(nama,harga,stok,qty)
//         this.expired = expired 
 
//     }
//     }
//     class Baju extends Produk {
//     constructor(nama,harga,stok,qty, size) {
//       super(nama,harga,stok,qty)
//         this.size = size
//     }
//     }

//     let arrItems = [new Buah('Jeruk',1000,5,0,'10-10-2020'),
//                     new Baju('Keren',1000,5,0,'L'),
//                     new HP('Xiaomi',1000,5,0,true)
//                     ]
//     arrItems.push(new Buah('ASl',1000,5,0,'10-10-2020'))
//     arrItems.push(new Buah('AwwwwwwSl',1000,5,0,'10-10-2020'))

//     console.log(arrItems[0].constructor.name)


// let a = {nama :'sss', kelas:'wwww', c ={jenis:'wwww',merek:'qqqqq'}}
// console.log(a)

class Produk {
  constructor(nama,harga,stok,qty) {
      this.nama = nama
      this.harga = harga
      this.stok = stok
      this.qty = 0
  }
  }

  class HP extends Produk {
  constructor(nama,harga,stok,qty, waranty) {
    super(nama,harga,stok,qty)
      this.waranty = waranty
  }
  }

  class Buah extends Produk {
  constructor(nama,harga,stok,qty, expired) {
    super(nama,harga,stok,qty)
      this.expired = expired 
  }
  }
  class Baju extends Produk {
  constructor(nama,harga,stok,qty, size) {
    super(nama,harga,stok,qty)
      this.size = size
  }
  }


  let arrItems = [new Buah('Jeruk',1000,5,0,'10-10-2020'),
                  new Baju('Zalora',1000,5,0,'L'),
                  new Buah('Jeruk',1000,5,0,'10-10-2020'),
                  new HP('Xiaomi',1000,5,0,true)
                  ]
let arrayTampung =[]
let string=''
    for(i=0;i<arrItems.length;i++){
      if (arrItems[i].constructor.name=='Buah'){
      arrayTampung.push(i)
    }
    }
    console.log(arrayTampung)
    for(i=0;i<arrayTampung.length;i++)
    {
      string+=`${arrItems[arrayTampung[i]].nama} ${arrItems[arrayTampung[i]].harga} ${arrItems[arrayTampung[i]].stok}`
    }
    console.log(string)
   // console.log(arrItems[0].harga)