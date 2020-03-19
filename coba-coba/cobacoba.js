// // // const binaryArrayToNumber = arr => {
// // //     // your code
// // //     hasil=0
// // //     for(i=arr.length-1;i>=0;i--){
// // //       hasil+=(arr[i]*Math.pow(2,i))
// // //     }
// // //     return hasil
// // //   };

// //   // console.log(binaryArrayToNumber([1,1,0,1,1,0]))

// // //   function duplicateEncode(word){
// // //     hasil = ''
// // //   wordLower = word.toLowerCase()
// // //   wordArr = wordLower.split('')
  
// // //   for(i=0;i<wordArr.length;i++){
// // //     temp = [...wordArr]
// // //     temp.splice(i,1)
// // //       if(temp.join('').includes(wordArr[i])){
// // //         hasil +=')'
// // //       }
// // //       else{
// // //         hasil +='('
// // //       }
      
     
// // //   }
// // //   return hasil
// // // }

// // function duplicateEncode(word){
// //   return word
// //     .toLowerCase()
// //     .split('')
// //     .map( function (a, i, w) {
// //       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
// //     })
// //     .join('');
// // }
// // // console.log(duplicateEncode('wisnuu'))

// // a= 'wisnuuuuu'
// // b= a.split('')
// // // arr = kata.split('')
// // // arr2 = [...arr]
// // // arr2.splice(5,1)


// // // console.log(arr2.includes(arr[5]))
// // // console.log(arr2)

// // // console.log(b.indexOf('u') == b.lastIndexOf('u') ? '(' : ')')
// // console.log(b)
// // b.forEach(element => {
// //   console.log(element+' '+b.indexOf(element) +''+b.lastIndexOf(element) )
// //  b.indexOf(element)
// // });

// function duplicateCount(text){
//   //...
//   // diff = ''
//   // iter = text.toLowerCase().split('')
//   // iter.forEach((element,index) =>{
//   // temp = [...iter]
//   // temp.splice(index,1)
//   // if(temp.includes(element)&& !diff.includes(element))
//   //   diff +=element
//   // })

//   hasil = text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) //ini returnnya array
//   return hasil
// }

// // function duplicateCount(text){
// //   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// // }

// console.log(duplicateCount('aaaabbccd'))


// function openOrSenior(data){
//   // ...
//   return data.map((current,index,array) =>{
//     return current[0]>=55 && current[1]>7? 'Senior' : 'Open'
//   })
// }

// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

var number = function(busStops){
  // Good Luck!
  return busStops.map(([a,b])=>a-b).reduce((a,b)=>a+b,0)
  // parameter a,b yaitu a=totalSaatini, b=elementSaatini, 0 adalah jumlah awal a
}

console.log(number([[10,0],[3,5],[5,8]]))