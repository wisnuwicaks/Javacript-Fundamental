// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja 


var kata ='Belajar JavaScript'
var urutkanString = ['Anjing','Kucing','Buaya','Macan','Singa','Tikus']
var arrayCampur = [142,234,'222','DuaDuaDua']
var urutkanAngka = [2,4,6,5,1,8,5,8,9]

hapusVocal(kata)
sortingString(urutkanString)
sortingAngka(urutkanAngka)
angkaTerbesar(urutkanAngka)
filterAngka(arrayCampur)
removeChar(kata)


// 1
function hapusVocal(kata){
    
    var tampung
    var hasil = ''

    for (a=0;a<kata.length;a++)
    {
    tampung = kata[a]
        if (tampung !=='A' && tampung !== 'I' && tampung !== 'I' && tampung !== 'I' && tampung !== 'I'
        && tampung !== 'a' && tampung !== 'i'&& tampung !== 'u'&& tampung !== 'e'&& tampung !== 'o' )
        {
            hasil += tampung
        }
    }
    return console.log(hasil)
}

// 2
function sortingString(urutkan){
    var hasil = ''
    var temp 
   for(let a=0;a<urutkan.length;a++){
        for(i=0;i<urutkan.length-1;i++){
            if (urutkan[i].toUpperCase() >urutkan[i+1].toUpperCase())
            {
                temp = urutkan[i]
                urutkan[i] = urutkan[i+1]
                urutkan[i+1] = temp
            }
        }
       
   }
    //return console.log(hasil)
    for(let a=0;a<urutkan.length;a++){
        hasil += urutkan[a] + ' '
    }
   return console.log(hasil)
}

// 3
function sortingAngka(urutkanAngka){
    var hasil = ''
    
    var temp 
   for(let a=0;a<urutkanAngka.length;a++){
        for(i=0;i<urutkanAngka.length;i++){
            if (urutkanAngka[i] > urutkanAngka[i+1])
            {
                temp = urutkanAngka[i]
                urutkanAngka[i] = urutkanAngka[i+1]
                urutkanAngka[i+1] = temp
            }
        }
   }
    //return console.log(hasil)
    for(let a=0;a<urutkanAngka.length;a++){
        hasil += urutkanAngka[a] + ' '
    }
   return console.log(hasil)
}

// 4
function angkaTerbesar(urutkanAngka){
    var max
   for(let a=0;a<urutkanAngka.length;a++){
       max = urutkanAngka[a]
       for (i=0;i<urutkanAngka.length;i++){
        if (urutkanAngka[i]> max)
        {
            max = urutkanAngka[i]
           }
       }
   }
    return console.log(max)
}

// 5
function filterAngka(arrayCampur){
    var tampung
    var hasil = ''

    for (a=0;a<arrayCampur.length;a++)
    {
    tampung = arrayCampur[a]
        if (typeof(tampung) == 'number'  )
        {
            hasil += tampung +' '
        }
    }
    return console.log(hasil)
}

// 6
function removeChar(kata){
    var tampung
    var hasil = ''

    for (a=0;a<kata.length;a++)
    {
    tampung = kata[a]
        if (a!=0 && a!=(kata.length-1)) 
        {
            hasil += tampung
        }
    }
    return console.log(hasil)
}