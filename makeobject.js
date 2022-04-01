// Take 10 student inputs and marks and save them in an object.
const input=require("readline-sync")
// var name=input.question('enter the Name')
// var marks=input.questionInt("enter the marks")
dic={}
for(let i=0;i<10;i++){
    var name=input.question('enter the Name')
    var marks=input.questionInt("enter the marks")
    dic[name]=marks

}
console.log(dic)