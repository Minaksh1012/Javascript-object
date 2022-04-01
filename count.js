// Write a program to print count a substring in a Main string.

var mainString="My name is kumar, and my friend’s name is Dhamu"
var subString="is"

// Output:

// The substring is there 2 times in main string.

var count=0
i=0
var a=mainString.split(" ")
for (i=0;i<a.length;i++){
    if (a[i]==subString){
        count+=1
        // i+=1
    }
}
console.log(" substring is there",+count+ " times in main string")