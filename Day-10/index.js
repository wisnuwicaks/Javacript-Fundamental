// let mobil = {tahun :2000,
//             merek : 'Toyota',
//             harga : 10000
//         }
// let arr =[1,2,3,4]
// console.log(1,2,3)

// // console.log(...arr)

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// console.log([...arr1,...arr2])

// let mobil2 = {...mobil,merek:'Mercedes'}

// console.log(mobil2)
class Orang {
    constructor(nama,pekerjaan,umur,pic) {
        this.nama = nama
        this.pekerjaan = pekerjaan
        this.umur = umur
        this.pic = pic
    }
}
let dataOrang = [
    new Orang('QWE','DEVELOPER CSS',50,'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'),
    new Orang('ASD','DEVELOPER GAME',51,'https://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG9.png'),
    new Orang('ZXC','DEVELOPER WEB',52,'https://outletz.id/wp-content/uploads/2018/02/Bill-Gates-PNG-File.png')
]

console.log(dataOrang.sort())