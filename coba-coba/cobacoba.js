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

// var number = function(busStops){
//   // Good Luck!
//   return busStops.map(([a,b])=>a-b).reduce((a,b)=>a+b,0)
//   // parameter a,b yaitu a=totalSaatini, b=elementSaatini, 0 adalah jumlah awal a
// }

// console.log(number([[10,0],[3,5],[5,8]]))
// function arrayDiff(a, b) {
//   for(arrB of b){
//   a= a.filter(element => element !==arrB)
//   }
//   return a
//   }

// console.log(arrayDiff([1,2,2], [2]))

// var str = "asdrfdxkuysww";
// var re = /[^aiueo]+/g;
// console.log((str.match(re)).join(''));

// function solve(s) {
//   alpha = "abcdefghijklmnopqrstuvwxyz".split('')
//   filterVowel = s.match(/[^aiueo]+/g).join('').split('').map(element=>alpha.indexOf(element)+1)
//   return Math.max(...filterVowel);
// };

// console.log(solve('wisnu'))

// ukuran = 5
// hasil = ''
// for(i=1;i<=ukuran;i++){
//   for(a=1;a<=ukuran-i;a++){
//       hasil += ' '
//   }
//   for(b=1;b<=i;b++){
//       hasil +=`*`
//   }
//   hasil +=`\n`
// }

// console.log(hasil)

// ukuran = 5
// hasil = ''
// for(i=1;i<=ukuran;i++){
//   for(a=1;a<=ukuran;a++){
//       hasil +=`*`
//   }
//   hasil +=`\n`
// }
// console.log(hasil)


// const jumlah = (a,b)=>{
//   if(b){
//     return 'haha'
//   }
//   return typeof (a)
// }

// console.log(jumlah(2,2))


// var person = {fname:"John", lname:"Doe", age:25}; 
  
// var text = "";
// var x;
// for (x in person) {
//   text += person[x] + " ";
// }

// arr = [1,2,3,3]

// a = arr.findIndex(val => val==3)
// console.log((a))

a = 0
let b =''
console.log(b<a)