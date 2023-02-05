// feetToInch///////

// function feetToInch(feet){
//     const inch = feet * 12;
//     return inch;

// }

// const inch = feetToInch(20);
// console.log(inch);



// centimeterToMeter //////

// function centimeterToMeter(centimeter){
//  const meter = centimeter /100;
//  return meter;
// }

// const meter = centimeterToMeter(500);
// console.log(meter);


// paperRequirements ////////

// function paperRequirements(copyBookOne, copyBookTwo,copyBookThree){
// const fristBookNeedPage = 100;
// const secondBookNeedPage = 200;
// const thirdBookNeedPage = 300;

// const fristNeedPage = copyBookOne * fristBookNeedPage;
// const secondNeedPage = copyBookTwo * secondBookNeedPage;
// const thirdNeedPage = copyBookThree * thirdBookNeedPage;

// const totalPageNeed = fristNeedPage + secondNeedPage + thirdNeedPage;
// return totalPageNeed;

// }
// const totalPageNeed = paperRequirements(2, 2, 10);
// console.log(totalPageNeed);




// 0 to - number break loop////

const age = [12,23,14,56,89,47,23,20,54,95,12,0,1,3,4,8,-12,45,65];
let add = [];
for(let i = 0; i < age.length; i++){
    let element = age[i];
    if(element >= 0){
        add.push(element);
    }else{
        break;
    }
    console.log(element);
}


