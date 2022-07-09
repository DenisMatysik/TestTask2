function isPangram(string){
    let leterArr = string.toLowerCase().split("")
    let mas =["a","b","c","d","e","f","j","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for (let i=0; i<mas.length; i++){
      for (let y=0; y<leterArr.length; y++){
        if  (mas[i] === leterArr[y]){
          mas[i] = 1
        }
      }
    }
    console.log(mas.sort().reverse())
    let bool;

    for (let val of mas){
        if(val !=1){
            bool= false
            return bool
        } else {
            // console.log(true)
            bool= true
            return bool
        }
    }
    console.log(bool)    
  }

  // isPangram("The quick brown fox jumps over the lazy dog.")
  // isPangram("This is not a pangram.")


  function isIsogram(str){
    let inputStr = str.toLowerCase().split("").sort()
      let n = inputStr.length;
      if(n != 0){
        for (let i = 1; i < n; i++) { 
          if (inputStr[i-1] === inputStr[i]) return console.log(inputStr, false)
        } return console.log(inputStr, true)
      } else {
      } return console.log(inputStr, true)   
  }
  // isIsogram("Dermatoglyphics")
  // isIsogram("isogram")
  // isIsogram("aba")
  // isIsogram("moOse")
  // isIsogram("isIsogram")
  // isIsogram("")
  // isIsogram("a")

  function solution(number){
    let sum =0;
    for (; number-1>0; ){
      if (number%5 == 0 || number%3 == 0 ){
        sum = sum+number
       console.log(number, sum)
        number--
      }
      else number--
    }
  }
  // solution(10)

  function addBinary(a,b) {
    let sum = a+b
    console.log(sum.toString(2))
    let binar = (sum%2).toString()
    console.log(binar)

    for (;sum>1;){
      sum = parseInt(sum/2)
      binar = (sum%2) + binar
    }
    console.log(binar)
  }

  // addBinary(1,5)

  // function digital_root(n) {
  //   if (n>=10){
  //     let array = (""+n).split("").map(Number)
  //     let sum =0;
  //     for (let i=0;i<array.length;i++){
  //       sum = sum+ array[i]
  //       n=sum
  //     }
  //     // console.log(sum)
  //     // let total = array.reduce((previousValue, currentValue)=> {
  //     //   return previousValue+ currentValue},0)
  //     // console.log(total)
  //     digital_root(n)
  //     } else {
  //     return console.log(typeof(n))
  //   }
  // }


  function digital_root(n) {
    let res =0;
    String(n).split("").map(num=> {
      res = res + Number(num)
    })
    
    return res >10 ? digital_root(res): res
  }

  // digital_root(16)
  // digital_root(942)
  // digital_root(132189)
  // digital_root(493193)
  // digital_root(456)


  function getMiddle(s)
{
  let n= s.length;
  if (n%2 == 0) {
    console.log(`${s[(n/2)-1]}${s[n/2]}`)
  } else {
    console.log(`${s[((n+1)/2)-1]}`)
  } 


}

// getMiddle("test")
// getMiddle("testing")
// getMiddle("middle")
// getMiddle("A")

const binaryArrayToNumber = arr => {
  let arrClone = arr.reverse();
  let num =0 ;
  let sum = 0;

  for (let i = 0; i<arrClone.length;i++){
    if(arrClone[i] === 1){
      num = Math.pow(2,i);
      sum = sum+ num
    }
  }

   console.log(sum)

};

// binaryArrayToNumber([0,0,0,1])
// binaryArrayToNumber([0,0,1,0])
// binaryArrayToNumber([1,1,1,1])
// binaryArrayToNumber([0,1,1,0])

function solution(str){
  let arr = str.split("")
  arr.length%2 ==0 ? arr : arr.push("_")
  // console .log(arr);
  let newArr=[]
  for (let i=0; i<arr.length;i=i+2){
    newArr.push(`${arr[i]}${arr[i+1]}`)   
  }
  return newArr 
}
// solution("abcdef")
// solution("abcdefg")
// solution("")

// function moveZeros(arr) {
//   for (let i=0 ; i<arr.length; i++){

//     if (arr[i] === 0){
//       arr.splice(i,1)
//       arr.push(Number(0))
//     }
//     // arr[i] === 0 ? arr.splice(i,1) : arr
//   }
//   return console.log(arr)
// }

function moveZeros(arr) {
  let arrSymvol = arr.filter(function(x) {return x !== 0})
  let xero = arr.filter(function(x) {return x === 0})
  // console.log(arrSymvol,xero)
  return [...arrSymvol,...xero]
}
// moveZeros([1,2,0,1,0,1,0,3,0,1])
// moveZeros([ 0, [], 1, '1', 0 ])

function chech(s){
  const leftSymbols = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            leftSymbols.push(s[i]);
        }
        else if (s[i] === ')' && leftSymbols.length != 0 && leftSymbols[leftSymbols.length - 1] === '(') {
            leftSymbols.pop();
        } else {
          return false;
        }
    }
    return leftSymbols.length === 0;
}
// chech("(()()))(")

function solve(arr){
  const frequency = {};
  arr.forEach(value => {
    frequency[value] = frequency[value]+1 || 1;
  })
  console.log(frequency)
  return console.log([...arr].sort((a,b)=> frequency[b] -frequency[a] || b-a)) 
}
// solve([2,3,5,3,7,9,5,3,7])
// solve([1,2,3,0,5,0,1,6,8,8,6,9,1])


function domainName(url){
  url = url.replace("http://", "")
  url = url.replace("https://", "")
  url = url.replace("www.", "")
  return console.log(url.split(".")[0])
}
// domainName("http://google.com")
// domainName("http://google.co.jp")
// domainName("www.xakep.ru")
// domainName("https://youtube.com")


function humanReadable (seconds) {
  const hours = Math.floor(seconds/3600);
  const min = Math.floor((seconds - hours*3600)/60);
  const sec = seconds - (hours*3600) - (min*60);
  let secInf, minInf, hourInf;
  sec < 10 ? secInf = `0${sec}` : secInf = `${sec}`
  min <10 ? minInf = `0${min}:` : minInf = `${min}:`
  hours <10 ? hourInf = `0${hours}:` : hourInf = `${hours}:`
  return hourInf +minInf+secInf
}

// humanReadable(0)
// humanReadable(59)
// humanReadable(60)
// humanReadable(90)
// humanReadable(3599)
// humanReadable(86400)
// humanReadable(359999)


function isHollow(x){
  if (x.length <=4  || x[0] === 0 || x[x.length-1] === 0){
    return false
  } else {
    if (x.length %2 != 0){
      let newArr = x.slice(1, x.length-1);
      let middle = Math.trunc(newArr.length/2)
      console.log(newArr)
      newArr[middle] === 0 && newArr[middle] === newArr[middle-1] && newArr[middle-1] === newArr[middle+1]  ? console.log(true) : console.log(false)
    } else {
      // код для чётного количества 
    }
  }
}

// isHollow([-1,0,0,0,3]);
// isHollow([1,0,0,0,0]);
// isHollow([100,0,0,3])


function asdasd(x){
  let n=0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === ")") {
      n++;
    } else {
      if (x[i] === "(") {
        n--
      }
    }
  }
  return console.log(n=== 0)
}
// asdasd("(()())))((")

var min = function(list){
  const minVal = Math.min(...list)
  return console.log(minVal);
}

var max = function(list){
  const maxVal = Math.max(...list)
  return console.log(maxVal);
}
// min([-52, 56, 30, 29, -54, 0, -110])
// max([-52, 56, 30, 29, -54, 0, -110])


function upperCase (str){
  const newArr = str.split(" ")
  for (let i = 0; i < newArr.length; i++) {
    let upperWord = newArr[i][0].toUpperCase()
    let upperMass = newArr[i].split("");
    upperMass.splice(0,1,upperWord);
    newArr[i] = upperMass.join("");
  }
  return newArr.join(" ")
}

upperCase("How can mirrors be real if our eyes aren't real")