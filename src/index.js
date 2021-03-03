module.exports = function toReadable (number) {
    if (number == 0){return 'zero'}
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
        },
      }
//123 => one ='3' ; ten ='2' , hundread = '1'
      let [one, ten, hundread] = number.toString().split('').reverse();       //123    3 2 1
//        ar[0] ar[1] ar[2]
                                                // обращ. в obj. one 
                                           // обращ. в obj. ten 


    let res = []
    if(hundread){                                                               // провер. наличие сотни
        res.push(obj.one[hundread] + ' hundred')                                                // усли true 
    } 
    if (ten == 1 ){                                                             // не стандарнтное
        res.push(obj.one[ten + one])                                                     // если true то от 11- 19
    } else {
        if (obj.ten[ten]) {
        res.push(obj.ten[ten])
        }
        if(obj.one[one]) {res.push(obj.one[one])}
    }
    return res.join(' ');     
}
