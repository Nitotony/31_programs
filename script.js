// finding index of first occurence//


const arr1=[1,2,3,4,4,7,8];

console.log(arr1.indexOf(4));


//creating a new array with given length//

let arr2=Array(5);

console.log(arr2.length)


//Array de-duplication//

let arr=[1,2,3,4,5,1,2,3,2,3];


let arr3=Array.from(new Set(arr));

//or using filter

console.log(arr3);

 const arr4=arr.filter((elem,index)=>{
    return arr.indexOf(elem)==index;
})

console.log(arr4)





//finding intersection of two arrays//


let arr5=[1,2,3,4,5];
let arr6=[2,3,4,5];

let arr7=arr5.filter((elem)=>{return arr6.includes(elem)});

console.log(arr7);


//finding difference between two arrays//


let arr8=[1,2,3,4,5];
let arr9=[2,3,4,5,6];

let arr10=arr9.filter((elem)=>{return !(arr8.includes(elem))});

console.log(arr10);



//grouping of array elements


let arr11=[1,2,3,4,5,6,7,8,9]


let arr12=arr11.filter(elem=>{return (elem%2===0)})

console.log(arr12)


