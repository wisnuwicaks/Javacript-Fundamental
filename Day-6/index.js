// let a = 4
// let b = 3
// let c 
// function fungsiJumlah(a,b)
// {
//     c = a+b
//     //return a+b
// }
// console.log(fungsiJumlah(a,b)+2) 

//jika tanpa return dalam fungsi maka hasil ini adalah NaN, dan jika pakai return maka
//fungsi(a,b) = 7 dan ketika di console.log(fungsiJumlah(a,b)+2) = 9

//default parameter = jika fungsi tidak diberi parameter maka nilai parameter tersebut menjadi default

// function fungsiJumlah2(a=1,b=2)
// {
//     c = a+b
//     return c
// }
// console.log(fungsiJumlah2(10,20))
// console.log(fungsiJumlah2(10))
// console.log(fungsiJumlah2(undefined,20))

const array = [80, 80, 50]; 

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// rata2=calculateAverage(array)
// console.log(rata2)
// hasil = calculateGrade(rata2)

//  console.log(calculateGrade(calculateAverage(array)));
//  console.log(calculateGrade(array));

// console.log(hasil)

// function calculateGrade(marks) {

//     let avg = calculateAverage(array)
//   if (marks>=90 && marks<=100)
//   {
//       return 'A'
//   }
//   else if(marks>=80 && marks <=89)
//   {
//       return 'B'
//   }
//   else if(marks>=70 && marks <=79)
//   {
//       return 'C'
//   }
//   else if(marks>=60 && marks <=69)
//   {
//       return 'D'
//   }
//   else if(marks>=0 && marks <=59)
//   {
//       return 'F'
//   }
// }

// function calculateAverage(array) {
//     let hasil = 0;
//   for (i=0;i<array.length;i++)
//   {
//     hasil+=array[i] 
//   }
// //   hasil=array[0] + array[1] + array[2] 
//  hasil = hasil/3
//   return hasil
// }

/*
Instructions:
Create 2 functions, A and G.
A receives an array of integers as an argument,
calculates the average value of the array, and returns
a grade based on that average value/score.
G receives an integer and returns a grade based on that integer.
Hint:
Call G inside of A
Input: [80, 80, 50]
Output: C
Input: [90, 90, 85, 72]
Output: B
*/


// function start () {
//    return function  () {
//       return [1,2,[
//         {
//           nama: 'Doraemon',
//           pekerjaan: 'Manjain orang'
//         },
//         {
//           nama: 'Seto',
//           kontak: {
//             rumah: 'BSD',
//             telfon: [081234, 432108]
//           }
//         }
//       ],4,5]
      
//     }
//     //return e
//   }

//   console.log(start()()[2][1].kontak.telfon[0])


let string = 'Saya suka jeruk karena saya dan jeruk suka jeruk dan saya'.split(' ')
let kataBeda=[]
kataBeda.push(string[0])
wordCounter = []
let modus = ''
let frekuensiTertinggi
for(i=0;i<string.length;i++)
{
    for(a=0;a<kataBeda.length;a++){
        if (string[i].toLowerCase()==kataBeda[a].toLowerCase()){
             break
        }else if ((string[i].toLowerCase()!==kataBeda[a].toLowerCase()) && (a==kataBeda.length-1) ) {
            kataBeda.push(string[i])
        }
    }
}
for(i=0;i<kataBeda.length;i++){
    wordCounter[i]=0
}
    for(i=0;i<kataBeda.length;i++){
        for(a=0;a<string.length;a++){
            if (kataBeda[i].toLowerCase()==string[a].toLowerCase()){
                wordCounter[i]+=1
        }
    }
    }
    
frekuensiTertinggi = Math.max(...wordCounter)
//[kataBeda]=[wordCounter]
for(i=0;i<wordCounter.length;i++){
    if(wordCounter[i]==frekuensiTertinggi)
    {
        modus += `${kataBeda[i]} `
    }
}

let c=kataBeda
c[0]='haha'
//[kataBeda] = wordCounter
console.log(modus)
