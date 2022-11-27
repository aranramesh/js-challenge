// even numbers

// let num = 10;

// for(i =0 ; i<=10;i++){
//     if(i%2==0){
//         document.write(i)
//     }
// }

// multiplication the number

// let num = 2;

// let val = 10;

// for(i =0;i<=val;i++){
//     let res = i*num
//     document.write(res)
// }



// let number =[1,2,3,4,5,6,7];

// let val= 0;

// const sum = number.map(x => x + 2);
// console.log(sum);

// let sum1 = number.map(x => x * 2)
// console.log(sum1);

// const sum2 = number.find(x => x > 5)
// console.log(sum2);

// const sum3 = number.filter(x => x > 5)
// console.log(sum3);

// const sum4 =number.reduce((x,y) => x !==y)
// console.log(sum4);


// var str1 = "zoho";
// var str2 = "zohos";




// var count1 =str1.match(str2);
// var count2 =str2.match(/[a-z]/g);


var i = 1;
var list = document.getElementById("list");
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
  var itemsByTagName = document.getElementsByTagName("li");
  list.innerHTML += '<li>list ' + i++ + '</li>'
});

// push a value in center
let numbers =[1,2,3,4,5,6,7];

let result =numbers.splice(3,0,71)

// find a value in a
let fruits =["apple","banana","grape","cherry"];

let results =fruits.toString().match(/a/);

console.log(results);
// let results =fruits.reduce((total, item) => total.value==="a");
// console.log(results);



//find the array value and print the odd numbers only

//   const num = [4,5,6,7];
//   let sum = 0;

//   for (let i = 0; i < num.length; i++) {
//     if(i%2==0){
//     sum += num[i];
//     }
//   }
// console.log(sum);


// dom value input button color change
function Change(){
  let input = document.getElementById("input");
  let inputvalue=input.value;

  input.style.color=inputvalue;
}


// var num5=4567;
// var result7= 0;

// while(num5>0){
//   rem = num5%10
//   if(num5%2==0){
//     result7+=num5[i]
//   }
//   num5=(num5-rem)%10;
  
// }


function Calc(){
  let inp1=document.getElementById("inp1");
  let inp2=document.getElementById("inp2");
  let inp3=document.getElementById("inp3");
  let res =[];

let inpu1=inp1.value;
let inpu2=inp2.value;
let inpu3=inp3.value;

  res.push(inpu1,inpu2,inpu3)
  let find =res.sort()
  let mind =find.toString()
  console.log(mind);
  let result = parseInt(inpu1)+parseInt(inpu2)+parseInt(inpu3)
  document.getElementById("result").innerHTML=mind;

  // result =""
}

// var string1= "zoho";
// var string2= "zogo";

// let out ='';

// for(i=0;i<=string1.length;i++){ 
//   for(i=0;i<=string2.length;i++){
//     if(string1[i] !== string2[i]){
//       out+=string1[i] + string2[i];
//   }
// }
// document.write(out);

// }

var string1= "zoho";
var string2= "zogo";

let out ='';

for(i=0;i<=string1.length;i++){ 
  for(i=0;i<=string2.length;i++){
    if(string1[i] !== string2[i]){
      out+=string1[i] + string2[i];
  }
}
document.write(out);

}


