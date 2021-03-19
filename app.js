// All valid credit card numbers
const valid1 = "4539 6779 0801 6808";
const valid2 = "5535 7667 6875 1439";
const valid3 = "3716 1201 9985 236";
const valid4 = "6011 1443 4068 2905";
const valid5 = "4539 4049 6786 9666";

// All invalid credit card numbers
const invalid1 = "4532 7787 7109 1795";
const invalid2 = "5795 5933 9213 4643";
const invalid3 = "3757 9608 4459 914";
const invalid4 = "6011 1279 6177 7935";
const invalid5 = "5382 0197 7288 3854";

// Can be either valid or invalid
const notCertain1 = "3448 0196 8305 414";
const notCertain2 = "5466 1008 6162 0239";
const notCertain3 = "6011 3770 2096 2656 203";
const notCertain4 = "4929 8771 6921 7093";
const notCertain5 = "4913 5404 6307 2523";

// An array of all the arrays above

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, notCertain1, notCertain2, notCertain3, notCertain4, notCertain5];
let newBatch = [];
let mainBatch = [];
let intBatch = [];


   function transformArr(str){
         var mainBatch = [];
         str = str.replace(/\s+/g, "");
         str = str.split("");
         for (let i = 0; i < str.length; i++) {
             mainBatch.push(parseInt(str[i]));   
         }
         return mainBatch;
     
    






      console.log()

   }
   console.log(transformArr(valid1))
   



function validateCard(arr){

    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        var currentElt = arr[arr.length-1-i];
        if(i % 2 == 0){
            sum += currentElt;
        }else{
            sum += currentElt > 4?(2 * currentElt)-9 : 2 * currentElt;
        }


    }
return sum % 10 == 0;

}
   console.log(validateCard(transformArr(valid1)));
// 0 1 2 3 4 ===> all these in multiplication of 2 will be lesser than 9
// 5 6 7 8 ===> all these in multiplication of 2 will be greather than 9


function findInvalidCard(nestedArr){
let invalidCardIdentifier = [];

for(let i = 0; i < nestedArr.length; i++){
   if(validateCard(transformArr(nestedArr[i])) != true){
      invalidCardIdentifier.push(nestedArr);
   }


}
console.log(invalidCardIdentifier);

return invalidCardIdentifier;

}
findInvalidCard(batch);



function idInvalidCardIssuer(nestCom){

let companywithInvalidCard = []

for(let i =0; i < nestCom.length; i++){
if(nestCom[i][0] == 3){

companywithInvalidCard.push('Amex(American Express)');
}else if(nestCom[i][0] == 4){

companywithInvalidCard.push('Visa')

}else if(nestCom[i][0] == 5){
   companywithInvalidCard.push('MasterCard')
}else if(nestCom[i][0] == 6){
   companywithInvalidCard.push('Discover')
}else{
   console.log("Card issuer not found")
}



}
console.log(companywithInvalidCard)
return companywithInvalidCard;

}
idInvalidCardIssuer(batch)

