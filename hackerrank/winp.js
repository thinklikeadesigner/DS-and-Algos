
function winPrediction (groupArr,cartArr){
    return groupArr + cartArr
}





//     let group1 = groupArr[0];
//     let group2 = groupArr[1];
//     let group1Counter = 0;
//     let group2Counter = 0;
//     let group1Position = [null,null];
//     let group2Position = [null,null];

// if(!groupArr) return 1

//     for (let i=0;i<cartArr.length;i++){
//         if(group1Counter<group1.length&&(cartArr[i] === group1[group1Counter] || group1[group1Counter] === "anything")){
//             if(group1Counter === 0){
//                 group1Position[0] = i;
//             }
//             if (group1Counter === group1.length-1){
//                    group1Position[1] =i;
//             }
//             group1Counter++;
//         }else if (group1Counter>=group1.length){
//         }else{
//             group1Counter = 0;
//             group1Position = [null,null]
//         }
//         if(group2Counter<group2.length&&(cartArr[i] === group2[group2Counter] || group2[group2Counter] === "anything")){
//             console.log("Entered");
//             if(group2Counter === 0){
//                 group2Position[0] = i;
//             }
//             if (group2Counter === group2.length-1){
//                    group2Position[1] =i;
//             }
//             group2Counter++;
//         }else if (group2Counter>=group2.length){
//         }else{
//             group2Counter = 0;
//             group2Position = [null,null]
//         }
        
        
//     }
    
    
//     console.log("logging",group1Position,group2Position);
//     if(group1Position[1]<group2Position[0]||group2Position[1]<group1Position[0]){
//       console.log(0)
//             return 0
//         }else{
    
//           console.log(1)
//             return 1
    
//         }
//       }
    
//         winPrediction([["apple", "apple"], ["banana", "anything", "banana"]], ["banana", "orange", "banana", "apple", "apple"])


        module.exports = winPrediction