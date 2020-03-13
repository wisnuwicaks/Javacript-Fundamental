
//============Fungsi Caesar Cipher===========//
var letters = 'abcdefghijklmnopqrstuvsxyz'

const caesarCipher = (word, num) => {
    letterArray = 'abcdefghijklmnopqrstuvsxyz'.split('')
    posisiDicari = word[0]
    shiftedWord=''
    for(i=0;i<letterArray.length;i++){
        if(letterArray[i]==posisiDicari){
        posisiDitemukan=i
        break
        }
    }
    
    for(i=1;i<=num;i++){
       a = letterArray.shift()
       letterArray.push(a)
    }

    for(i=posisiDitemukan;i<=posisiDitemukan+2;i++){
        shiftedWord+=letterArray[i]
    }

    return shiftedWord

}
console.log('Hasil caesar cipher :' +caesarCipher('abc', 28))


//============Fungsi Plus Minus===========//
numArr = [1,2,3,4,5,6]
const plusMinus = (numArr) => {
  hasil = numArr[0]
  numArr.shift()
  while(numArr[0]!==undefined) {
    hasil+=numArr.shift()
    if(numArr[0]!=undefined){
    hasil-=numArr.shift()
    }
  }
  return hasil
}
console.log(`Hasil fungsi plusMinus : ` + plusMinus(numArr))



//============Fungsi Palindrom===========//
let stringUji = 'Nurses Run'
const isPalindrome = (isPalindrome) => {
    return isPalindrome.toLowerCase().replace(/\s/gi,'')==(isPalindrome.toLowerCase().replace(/\s/gi,'').split('').reverse().join(''))
}

console.log(`Apakah kata ${stringUji} palindrom? `+isPalindrome(stringUji))
