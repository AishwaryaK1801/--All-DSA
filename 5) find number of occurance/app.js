
let cl = console.log;


let nums = [10, 20, 30, 40, 50, 60, 10, 50, 30, 40, 40, 30, 80, 90, 90, 70];

let arrObj = {}

cl(arrObj.test)// dot notation result:undefined
cl(arrObj[10])// bracket notation result:undefined


let arrEleObj = {}

// nums.forEach(ele=>{
//     if(arrEleObj[ele]){
//         arrEleObj[ele]+=1
//     }
//     else{
//         arrEleObj[ele]=1
//     }
// })


const findCount = (arr) => {
    let arrEleObj = {}
    arr.forEach(ele => arrEleObj[ele] ? arrEleObj[ele] ++ : arrEleObj[ele] = 1)
    return arrEleObj
}

cl(findCount(nums))

// ***************************************************************
const findCount1 = (arr,i) => {
    let arrEleObj = {}
    arr.forEach(ele => arrEleObj[ele] ? arrEleObj[ele] ++ : arrEleObj[ele] = 1)
    return arrEleObj[i]
}

cl(findCount1(nums,30))

//*************************************************************** //
let result=nums.reduce((acc,cv)=>{
    acc[cv]?acc[cv]++:acc[cv]=1
    return acc
},{})
cl(result)




let a=[
    {
        b:'john'
    },
    {
        c:'may'
    }
]

let d = Object.keys(a)
console.log(d)