const tripleTrouble = (one, two, three) => {
  // Buatlah sebuah function yang menerima 3 string 
  // dan setiap string memiliki panjang yang sama
  // Input: "aa", "bb", "cc"
  // Output: "abcabc"

  // Input: "ab", "cd", "ef"
  // Output: "acebdf"

  // write your code here
hasil = ''
  for(i=0;i<one.length;i++){
    hasil += one[i] + two[i] +three[i]

  }
  return hasil

}

console.log(tripleTrouble('aa','bb','cc'))
const altCaps = (string) => {
  // Buatlah sebuah function yang menerima sebuah string
  // Outputnya sebuah array yang index pertama adalah semua 
  // huruf yg posisinya ganjil menjadi kapital, index kedua
  // semua huruf yg posisinya genap jadi kapital

  // Input: "abcdef"
  // Output: ["AbCdEf", "aBcDeF"]

  // write your code here
}