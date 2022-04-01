// Write a program that removes the first key and value of a nested object.
// Example :-
// Input :-

myDict= {
1: 'NAVGURUKUL',
2: 'IN',
3:{
'A' : 'WELCOME',
'B' : 'To',
'C' : 'DHARAMSALA'
    }
}

// Output :-
// myDict= {
// 1: 'NAVGURUKUL',
// 2: 'IN',
// 3:
// { 'B' : 'To',
// 'C' : 'DHARAMSALA'
// }
// }

for( i in myDict){
    delete myDict[i]['A']
}
console.log(myDict)