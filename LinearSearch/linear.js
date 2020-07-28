function linearSearch(list,target){
    for(var i = 0; i < list.length; i++){
        if (list[i] === target) return list[i]; 
     
    }
    return -1;
}
const read=require("readline-sync");
input = read.question("enter your number.... \n");
var list=[12,23,45,21,32,22,21,76,54,87,98]
console.log(linearSearch(list,values))