module.exports = function toReadable (number) {
    if (number == 0){
        return 'zero'
    }
  let obj = {
    one:{
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
        10:"ten",
        11:"eleven",
        12:"twelve",
        13:"thirteen",
        14:"fourteen",
        15:"fifteen",
        16:"sixteen",
        17:"seventeen",
        18:"eighteen",
        19:"nineteen",
    },
    ten:{
        1:"ten",
        2:"twenty" ,
        3:"thirty",
        4:"forty",
        5:"fifty",
        6:"sixty",
        7:"seventy",
        8:"eighty",
        9:"ninety",
    }
  }
  ///123 321
  let arr = number.toString().split('').reverse();

//   return obj.one[arr[1]+arr[0]];
//123 => [1,2,3] =[3,2,1]

  let res = []
  res.push(obj.one[arr[0]]); // 1
  // res.push(obj.one.3]);
  if ( arr[1] < 2 && arr[1] != 0) {
      res.pop()
      res.push(obj.one[arr[1]+arr[0]])
  }else{
    
    res.push(obj.ten[arr[1]]); // 10 
    if (arr[1] == 0){res.pop()}
    
  }
  res.push(obj.one[arr[2]]+' hundred'); // 100
  if (!arr[2]){res.pop()}
  res.reverse()

  return res.join(' ').trim();

     
};
