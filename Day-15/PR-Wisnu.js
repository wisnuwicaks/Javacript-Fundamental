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

console.log(tripleTrouble('ab','cd','ef'))


const altCaps = (string) => {
  // Buatlah sebuah function yang menerima sebuah string
  // Outputnya sebuah array yang index pertama adalah semua 
  // huruf yg posisinya ganjil menjadi kapital, index kedua
  // semua huruf yg posisinya genap jadi kapital

  // Input: "abcdef"
  // Output: ["AbCdEf", "aBcDeF"]

  // write your code here
  output = []
  lowercase = string.toLowerCase()
  uppercase = string.toUpperCase()

    ganjilUpper = ''
    genapUpper = ''
    for(i=0;i<lowercase.length;i+=2){
      ganjilUpper +=uppercase[i]
      ganjilUpper +=lowercase[i+1]
      genapUpper +=lowercase[i]
      genapUpper +=uppercase[i+1]
    }
    output.push(ganjilUpper)
    output.push(genapUpper)
  
  return output

}

console.log(altCaps('JavaScript'))