const operasiJummlah = (arrParam,val) => {
    let arrResult = []
    for(i = 0;i<arrParam.length;i++){
        arrResult[i] = val(arrParam[i])
    }
    return arrResult
}

arrParam = [1,2,3,4]

console.log(operasiJummlah
    (arrParam,(val) =>
        {
            return val + 1
        }
    )
)

arr = [1,2,3,4]



// console.log(arr.map((val)=> {return val*2}))
hasil=arr.map((val)=> {return val*2})
console.log(hasil)