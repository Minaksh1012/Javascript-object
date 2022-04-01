
// Q2. Write a Python program to create a dictionary from a string.
// Note: Track the count of the letters from the string.
// Sample string : 'w3resource'
// Output: {'w': 1, '3': 1, 'r': 2, 'e': 2, 's': 1, 'o': 1, 'u': 1, 'c': 1}`
const input=require("readline-sync")
let x=input.question("enter the string ")
count=0
dic={}
for(let i=0;i<x.length;i++){
    count=0
    b=[]
    for(let j=0;j<x.length;j++){
        if (x[i]==x[j]){
            count++
        }
        dic[x[i]]=count
    }
}
console.log(dic)