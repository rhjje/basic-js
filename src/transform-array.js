const CustomError = require("../extensions/custom-error");

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');
  // let result=[];
  //   if (!Array.isArray(arr)) throw new Error();

  //   for(let i=0; i<arr.length;i++){
  //       if (arr[i]==='--discard-next'){
  //           i+=1;
  //       } else if (arr[i]==='--discard-prev') {
  //               if (result.length) result.pop();
  //       } else if (arr[i]==='--double-next') {
  //               if (i<arr.length-1) result.push(arr[i+1]);
  //       } else if (arr[i]==='--double-prev') {
  //               if (i) result.push(arr[i-1]);
  //       } else {
  //           result.push(arr[i]);
  //       }
  //   }
    
  //   return result;
};






