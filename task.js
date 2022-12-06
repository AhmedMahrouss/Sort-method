let x=[2,10,1,20,5,30,3,45]
console.log(x.sort(function(a,b){return a-b})); //Accending Order


let y=[2,10,1,20,5,30,3,45]
console.log(x.sort((a,b)=>{return b-a})); //Decending Order