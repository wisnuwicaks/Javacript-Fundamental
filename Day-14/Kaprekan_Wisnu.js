const kaprekan =(angkaInString)=>{
    iterasi = 0
    logPengurangan = ''
    while (angkaInString !=='6174'){
    arrNumberInString = angkaInString.split('')
    asc = arrNumberInString.sort().join('') //sorting sekaligus concat jadi Angka dengan tipe String
    dsc = [...arrNumberInString].sort((a,b) => b-a).join('') //sorting sekaligus concat jadi Angka dengan tipe String
    pengurangan=parseInt(dsc)-parseInt(asc)//hasil pengurangan sudah Integer
    angkaInString = String(pengurangan) //convert ke string
    logPengurangan += `Pengurangan iterasi ke-${iterasi+1} : ${angkaInString}\n`
    iterasi +=1 //menghitung berapa kali looping
    }
    return logPengurangan + 'looping sebanyak ' +iterasi
}
console.log(kaprekan('0099'))

